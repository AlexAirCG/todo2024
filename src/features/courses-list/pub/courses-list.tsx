import { revalidatePath } from "next/cache";
import { coursesRepsitory } from "../courses.repsitory";
import { CourseItem } from "../ui/course-item";

export async function CoursesList({
  revalidatePagePath,
}: {
  revalidatePagePath: string;
}) {
  const coursesList = await coursesRepsitory.getCoursesList();

  const handleDeleteAction = async (courseId: string) => {
    "use server";

    await coursesRepsitory.deleteCourseElement({ id: courseId });
    revalidatePath(revalidatePagePath);
  };

  return (
    <div className="flex flex-col gap-3">
      {coursesList.map((course) => (
        <CourseItem
          key={course.id}
          course={course}
          onDelet={handleDeleteAction.bind(null, course.id)}
        />
      ))}
    </div>
  );
}
