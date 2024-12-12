import { Loader2 } from "lucide-react";
import type { ButtonHTMLAttributes } from "react";
import type { VariantProps } from "class-variance-authority";
import { Button, type buttonVariants } from "../ui/button";

interface IControlledBtn
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading: boolean;
}

export default function ControlledBtn({
  isLoading,
  className,
  children,
  ...props
}: IControlledBtn) {
  return (
    <Button disabled={isLoading} className={className ?? "w-full"} {...props}>
      {isLoading ? (
        <div className="flex items-center gap-4">
          <Loader2 className="animate-spin" />
          Carregando...
        </div>
      ) : (
        children
      )}
    </Button>
  );
}
