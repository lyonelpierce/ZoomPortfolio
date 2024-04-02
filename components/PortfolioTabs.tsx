import Image from "next/image";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const portfolioItems = [
  {
    name: "Eliza Pierce",
    value: "elizapierce",
    description: "3D E-commerce Jewelry",
    url: "https://elizapierce.com/",
    favicon: "/images/eliza.svg",
  },
  {
    name: "Inkspire",
    value: "inkspire",
    description: "AI Tattoo Generator",
    url: "https://inkspireai.com/",
    favicon: "/images/inkspire.ico",
  },
  {
    name: "Calificatuprofe",
    value: "calificatuprofe",
    description: "Professor rating system",
    url: "https://calificatuprofe.ec/",
    favicon: "/images/rate.ico",
  },
];

const PortfolioTabs = () => {
  return (
    <Tabs defaultValue="elizapierce">
      <TabsList className="bg-zinc-800">
        {portfolioItems.map((item) => (
          <TabsTrigger
            value={item.value}
            className="rounded-b-none w-48"
            key={item.name}
          >
            <p className="text-xs truncate flex items-center">
              <Image
                src={item.favicon}
                alt={item.name}
                width={14}
                height={14}
                className="mr-2"
              />
              {item.name} - {item.description}
            </p>
          </TabsTrigger>
        ))}
      </TabsList>
      {portfolioItems.map((item) => (
        <TabsContent value={item.value} key={item.name}>
          <iframe src={item.url} className="absolute bottom-0 w-full h-[95%]" />
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default PortfolioTabs;
