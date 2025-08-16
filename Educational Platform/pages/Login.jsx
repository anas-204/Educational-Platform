import FloatingBubble from "../src/components/floatingBubble";
import "../styles/login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [isPasswordHidden, setPasswordHidden] = useState(true);
  const handleClick = () => {
    navigate("/Register");
  };

  return (
    <>
      <div className="container1 d-flex">
        <div className="form-section col-xxl-3 col-xl-4 col-lg-5 col-md-5 col-sm-6 d-flex flex-column my-auto ">
          <h2 className="mx-auto">تسجيل الدخول</h2>
          <p className="mx-auto mb-4">أدخل بياناتك للوصول إلى حسابك</p>

          <label htmlFor="type" className="text-end px-3 pb-2 type mx-auto">
            أنا
          </label>

          <button className="text-start form-select mx-auto px-3 py-2 rounded-3">
            <span>
              طالب <i className="bi bi-person"></i>
            </span>
          </button>

          <div className="collapseMenu d-flex flex-column mx-auto input">
            <span>
              طالب <i className="bi bi-person"></i>
            </span>
            <span>
              معلم <i className="bi bi-person"></i>
            </span>
          </div>

          <div className="email mx-auto my-2">
            <label htmlFor="email" className="emailLabel text-end w-100 mb-1">
              البريد الإلكتروني
            </label>
            <div className="relative">
              <svg
                className="w-5 h-5 text-gray-400 absolute left-3 inset-y-0 my-auto"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
              <input
                type="email"
                placeholder="أدخل البريد الإلكتروني "
                className="col-12 form-control text-end"
                id="email"
              />
            </div>
          </div>

          <div className="password mx-auto my-2">
            <label
              htmlFor="password"
              className="passwordLabel text-end w-100 mb-1"
            >
              كلمة السر
            </label>
            <div className="relative">
              <button
                className="text-gray-400 absolute left-3 inset-y-0 active:text-gray-600"
                onClick={() => setPasswordHidden(!isPasswordHidden)}
              >
                {isPasswordHidden ? (
                  <svg
                    className="w-5 h-5 border-0"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 border-0"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                    />
                  </svg>
                )}
              </button>
              <input
                type={isPasswordHidden ? "password" : "text"}
                placeholder=" أدخل كلمة السر "
                className="col-12 form-control text-end w-full pr-12 pl-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                id="password"
              />
            </div>
          </div>

          <button className="submit mx-auto border-0 p-2" type="submit">
            دخول
          </button>

          <p className="mx-auto my-4">
            {" "}
            ليس لديك حساب ؟{" "}
            <span onClick={handleClick} className="navigation ">
              {" "}
              إنشاء حساب{" "}
            </span>
          </p>
        </div>

        <div className="avatar-section col-xxl-9 col-xl-8 col-lg-7 col-md-7 col-sm-6  position-relative">
          <FloatingBubble class="right-25 top-25" />
          <FloatingBubble class="left-50 bottom-25" />
          <FloatingBubble class="top-25 left-25" />
          <div className="avatar m-auto h-100 d-flex justify-content-center align-items-center flex-column">
            <img
              src={"../src/assets/teacher-avatar.png"}
              alt="avatar"
              className="img"
            />
            <p className="welcome">مرحباً بعودتك</p>
            <button onClick={handleClick}>سجل معانا</button>
          </div>
        </div>
      </div>
    </>
  );
}
