"use client";

import { Package, PlusCircle } from "lucide-react";
import React from "react";
import { PageHeaderCard } from "../_components/page-header-card";
import { Button } from "~/components/ui/button";
import { api } from "~/trpc/react";
import { DataTable } from "../../../components/table/data-table";
import { columns } from "./columns";
import { CreateGroupDialog } from "~/components/dialogs/create-groups";

export default function GroupsPage() {
  const { data, isLoading } = api.group.getAll.useQuery();
  const { data: products } = api.product.getAll.useQuery();

  const addProductButton = (
    <CreateGroupDialog
      existingProducts={
        products?.map((product) => ({
          id: product.id,
          name: product.name,
        })) ?? []
      }
      trigger={
        <Button size="default" className="gap-2">
          <PlusCircle className="h-4 w-4" />
          <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
            Adicionar Grupo
          </span>
        </Button>
      }
    />
  );

  return (
    <div className="flex-1">
      <PageHeaderCard
        icon={Package}
        title="Grupos"
        description="Gerencie seus grupos."
        action={addProductButton}
        className="shadow-lg"
      >
        {isLoading ? (
          <div className="flex items-center justify-center p-8">
            <span className="text-muted-foreground">Carregando grupos...</span>
          </div>
        ) : !data ? (
          <div className="flex items-center justify-center p-8">
            <span className="text-muted-foreground">
              Nenhum grupo cadastrado
            </span>
          </div>
        ) : (
          <DataTable columns={columns} data={data} />
        )}
      </PageHeaderCard>
    </div>
  );
}
