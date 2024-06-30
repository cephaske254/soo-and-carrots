import { Controller, Path, useFormContext } from "react-hook-form";
import { TextField, TextFieldProps } from "../form/TextField";

export const RHFTextField = <T extends object = Record<string, any>>({
  name,
  helperText,
  ...props
}: RHFTextFieldProps<T>) => {
  const { control } = useFormContext<T>();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...props}
          {...field}
          onChangeText={field.onChange}
          helperText={error?.message || helperText}
          error={props.error || !!error?.message}
        />
      )}
    />
  );
};

export type RHFTextFieldProps<T extends object> = {
  name: Path<T>;
} & TextFieldProps;
