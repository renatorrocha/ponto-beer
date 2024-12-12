"use client";

import { PlusCircle, Users } from "lucide-react";
import React from "react";
import { Button } from "~/components/ui/button";
import { PageHeaderCard } from "../_components/page-header-card";
import { CreateUserDialog } from "../../../components/dialogs/create-user";
import { api } from "~/trpc/react";

export default function UsersPage() {
  const { data } = api.user.getAll.useQuery();
  const addUserButton = (
    <CreateUserDialog
      trigger={
        <Button size="default" className="gap-2">
          <PlusCircle className="h-4 w-4" />
          <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
            Adicionar Usuário
          </span>
        </Button>
      }
    />
  );

  return (
    <div className="flex-1">
      <PageHeaderCard
        icon={Users}
        title="Usuários"
        description="Gerencie seus usuários."
        action={addUserButton}
        className="shadow-lg"
      >
        {data?.map((user) => <p key={user.id}>{user.name}</p>)}
      </PageHeaderCard>
    </div>
  );
}
