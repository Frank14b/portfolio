import { Card, CardBody, Typography } from "@material-tailwind/react";

interface SkillCardProps {
  title: string;
  icon: React.ElementType;
  children: React.ReactNode;
}

export function SkillCard({ icon: Icon, title, children }: SkillCardProps) {
  return (
    <Card color="transparent" shadow={false} className="dark:bg-gray-900 border-[2px] border-gray-800">
      <CardBody className="grid justify-center text-center">
        <div className="mx-auto mb-6 grid place-items-center rounded-full bg-gray-900 p-2.5 text-white shadow">
          <Icon className="size-14 text-primaryBlue" strokeWidth={2} />
        </div>
        <Typography variant="h5" color="blue-gray" className="mb-2 text-white">
          {title}
        </Typography>
        <Typography className="px-8 font-normal !text-gray-500">
          {children}
        </Typography>
      </CardBody>
    </Card>
  );
}

export default SkillCard;
