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
  form: UseFormReturn<any>;
}

export const FormFieldWrapper = ({ fieldName, form }: FormWrapperInterface) => {
  return (
    <FormField
      control={form.control}
      name={fieldName}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{capitalize(fieldName)}</FormLabel>
          <FormControl>
            <Input placeholder={`Enter your ${fieldName}: `} {...field}/>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    ></FormField>
  );
};
