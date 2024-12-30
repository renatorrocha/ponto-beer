"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import GroupForm from "../form/group-form";
import { api } from "~/trpc/react";
import { toast } from "sonner";

interface CreateGroupDialogProps {
  trigger: React.ReactNode;
  existingProducts: { id: string; name: string }[];
}

export function CreateGroupDialog({
  trigger,
  existingProducts,
}: CreateGroupDialogProps) {
  const [open, setOpen] = useState(false);
  const utils = api.useUtils();

  const { mutate, isPending } = api.group.create.useMutation({
    onSuccess: async () => {
      toast.success("Grupo Criado !");
      setOpen(false);

      await utils.group.getAll.invalidate();
    },
  });

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle>Criar novo Produto</DialogTitle>
        </DialogHeader>

        <GroupForm
          mutationFn={(data) => mutate(data)}
          isLoading={isPending}
          existingProducts={existingProducts}
        />
      </DialogContent>
    </Dialog>
  );
}
