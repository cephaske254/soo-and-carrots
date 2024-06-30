import { Controller, Path, useFormContext } from "react-hook-form";
import { PasswordField, PasswordFieldProps } from "../form/PasswordField";

export const RHFPasswordField = <T extends object = Record<string, any>>({
  name,
  helperText,
  ...props
}: RHFPasswordFieldProps<T>) => {
  const { control } = useFormContext<T>();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <PasswordField
          {...field}
          onChangeText={field.onChange}
          autoCapitalize="none"
          textContentType="password"
          {...props}
          helperText={error?.message || helperText}
          error={props.error || !!error?.message}
        />
      )}
    />
  );
};

export type RHFPasswordFieldProps<T extends object> = {
  name: Path<T>;
} & PasswordFieldProps;
