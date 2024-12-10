import dynamic from "next/dynamic";
import { useMemo } from "react";
import type { LucideProps } from "lucide-react";
import dynamicIconImports from "lucide-react/dynamicIconImports";

interface IconProps extends LucideProps {
  name: keyof typeof dynamicIconImports;
}

const Icon = ({ name, ...props }: IconProps) => {
  const LucideIcon = useMemo(() => dynamic(dynamicIconImports[name]), [name]);

  return <LucideIcon {...props} />;
};

export default Icon;
