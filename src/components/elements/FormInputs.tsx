import type { UseFormReturn } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export const Required = () => <span className="text-red-500">*</span>;

interface BasicInputProps {
  form: UseFormReturn<any>;
  name: string;
  label: string;
  required?: boolean;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  ref?: any;
  labelClass?: string;
}
export const BasicInput = ({
  form,
  name,
  label,
  placeholder = `Enter ${label} . . .`,
  required = false,
  disabled = false,
  className,
  ref,
  labelClass,
}: BasicInputProps) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className="w-full">
          <FormLabel className={labelClass}>
            {label} {required && <Required />}
          </FormLabel>
          <FormControl>
            <Input
              type="text"
              {...field}
              placeholder={placeholder}
              required={required}
              disabled={disabled}
              {...field}
              className={className}
              ref={ref}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

interface EmailInputProps {
  form: UseFormReturn<any>;
  name: string;
  label: string;
  required?: boolean;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
}
export const EmailInput = ({
  form,
  name,
  label,
  placeholder = "email@example.com",
  required = false,
  disabled = false,
}: EmailInputProps) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>
            {label} {required && <Required />}
          </FormLabel>
          <FormControl>
            <Input
              type="email"
              placeholder={placeholder}
              required={required}
              disabled={disabled}
              {...field}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

interface PasswordInputProps {
  form: UseFormReturn<any>;
  name: string;
  label: string;
  required?: boolean;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
}

export const PasswordInput = ({
  form,
  name,
  label,
  placeholder = "Enter password",
  required = false,
  disabled = false,
}: PasswordInputProps) => {
  const [visible, setVisible] = useState(false);
  const iconClass = "self-center w-5 h-5 -ml-10 cursor-pointer";
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <div className="flex items-center justify-between">
            <FormLabel>
              {label} {required && <Required />}
            </FormLabel>
          </div>
          <div className="flex">
            <FormControl>
              <Input
                type={visible ? "text" : "password"}
                placeholder={placeholder}
                required={required}
                disabled={disabled}
                {...field}
              />
            </FormControl>
            {visible ? (
              <Eye className={iconClass} onClick={() => setVisible(!visible)} />
            ) : (
              <EyeOff
                className={iconClass}
                onClick={() => setVisible(!visible)}
              />
            )}
          </div>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
