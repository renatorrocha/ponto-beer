"use client";

import { PlusCircle, Users } from "lucide-react";
import React from "react";
import { Button } from "~/components/ui/button";
import { PageHeaderCard } from "../_components/page-header-card";
import { CreateUserDialog } from '../_components/create-user-dialog';

export default function UsersPage() {
  const addUserButton = (
    <CreateUserDialog
      trigger={
        <Button size="default" className="gap-2">
          <PlusCircle className="h-4 w-4" />
          <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
            Add User
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
        <p>teste</p>
      </PageHeaderCard>
    </div>
  );
}
