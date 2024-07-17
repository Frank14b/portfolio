import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function CustomNextLink({
  children,
  className,
  ...props
}: LinkProps & {
  children?: React.ReactNode;
  className?: string;
}) {
  //
  const pathname = usePathname();

  const handleOnClick = () => {
    if (pathname != props.href) {
    }
  };

  return (
    <Link onClick={handleOnClick} {...props} className={className}>
      {children}
    </Link>
  );
}
