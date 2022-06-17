import { CourseData } from "../../types";
import { Card, Text } from "@nextui-org/react";
import Link from "next/link";

interface Props extends CourseData {}

export default function CourseCard({ coursecode, name }: Props): JSX.Element {
  return (
    <Link href={`/courses/${coursecode}`}>
      <Card isPressable isHoverable variant="bordered">
        <Text h1={true}>{name}</Text>
        <Text h2={true}>{coursecode}</Text>
      </Card>
    </Link>
  );
}
