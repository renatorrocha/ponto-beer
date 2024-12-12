"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { api } from "~/trpc/react";

import { Check, Loader2, X } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { setCookie } from "cookies-next";
import type { SearchParamProps } from "~/lib/types";
import { Paths } from "~/lib/constants";

export default function AuthenticatePage({
  params: { code },
}: SearchParamProps) {
  const router = useRouter();
  const [status, setStatus] = useState<"validating" | "success" | "error">(
    "validating",
  );

  const { mutate } = api.auth.verifyToken.useMutation({
    onSuccess: async (data) => {
      await setCookie("jwt", data.token);
      setStatus("success");
      setTimeout(() => router.push(Paths.Dashboard), 2000);
    },
    onError: (error) => {
      setStatus("error");
    },
  });

  useEffect(() => {
    if (typeof code === "string") {
      mutate({ token: code });
    } else {
      setStatus("error");
      toast.error("Link inválido", {
        description: "O link de autenticação é inválido.",
      });
    }
  }, [code]);

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Autenticação</CardTitle>
        <CardDescription>Validando seu Magic Link...</CardDescription>
      </CardHeader>
      <CardContent>
        {status === "validating" && (
          <div className="flex flex-col items-center space-y-4">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
            <p>Verificando sua identidade...</p>
          </div>
        )}
        {status === "success" && (
          <div className="flex flex-col items-center space-y-4 text-center">
            <Check className="size-16 text-green-500" />
            <p>Autenticação bem-sucedida!</p>
            <p className="text-sm text-gray-500">
              Redirecionando para o dashboard...
            </p>
          </div>
        )}
        {status === "error" && (
          <div className="flex flex-col items-center space-y-4 text-center">
            <X className="size-16 text-red-500" />
            <p>Falha na autenticação</p>
            <p className="text-sm text-gray-500">
              O link pode já ter sido utilizado ou ser inválido.
            </p>
            <Button onClick={() => router.push(Paths.login)}>
              Voltar para o login
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
