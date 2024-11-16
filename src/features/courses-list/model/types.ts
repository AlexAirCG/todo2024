/* eslint-disable @typescript-eslint/no-unused-vars */
type CourseListElement = {
  id: string;
  name: string;
  desctiption: string;
};

type CreateCourseListElementCommand = {
  name: string;
  desctiption: string;
};

type DeleteCourseListElementCommand = {
  id: string;
};
