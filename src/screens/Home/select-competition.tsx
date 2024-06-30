import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import {
  createRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useState,
} from "react";
import {
  FlatList,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { IconButton, TextField, Typography } from "src/components";
import { CompetitionCard } from "src/components/CompetitionCard";
import competitions from "src/dummy/competitions";
import { ArrowLeftIcon, SearchIcon } from "src/icons";
import { RootStackScreenProps } from "src/navigation";
import { spacing } from "src/theme";
import { Competition } from "src/types/competition";

const headerActionsRef = createRef<HeaderActions>();

export const SelectCompetitionHeader: React.FC<NativeStackHeaderProps> = ({
  navigation,
}) => {
  useEffect(() => {
    const listener = navigation.addListener("beforeRemove", (e) => {
      headerActionsRef.current?.reset();
    });

    return () => {
      listener();
    };
  }, [navigation]);

  const onSearch = () => {
    headerActionsRef.current?.onSearch();
  };

  return (
    <SafeAreaView edges={["top"]} style={styles.header}>
      <IconButton variant="contained" onPress={navigation.goBack}>
        <ArrowLeftIcon />
      </IconButton>

      <TextField
        defaultValue={headerActionsRef.current?.currentSearchValue}
        onChangeText={(value) => headerActionsRef.current?.onChange(value)}
        containerStyle={styles.headerInput}
        enterKeyHint="search"
        onEndEditing={onSearch}
        placeholder="Search competition..."
        endAdornment={
          <TouchableOpacity onPress={onSearch}>
            <SearchIcon />
          </TouchableOpacity>
        }
      />
    </SafeAreaView>
  );
};

const SelectCompetitionScreen: React.FC<SelecSelectCompetitionScreenProps> = ({
  navigation,
  route,
}) => {
  const { bottom } = useSafeAreaInsets();
  const [_data, setData] = useState(competitions);

  const onSearch = useCallback(() => {
    const value = headerActionsRef.current!.currentSearchValue;
    const filteredData = competitions.filter((item) => {
      return (
        item.title.toLowerCase().includes(value.toLowerCase()) ||
        item.description.toLowerCase().includes(value.toLowerCase())
      );
    });

    setData(filteredData);
  }, []);

  useImperativeHandle(
    headerActionsRef,
    () => {
      return {
        onSearch,
        currentSearchValue: "",
        onChange(value) {
          headerActionsRef.current!.currentSearchValue = value;
        },
        reset() {
          headerActionsRef.current!.currentSearchValue = "";
        },
      };
    },
    [onSearch]
  );

  const data = useMemo(() => {
    return [null, ..._data];
  }, [_data]);

  const header = useMemo(() => {
    return [
      <Typography key="title" variant="title2" style={styles.title}>
        Competition
      </Typography>,
      <Typography
        key="subtitle"
        variant="body2"
        color="grey.700"
        style={styles.subtitle}
      >
        An account is needed per one host. If you already have an account for
        the host of competition you want to sign up, you can login and register.
      </Typography>,
    ];
  }, [styles.title]);

  const handlePress = useCallback((item: Competition) => {
    return () => {
      navigation.setParams({ active_competition: item.uuid });
      navigation.navigate("register", { competition: item });
    };
  }, []);

  return (
    <FlatList
      contentContainerStyle={[styles.content, { paddingBottom: bottom }]}
      data={data}
      renderItem={({ item }) => {
        if (!item) return header as unknown as React.ReactElement;

        return (
          <View style={styles.competitionCard} key={item.uuid}>
            <CompetitionCard
              {...item}
              active={item.uuid === route.params.active_competition}
              onPress={handlePress(item)}
            />
          </View>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  header: {
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    backgroundColor: "white",
    flexDirection: "row",
  },
  headerInput: {
    flex: 1,
    marginLeft: spacing.sm,
  },
  title: {
    marginBottom: spacing.sm,
  },
  subtitle: {
    marginBottom: spacing.md,
  },
  content: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.sm,
  },
  competitionCard: {
    marginBottom: spacing.md,
  },
});

type SelecSelectCompetitionScreenProps =
  RootStackScreenProps<"select_competition">;

type HeaderActions = {
  onSearch(): void;
  currentSearchValue: string;
  onChange(value: string): void;
  reset(): void;
};

export default SelectCompetitionScreen;
