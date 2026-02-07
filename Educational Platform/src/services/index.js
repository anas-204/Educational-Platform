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

export const TEACHER_STUDENTS = ({ API }) =>
  API("teacher/student", {
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

/*Default*/
export default {
  LOGIN,
  SESSIONS,
  TEACHER_SESSIONS,
  TEACHER_STUDENTS,
  TEACHER_CENTERS,
  TEACHER_SESSIONS_CREATE,
};
