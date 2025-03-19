import { Input } from "./ui/input";
import { UseFormReturn } from "react-hook-form";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "./ui/form";

function capitalize(str: string) {
  return str[0].toUpperCase() + str.slice(1);
}

interface FormWrapperInterface {
  fieldName: string;
  displayName?: string;
  form: UseFormReturn<any>;
  placeholder?: string;
  disabled?: boolean;
}

export const FormFieldWrapper = ({
  fieldName,
  form,
  displayName = "",
  placeholder = "",
  disabled = false,
}: FormWrapperInterface) => {
  if (!displayName) {
    displayName = fieldName;
  }
  return (
    <FormField
      control={form.control}
      name={fieldName}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{capitalize(displayName)}</FormLabel>
          <FormControl>
            <Input
              disabled={disabled}
              placeholder={placeholder || `Enter your ${displayName}: `}
              {...field}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    ></FormField>
  );
};
