import AuthScreen from "@/components/templates/AuthScreen";
import AuthCover from "@/assets/AuthCover.png";
import { Form } from "@/components/ui/form";

import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { SignupSchema, type SignupSchemaType } from "@/schemas/auth";
import { useCustomForm } from "@/lib/use-form";
import {
  BasicInput,
  EmailInput,
  PasswordInput,
} from "@/components/elements/FormInputs";

// eslint-disable-next-line react-refresh/only-export-components
export const initialSignUpValues: SignupSchemaType = {
  email: "",
  password: "",
  confirmPassword: "",
  name: "",
};

export default function SignUp() {
  const SignUpForm = useCustomForm(SignupSchema, initialSignUpValues);

  async function handleSubmit(data: SignupSchemaType) {
    console.log("Signup data:", data);
  }

  return (
    <AuthScreen
      leftChildren={
        <Form {...SignUpForm}>
          <form onSubmit={SignUpForm.handleSubmit(handleSubmit)} noValidate>
            <div className="flex flex-col gap-4 mt-4">
              <BasicInput form={SignUpForm} name="name" label="Name" required />
              <EmailInput
                form={SignUpForm}
                name="email"
                label="Email"
                required
              />
              <PasswordInput
                name="password"
                form={SignUpForm}
                label="Password"
                required
              />
              <PasswordInput
                name="confirmPassword"
                form={SignUpForm}
                label="Confirm Password"
                required
              />
              <Button type="submit" className="w-full">
                Sign Up
              </Button>
            </div>
          </form>
        </Form>
      }
      imageSource={AuthCover}
      title="Create new account"
      description="Welcome! Please register and explore."
      footer={
        <>
          <Button variant="outline" className="w-full">
            Continue with Google
          </Button>
          <span className="text-gray-500 mt-2 text-sm">
            Already have an account?{" "}
            <Link
              to="/login"
              className="ml-auto inline-block text-sm underline-offset-4 text-primary hover:underline"
            >
              Login
            </Link>{" "}
          </span>
        </>
      }
    />
  );
}
