/*Auth*/
export const LOGIN = ({ API, payload }) =>
  API("auth/login", {
    method: "POST",
    body: JSON.stringify(payload),
  });

/*Student*/
export const SESSIONS = ({ API }) =>
  API("student/sessions", {
    method: "GET",
  });

/*Teacher*/
export const TEACHER_SESSIONS = ({ API }) =>
  API("teacher/session", {
    method: "GET",
  });

export const TEACHER_STUDENTS = ({ API, filter }) =>
  API(`teacher/student${filter}`, {
    method: "GET",

  });

export const TEACHER_CENTERS = ({ API }) =>
  API("teacher/center", {
    method: "GET",
  });
export const TEACHER_SESSIONS_CREATE = ({ API, payload }) =>
  API("teacher/session", {
    method: "POST",
    body: JSON.stringify(payload),
  });
export const TEACHER_QUIZZES = ({ API }) =>
  API("teacher/quiz", {
    method: "GET",
  });

/*Default*/
export default {
  LOGIN,
  SESSIONS,
  TEACHER_SESSIONS,
  TEACHER_STUDENTS,
  TEACHER_CENTERS,
  TEACHER_SESSIONS_CREATE,
};
