import { useEffect, useRef } from "react";
import { StyleSheet, View } from "react-native";
import { NotificationModal, NotificationModalRef } from "src/components";
import { HomeStackScreenProps } from "src/navigation";

const HomeScreen: React.FC<HomeScreenProps> = ({
  navigation,
  route: { params },
}) => {
  const notificationRef = useRef<NotificationModalRef | null>(null);

  useEffect(() => {
    if (params?.register_success) {
      notificationRef.current?.open();
      navigation.setParams({ register_success: undefined });
    }
  }, [params?.register_success]);

  return (
    <View style={styles.container}>
      <NotificationModal
        title="Welcome to Soo"
        description="Great to have you with us!"
        ref={notificationRef}
        transparent
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

type HomeScreenProps = HomeStackScreenProps<"home">;
export default HomeScreen;
