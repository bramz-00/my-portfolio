import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/molecules/tabs";

interface Tab {
  label: string;
  value: string;
  content: React.ReactNode;
}

interface ReusableTabsProps {
  tabs: Tab[];
  defaultValue?: string;
  className?: string;
}

export function ReusableTabs({ tabs, defaultValue, className }: ReusableTabsProps) {
  return (
    <Tabs defaultValue={defaultValue || tabs[0]?.value} className={className}>
      <TabsList className="flex items-center justify-center w-full text-xs">
        {tabs.map((tab) => (
          <TabsTrigger key={tab.value} value={tab.value}>
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>

      {tabs.map((tab) => (
        <TabsContent key={tab.value} value={tab.value}>
          {tab.content}
        </TabsContent>
      ))}
    </Tabs>
  );
}
