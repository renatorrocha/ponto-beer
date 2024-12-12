"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";

import { api } from "~/trpc/react";
import { toast } from "sonner";
import ProductForm from "../form/products-form";

interface CreateProductDialogProps {
  trigger: React.ReactNode;
}

export function CreateProductDialog({ trigger }: CreateProductDialogProps) {
  const [open, setOpen] = useState(false);
  const utils = api.useUtils();

  const { mutate, isPending } = api.group.create.useMutation({
    onSuccess: async () => {
      setOpen(false);
      toast.success("Produto Criado !");
      await utils.group.getAll.invalidate();
    },
  });

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle>Criar novo usuário</DialogTitle>
        </DialogHeader>
        <ProductForm
          mutationFn={(data) => mutate(data)}
          isLoading={isPending}
        />
      </DialogContent>
    </Dialog>
  );
}
