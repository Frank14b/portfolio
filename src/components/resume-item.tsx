import { Card, Typography } from "@material-tailwind/react";

interface ResumeItemProps {
  icon: React.ElementType;
  children: React.ReactNode;
}

export function ResumeItem({ icon: Icon, children }: ResumeItemProps) {
  return (
    <div className="flex items-start gap-4">
      <Card
        color="gray"
        className="h-12 w-12 shrink-0 items-center justify-center !rounded-lg dark:bg-primaryBlack-600"
      >
        <Icon className="h-6 w-6" strokeWidth={2} />
      </Card>
      <Typography className="w-full font-normal !text-gray-500 mt-2">
        {children}
      </Typography>
    </div>
  );
}

export default ResumeItem;
