import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { MenuItem } from "@/lib/menu-data";

// Pure presentational component — safe in both server and client trees.
// Shared by the home "Featured drinks" strip and the Menu page grid.
export function MenuItemCard({ item }: { item: MenuItem }) {
  return (
    <Card className="h-full transition-all motion-safe:hover:-translate-y-0.5 hover:shadow-md">
      <CardHeader>
        <div className="flex items-baseline justify-between gap-2">
          <CardTitle className="font-heading">{item.name}</CardTitle>
          <span className="shrink-0 font-semibold text-caramel">
            {item.price}
          </span>
        </div>
        <CardDescription>{item.description}</CardDescription>
      </CardHeader>
    </Card>
  );
}
