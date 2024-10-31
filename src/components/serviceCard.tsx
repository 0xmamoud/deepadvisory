import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { motion } from "framer-motion";

export function ServiceCard({ service }: {
  service: {
    icon: JSX.Element;
    title: string;
    description: string;
    content: string;
  };
}) {
  const { icon, title, description, content } = service;

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
      }}
    >
      <Card className="group relative overflow-hidden bg-[#15111E] transition-shadow hover:shadow-lg hover:shadow-[#6071A7]/10">
        <CardHeader>
          {icon}
          <CardTitle className="text-white">{title}</CardTitle>
          <CardDescription className="text-gray-300">{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-400">{content}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
