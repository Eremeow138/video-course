// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

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

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
