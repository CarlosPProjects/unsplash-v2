import { Loader2Icon } from "lucide-react";

const Loader = () => {
  return (
    <div className="w-full grid place-items-center">
      <Loader2Icon className="w-8 h-8 animate-spin" />
    </div>
  );
};

export default Loader;
