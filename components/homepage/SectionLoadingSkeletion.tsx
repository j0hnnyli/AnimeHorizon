import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};

const SectionLoadingSkeletion = ({ className }: Props) => {
  return (
    <div
      className={cn(
        "h-80 animate-pulse rounded-lg bg-gray-500 my-16 w-[90%] mx-auto",
        className
      )}
    ></div>
  );
};

export default SectionLoadingSkeletion;
