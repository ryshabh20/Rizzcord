import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const state = true;
export default function Home() {
  return (
    <div>
      <p className="text-3xl font-bold text-indigo-500">Hello Rizzcord Clone</p>
      <Button className={state ? "bg-indigo-500" : "bg-red-40"}>
        Click Me
      </Button>
    </div>
  );
}
