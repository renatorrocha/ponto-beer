"use client";

import { Package } from "lucide-react";
import React from "react";
import { PageHeaderCard } from "../_components/page-header-card";

export default function ProductsPage() {
  const addProductButton = <p>WIP</p>;

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
