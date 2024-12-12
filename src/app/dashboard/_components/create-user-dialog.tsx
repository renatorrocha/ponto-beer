"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";

import UserForm from "~/components/form/user-form";
import { api } from "~/trpc/react";
import { toast } from "sonner";

interface CreateUserDialogProps {
  trigger: React.ReactNode;
}

export function CreateUserDialog({ trigger }: CreateUserDialogProps) {
  const [open, setOpen] = useState(false);
  const utils = api.useUtils();

  const { mutate, isPending } = api.user.create.useMutation({
    onSuccess: async () => {
      setOpen(false);
      toast.success("Usuário Criado !");
      await utils.user.getAll.invalidate();
    },
  });

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle>Criar novo usuário</DialogTitle>
        </DialogHeader>
        <UserForm mutationFn={(data) => mutate(data)} isLoading={isPending} />
      </DialogContent>
    </Dialog>
  );
}
