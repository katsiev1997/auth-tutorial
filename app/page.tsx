import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <p className="font-semibold">Hello Auth!</p>
      <Button variant="custom" size="lg">
        Click Me
      </Button>
    </div>
  );
}
