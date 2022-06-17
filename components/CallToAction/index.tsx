import { Button } from "@nextui-org/react";
import { Children } from "react";
import Link from "next/link";

type Props = {
  children: string;
  link: string;
};

export default function CallToAction({ children, link }: Props): JSX.Element {
  return (
    <>
      <Link href={link}>
        <Button color="gradient" shadow size="xl">
          {children}
        </Button>
      </Link>
    </>
  );
}
