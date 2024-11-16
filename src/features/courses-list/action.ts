"use server";

import { revalidatePath } from "next/cache";
import { coursesRepsitory } from "./courses.repsitory";

export const createCourseAction = async (
  command: CreateCourseListElementCommand,
  revalidatePagePath: string,
) => {
  await coursesRepsitory.createCourseElement(command);
  revalidatePath(revalidatePagePath);
};
