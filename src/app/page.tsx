import ButClick from "@/components/ui/ButClick";
import { CoursesList } from "@/features/courses-list/pub/courses-list";
import { CreateCourseForm } from "@/features/courses-list/pub/create-course-form";

export default function Home() {
  return (
    <div className="p-8">
      <main className="flex flex-col min-h-screen p-8">
        <CreateCourseForm revalidatePagePath="/" className="mb-3" />
        <CoursesList revalidatePagePath="/" />
        <ButClick />
      </main>
    </div>
  );
}
