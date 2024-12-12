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

interface CreateUserDialogProps {
  trigger: React.ReactNode;
  onSuccess?: () => void;
}

export function CreateUserDialog({
  trigger,
  onSuccess,
}: CreateUserDialogProps) {
  const [open, setOpen] = useState(false);
  const isPending = false;

  // async function onSubmit() {
  //   setOpen(false);
  //   onSuccess?.();

  //   setIsLoading(false);
  // }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle>Criar novo usuário</DialogTitle>
        </DialogHeader>
        <UserForm
          mutationFn={(data) => console.log(data)}
          isLoading={isPending}
        />
      </DialogContent>
    </Dialog>
  );
}
