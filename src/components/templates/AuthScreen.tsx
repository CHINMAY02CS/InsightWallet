import type { ReactNode } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChartNoAxesCombined } from "lucide-react";

export default function AuthScreen({
  leftChildren,
  imageSource,
  title,
  description,
  footer,
}: {
  leftChildren: ReactNode;
  footer?: ReactNode;
  imageSource: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="flex items-center w-full h-screen">
      <div className="lg:w-1/2 h-full flex items-center justify-center">
        <Card className="w-full max-w-md border-0 shadow-none">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-3xl">
              <ChartNoAxesCombined className="text-primary" /> InsightWallet
            </CardTitle>
            <CardDescription className="mt-4">
              <p className="text-2xl font-bold text-black">{title}</p>
              {description && (
                <p className="text-gray-500 mt-2">{description}</p>
              )}
            </CardDescription>
            {/* <CardAction>
          <Button variant="link">Sign Up</Button>
        </CardAction> */}
          </CardHeader>
          <CardContent>{leftChildren}</CardContent>
          {footer && (
            <CardFooter className="flex-col gap-2">{footer}</CardFooter>
          )}
        </Card>
      </div>
      <div className="lg:w-1/2 hidden h-screen lg:block">
        <img
          src={imageSource}
          alt="Image"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
