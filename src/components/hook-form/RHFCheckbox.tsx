import { Controller, Path, useFormContext } from "react-hook-form";
import { Checkbox, CheckboxProps } from "../form/Checkbox";

export const RHFCheckbox = <T extends object = {}>({
  name,
  ...props
}: RHFCheckboxProps<T>) => {
  const { control } = useFormContext<T>();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <Checkbox
          {...props}
          checked={field.value}
          onChange={field.onChange}
          helperText={fieldState.error?.message ?? props.helperText}
          error={!!fieldState.error}
        />
      )}
    />
  );
};

export type RHFCheckboxProps<T extends object> = {
  name: Path<T>;
} & CheckboxProps;
