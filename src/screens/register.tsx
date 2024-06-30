import { useForm } from "react-hook-form";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import {
  Button,
  IconButton,
  InputLabel,
  InputLabelProps,
  RHFTextField,
  RHFPasswordField,
  Typography,
} from "src/components";
import { FormProvider } from "src/components/hook-form/FormProvider";
import { ArrowLeftIcon, ChevronDownIcon } from "src/icons";
import { GREY, spacing } from "src/theme";
import { RHFCheckbox } from "src/components/hook-form/RHFCheckbox";
import type { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { useCallback, useEffect } from "react";
import { RootStackScreenProps } from "src/navigation";

const PASSWORD_CHARACTERS_REGEX = /^[a-zA-Z0-9(~`!@#$%^&*()_+-=?) ]+$/;

const CHECKBOX_LABEL_PROPS: Omit<InputLabelProps, "children"> = {
  color: "grey.600",
  fontFamily: "PlusJakartaSans-Regular",
  variant: "body2",
  style: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
};

export const RegisterScreenHeader = (props: NativeStackHeaderProps) => {
  return (
    <SafeAreaView edges={["top"]} style={styles.header}>
      <IconButton variant="outline" onPress={props.navigation.goBack}>
        <ArrowLeftIcon />
      </IconButton>

      <Typography
        variant="title2"
        color="grey.900"
        style={{
          paddingLeft: spacing.md,
          lineHeight: 24,
        }}
      >
        Create Account
      </Typography>
    </SafeAreaView>
  );
};

const RegisterScreen: React.FC<RegisterScreenProps> = ({
  navigation,
  route: { params },
}) => {
  const methods = useForm({
    resolver: yupResolver(schema),
    defaultValues,
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const passwordErrors = methods.formState.errors.password?.message;

  const onSubmit = methods.handleSubmit(async () => {
    navigation.navigate("Home", {
      screen: "home",
      params: {
        register_success: true,
      },
    });
  });

  const openCategorySelector = useCallback(() => {
    navigation.navigate("select_competition", {
      active_competition: params?.competition?.uuid,
    });
  }, [params?.competition?.uuid, navigation]);

  useEffect(() => {
    if (params?.competition?.uuid) {
      methods.setValue("competition", params?.competition?.title);
    }
  }, [params?.competition?.uuid]);

  return (
    <View style={styles.container}>
      <ScrollView
        style={[styles.container, { paddingHorizontal: spacing.lg }]}
        contentContainerStyle={styles.content}
      >
        <FormProvider methods={methods}>
          <TouchableOpacity onPress={openCategorySelector} activeOpacity={0.9}>
            <RHFTextField<FieldValues>
              placeholder="Competition to signup*"
              readOnly
              name="competition"
              endAdornment={
                <ChevronDownIcon style={{ marginRight: spacing["2xs"] }} />
              }
            />
          </TouchableOpacity>
          <RHFTextField<FieldValues>
            name="email"
            placeholder="Email *"
            containerStyle={styles.inputStyles}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <RHFPasswordField<FieldValues>
            name="password"
            hideErrors
            placeholder="Password *"
            containerStyle={styles.inputStyles}
            innerContainerStyle={styles.inputGroupTop}
            textContentType="newPassword"
          />
          <RHFPasswordField<FieldValues>
            name="confirm_password"
            placeholder="Confirm Password *"
            helperText={passwordErrors}
            error={!!passwordErrors}
            innerContainerStyle={styles.inputGroupBottom}
            textContentType="newPassword"
          />

          <RHFTextField<FieldValues>
            name="first_name"
            placeholder="First Name in English *"
            containerStyle={styles.inputStyles}
          />
          <RHFTextField<FieldValues>
            name="last_name"
            placeholder="Last Name in English *"
            containerStyle={styles.inputStyles}
          />

          <RHFCheckbox<FieldValues>
            name="terms_and_conditions"
            containerStyle={styles.inputStyles}
            label={
              <InputLabel
                {...CHECKBOX_LABEL_PROPS}
                style={{
                  flex: 1,
                  marginTop: -6,
                  marginBottom: 6,
                }}
              >
                By signing up, I agree to Cloit's{" "}
                <InputLabel {...CHECKBOX_LABEL_PROPS} underlined>
                  Terms & Conditions
                </InputLabel>{" "}
                and{" "}
                <InputLabel {...CHECKBOX_LABEL_PROPS} underlined>
                  Privacy Policy
                </InputLabel>
                .
              </InputLabel>
            }
          />

          <Button
            variant="contained"
            rounded
            onPress={onSubmit}
            containerStyles={{
              marginTop: spacing.xl,
            }}
          >
            Sign Up
          </Button>
        </FormProvider>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    backgroundColor: "white",
  },
  container: {
    flex: 1,
  },
  content: {
    flexGrow: 1,
    paddingTop: spacing.md,
  },
  inputStyles: {
    marginTop: spacing.lg,
  },
  inputGroupTop: {
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomWidth: 1,
    borderBottomColor: GREY[100],
  },
  inputGroupBottom: {
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
  },
});

const schema = yup.object().shape({
  competition: yup
    .string()
    .required("You must pick a competition to register")
    .default(null),

  email: yup
    .string()
    .email("Email format is invalid")
    .required("Email is required"),
  password: yup
    .string()
    .nullable()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .matches(PASSWORD_CHARACTERS_REGEX, {
      message: "Special letters are only limited to (~`!@#$%^&*()_-+=?)",
      excludeEmptyString: true,
    }),
  confirm_password: yup
    .string()
    .nullable()
    .test({
      skipAbsent: false,
      message: "Password and Confirm password do not match.",
      test(value, context) {
        return !context.parent.password || context.parent.password === value;
      },
    }),
  first_name: yup.string().required("First name is required"),
  last_name: yup.string().required("Last name is required"),

  terms_and_conditions: yup
    .boolean()
    .default(false)
    .oneOf([true], "You must agree to the terms and conditions"),
});

const defaultValues: FieldValues = {
  competition: "",
  confirm_password: "",
  email: "",
  first_name: "",
  last_name: "",
  password: "",
  terms_and_conditions: false,
};

type FieldValues = yup.InferType<typeof schema>;

type RegisterScreenProps = RootStackScreenProps<"register">;

export default RegisterScreen;
