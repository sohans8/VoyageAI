import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function SearchForm() {
  return (
    <div className="mt-10 rounded-2xl bg-white/10 backdrop-blur-lg p-6 shadow-xl">
      <div className="grid gap-4 md:grid-cols-4">
        <Input placeholder="Destination" />
        <Input placeholder="Budget (₹)" />
        <Input placeholder="Days" />
        <Button>Generate Trip</Button>
      </div>
    </div>
  );
}