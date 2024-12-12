"use client";

import { Package, PlusCircle } from "lucide-react";
import Link from "next/link";
import React from "react";
import { buttonVariants } from "~/components/ui/button";
import { Paths } from "~/lib/constants";
import { PageHeaderCard } from "../_components/page-header-card";

export default function ProductsPage() {
  const addProductButton = (
    <Link
      href={Paths.CreateProduct}
      className={buttonVariants({
        size: "default",
        className: "gap-2",
      })}
    >
      <PlusCircle className="h-4 w-4" />
      <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
        Adicionar Produto
      </span>
    </Link>
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
        <p>teste</p>
      </PageHeaderCard>
    </div>
  );
}
