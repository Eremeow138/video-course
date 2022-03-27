export const environment = {
  production: false,
  standalone: false
};
export const urls = {
  courses: "http://localhost:3004/courses",
  authors: "http://localhost:3004/authors",
  login: "http://localhost:3004/auth/login"
};

export const getCourseRequestParams = {
  startFrom: "start",
  countOfCourses: "count",
  searchString: "textFragment",
  sortKey: "sort"
};

export const getAuthorsRequestParams = {
  searchString: "textFragment",
};
