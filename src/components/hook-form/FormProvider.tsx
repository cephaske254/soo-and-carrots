import {
  FormProvider as RHFFormProvider,
  UseFormReturn,
} from "react-hook-form";

export const FormProvider = <T extends object>({
  methods,
  children,
}: FormProviderProps<T>) => {
  return <RHFFormProvider {...methods}>{children}</RHFFormProvider>;
};

export type FormProviderProps<T extends object = {}> = {
  methods: UseFormReturn<T>;
  children: React.ReactNode;
};
