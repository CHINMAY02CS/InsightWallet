import AuthScreen from "@/components/templates/AuthScreen";
import AuthCover from "@/assets/AuthCover.png";
import { Form } from "@/components/ui/form";

import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { LoginSchema, type LoginSchemaType } from "@/schemas/auth";
import { useCustomForm } from "@/lib/use-form";
import { EmailInput, PasswordInput } from "@/components/elements/FormInputs";

// eslint-disable-next-line react-refresh/only-export-components
export const initialLoginValues: LoginSchemaType = {
  email: "",
  password: "",
};

export default function Login() {
  const LoginForm = useCustomForm(LoginSchema, initialLoginValues);

  async function handleSubmit(data: LoginSchemaType) {
    console.log("Login data:", data);
  }

  return (
    <AuthScreen
      leftChildren={
        <Form {...LoginForm}>
          <form onSubmit={LoginForm.handleSubmit(handleSubmit)} noValidate>
            <div className="flex flex-col gap-6 mt-4">
              <EmailInput
                form={LoginForm}
                name="email"
                label="Email"
                required
              />
              <PasswordInput
                name="password"
                form={LoginForm}
                label="Password"
                required
              />
              <Button type="submit" className="w-full">
                Login
              </Button>
            </div>
          </form>
        </Form>
      }
      imageSource={AuthCover}
      title="Login to you account"
      description="Welcome back! Please enter your details."
      footer={
        <>
          <Button variant="outline" className="w-full">
            Continue with Google
          </Button>
          <span className="text-gray-500 mt-2 text-sm">
            Don't have an account?{" "}
            <Link
              to="#"
              className="ml-auto inline-block text-sm underline-offset-4 text-primary hover:underline"
            >
              Sign Up
            </Link>{" "}
          </span>
        </>
      }
    />
  );
}
