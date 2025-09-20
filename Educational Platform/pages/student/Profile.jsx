import "../../styles/profilePage.css";
import ProfileImage from "../../src/assets/profile-image.jpg";
import ProfileSmallCard from "../../src/components/cards/student/ProfileSmallCard";
import ProfileBigCard1 from "../../src/components/cards/student/ProfileBigCard";
import axios from "axios";
import { useState, useEffect } from "react";
export default function Profile() {
  const [studentInfo, setStudentInfo] = useState([]);
  const sectionMap = {
    third_sec: "الثالث الثانوي",
    second_sec_scientific: "الثاني الثانوي - علمي",
    second_sec_literary: "الثاني الثانوي - أدبي",
  };
  console.log(studentInfo.section);

  const studentSection = sectionMap[studentInfo.section] || "";

  useEffect(() => {
    getStudentInfo();
  }, []);

  const getStudentInfo = async () => {
    const token = localStorage.getItem("authToken");
    try {
      const response = await axios.get("http://localhost:3000/student/info", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setStudentInfo(response.data);
      response.section = sectionMap[response.section] || "الأول الثانوي";
    } catch (error) {
      console.error("Error fetching Info:", error);
    }
  };
  return (
    <>
      <div
        className="profilePage col-11 col-xl-12 mx-auto mx-md-0 pb-4"
        style={{ height: "inherit" }}
      >
        <div className="profilePageHeader d-flex justify-content-between align-items-center mb-3 col-12 px-4 pt-3">
          <h3 style={{ color: "hsl(var(--foreground))", padding: "20px 20px" }}>
            الملف الشخصي
          </h3>
          <button className="btn">
            <i className="bi bi-pencil-square mx-1"></i> تعديل الملف
          </button>
        </div>
        <div className="profileBody d-flex gap-3 flex-sm-row flex-column mx-auto px-3  ">
          <div
            className="profile col-xxl-3 col-lg-3 rounded-3 p-3 "
            style={{
              backgroundColor: "hsl(var(--card))",
              border: "1px solid hsl(var(--border))",
            }}
          >
            <img
              src={ProfileImage}
              alt="profile Image"
              className="mx-auto profileImage"
            />
            <p
              className="text-center "
              style={{
                color: "hsl(var(--foreground))",
              }}
            >
              {studentInfo.name}
            </p>
            <p className="text-center">{studentSection}</p>
            <div className="data my-4">
              <p className="d-flex gap-2 align-items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="19"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-user"
                  aria-hidden="true"
                >
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>{" "}
                كود الطالب : STU - {studentInfo.id}
              </p>
              <p className="d-flex gap-2 align-items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="19"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-mail h-4 w-4 text-muted-foreground"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
                {studentInfo.email}
              </p>
              <p className="d-flex align-items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="19"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-phone h-4 w-4 text-muted-foreground"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                {studentInfo.phone}
              </p>
              <p className="d-flex gap-2 align-items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-geo-alt"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                  <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                </svg>
                {studentInfo.center == "Zayed Center"
                  ? "سنتر الشيخ زايد"
                  : studentInfo.center == "Giza Center"
                  ? "سنتر الجيزة"
                  : studentInfo.center == "Doki Center"
                  ? "سنتر الدقي"
                  : studentInfo.center == "Elmohndseen Center"
                  ? "سنتر المهندسين"
                  : "سنتر عين شمس"}
              </p>
            </div>
          </div>

          <div className="stats col-xxl-9 col-lg-9  ">
            <div className="smallCards d-flex mb-4 flex-wrap">
              <ProfileSmallCard
                count="32"
                text="جلسات حضرتها"
                className="eye1"
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="35"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-target"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <circle cx="12" cy="12" r="6"></circle>
                    <circle cx="12" cy="12" r="2"></circle>
                  </svg>
                }
              />
              <ProfileSmallCard
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-award h-8 w-8 text-success mx-auto "
                  >
                    <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
                    <circle cx="12" cy="8" r="6"></circle>
                  </svg>
                }
                text="واجبات تم تسليمها"
                count="28"
                className="prize"
              />
              <ProfileSmallCard
                text="متوسط الدرجات"
                count="91.2%"
                className="up"
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-trending-up h-8 w-8 text-warning mx-auto "
                  >
                    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                    <polyline points="16 7 22 7 22 13"></polyline>
                  </svg>
                }
              />
              <ProfileSmallCard
                count="10"
                text="عدد الإختبارات"
                className="eye2"
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="35"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-target"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <circle cx="12" cy="12" r="6"></circle>
                    <circle cx="12" cy="12" r="2"></circle>
                  </svg>
                }
              />
            </div>

            <div className="bigCards col-12">
              <ProfileBigCard1 />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
