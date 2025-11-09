import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

/**
 * Declares a form using useForm with validation schema and initial values.
 * @param schema - The Zod schema for form validation.
 * @param initialValues - The default values for the form fields.
 * @returns A form instance with validation and default values.
 */
export function useCustomForm(schema: any, initialValues: any) {
  return useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: initialValues,
    mode: "onChange",
  });
}
