"use client";

import { Folder, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import { toast } from "sonner";
import { PageHeaderCard } from "~/app/dashboard/_components/page-header-card";
import GroupForm from "~/components/form/group-form";
import { Paths } from "~/lib/constants";
import { api } from "~/trpc/react";

export default function EditGroupPage() {
  const router = useRouter();
  const { id } = useParams();
  const utils = api.useUtils();
  const { data: group } = api.group.getById.useQuery({ id: id as string });
  const { data: products } = api.product.getAll.useQuery();
  const { mutate, isPending } = api.group.update.useMutation({
    onSuccess: async () => {
      await utils.group.getAll.invalidate();
      toast.success(`Grupo "${group?.name}" atualizado com sucesso!`);
      router.push(Paths.Groups);
    },
  });

  if (!group || !products) {
    return (
      <div className="flex h-screen flex-1 items-center justify-center">
        <Loader2 className="size-8 animate-spin" />
      </div>
    );
  }

  return (
    <div className="flex-1">
      <PageHeaderCard
        icon={Folder}
        title={`Editar Grupo "${group.name}"`}
        description="Edite o grupo selecionado."
        className="shadow-lg"
      >
        <GroupForm
          mutationFn={(data) => {
            mutate({
              id: group.id,
              name: data.name,
              products: data.products.map((product) => ({
                id: product.id,
              })),
            });
          }}
          existingProducts={products?.map((product) => ({
            id: product.id,
            name: product.name,
          }))}
          isLoading={isPending}
          group={group}
        />
      </PageHeaderCard>
    </div>
  );
}
