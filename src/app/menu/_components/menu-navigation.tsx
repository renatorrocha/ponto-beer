import { Button } from "~/components/ui/button";
import type { Group } from "~/lib/validations";

interface MenuNavigationProps {
  groups: Group[];
  onNavigate: (index: number) => void;
}

export function MenuNavigation({ groups, onNavigate }: MenuNavigationProps) {
  return (
    <div className="sticky top-0 z-20 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="scrollbar-none flex justify-evenly gap-2 overflow-x-auto px-8 py-4">
        {groups.map((group, index) => (
          <Button
            key={index}
            variant="outline"
            className="whitespace-nowrap"
            onClick={() => onNavigate(index)}
          >
            {group.name}
          </Button>
        ))}
      </nav>
      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </div>
  );
}
