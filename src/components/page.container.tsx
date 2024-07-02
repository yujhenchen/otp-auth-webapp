import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function PageContainer({ children }: Props) {
  return (
    <div className="container relative min-h-screen mx-auto text-center">
      {children}
    </div>
  );
}
