"use client";

import { Package, PlusCircle } from "lucide-react";
import React from "react";
import { PageHeaderCard } from "../_components/page-header-card";
import { CreateProductDialog } from "~/components/dialogs/create-products";
import { Button } from "~/components/ui/button";
import { api } from "~/trpc/react";
import { DataTable } from "../../../components/table/data-table";
import { columns } from "./columns";

export default function ProductsPage() {
  const { data, isLoading } = api.group.getAll.useQuery();
  const addProductButton = (
    <CreateProductDialog
      trigger={
        <Button size="default" className="gap-2">
          <PlusCircle className="h-4 w-4" />
          <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
            Adicionar Produto
          </span>
        </Button>
      }
    />
  );

  return (
    <div className="flex-1">
      <PageHeaderCard
        icon={Package}
        title="Produtos"
        description="Gerencie seus produtos."
        action={addProductButton}
        className="shadow-lg"
      >
        {isLoading ? (
          <div className="flex items-center justify-center p-8">
            <span className="text-muted-foreground">
              Carregando produtos...
            </span>
          </div>
        ) : !data ? (
          <div className="flex items-center justify-center p-8">
            <span className="text-muted-foreground">
              Nenhum produto cadastrado
            </span>
          </div>
        ) : (
          <DataTable columns={columns} data={data} />
        )}
      </PageHeaderCard>
    </div>
  );
}
