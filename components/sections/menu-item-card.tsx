"use client";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useLanguage } from "@/hooks/useLanguage";
import type { MenuItem } from "@/lib/menu-data";

// Shared by the home "Featured drinks" strip and the Menu page grid.
export function MenuItemCard({ item }: { item: MenuItem }) {
  const { t } = useLanguage();

  return (
    <Card className="h-full transition-all motion-safe:hover:-translate-y-0.5 hover:shadow-md">
      <CardHeader>
        <div className="flex items-baseline justify-between gap-2">
          <CardTitle className="font-heading">
            {t(`menu.items.${item.id}.name`)}
          </CardTitle>
          <span className="shrink-0 font-semibold text-caramel">
            {item.price}
          </span>
        </div>
        <CardDescription>
          {t(`menu.items.${item.id}.description`)}
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
