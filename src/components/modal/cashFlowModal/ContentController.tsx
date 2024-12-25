import { cn } from "@/lib/utils";

type ContentControllerProps = {
  children: React.ReactNode;
  styles?: string;
};

function ContentController({ children, styles }: ContentControllerProps) {
  return <div className={cn("mb-10 flex gap-2 items-center", styles && styles)}>{children}</div>;
}

export default ContentController;
