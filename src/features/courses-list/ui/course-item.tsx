"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useTransition } from "react";

export function CourseItem({
  course,
  onDelet,
}: {
  course: CourseListElement;
  onDelet: () => Promise<void>;
}) {
  const [isLoadingDelete, startDeleteTransinion] = useTransition();
  const handleDelete = () => {
    startDeleteTransinion(async () => {
      await onDelet();
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>{course.name}</CardTitle>
        <CardDescription>{course.desctiption}</CardDescription>
      </CardHeader>

      <CardFooter>
        <Button disabled={isLoadingDelete} onClick={handleDelete}>
          Удалить
        </Button>
      </CardFooter>
    </Card>
  );
}
