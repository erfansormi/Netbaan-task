import { ReactNode } from "react";

const AssetsBoxIcon = ({
  icon,
  title,
  value,
}: {
  title: string;
  value: string | number;
  icon: ReactNode;
}) => {
  return (
    <div className="flex items-center gap-1.5">
      <div className="rounded-md bg-brand-cyan size-10 center">{icon}</div>
      <div className="flex flex-col">
        <span>{title}</span>
        <span className="text-base leading-none">{value}</span>
      </div>
    </div>
  );
};

export default AssetsBoxIcon;
