
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





/*Default*/
export default {
  LOGIN,
  SESSIONS,
};
