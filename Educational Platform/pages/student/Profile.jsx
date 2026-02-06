import "../../styles/profilePage.css";
import ProfileImage from "../../src/assets/profile-image.jpg";
import ProfileSmallCard from "../../src/components/cards/student/ProfileSmallCard";
import ProfileBigCard1 from "../../src/components/cards/student/ProfileBigCard";
import axios from "axios";
import { useState, useEffect } from "react";
import ParentDataForm from "../../src/components/cards/student/ParentDataForm";
import Loader from "../../src/components/cards/common/Loader";

// Extracted SVG Icons
const Icons = {
  User: ({ width = 19, height = 19, className = "" }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
      <circle cx="12" cy="7" r="4"></circle>
    </svg>
  ),

  Mail: ({ width = 19, height = 19, className = "" }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
    </svg>
  ),

  Phone: ({ width = 19, height = 19, className = "" }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
    </svg>
  ),

  Location: ({ width = 16, height = 16, className = "" }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="currentColor"
      className={className}
      viewBox="0 0 16 16"
      aria-hidden="true"
    >
      <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
      <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
    </svg>
  ),

  Target: ({ width = 35, height = 35, className = "" }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10"></circle>
      <circle cx="12" cy="12" r="6"></circle>
      <circle cx="12" cy="12" r="2"></circle>
    </svg>
  ),

  Award: ({ width = 28, height = 28, className = "" }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
      <circle cx="12" cy="8" r="6"></circle>
    </svg>
  ),

  TrendingUp: ({ width = 24, height = 24, className = "" }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
      <polyline points="16 7 22 7 22 13"></polyline>
    </svg>
  ),
};

// Student Info Component
const StudentInfo = ({ studentInfo, studentCenter }) => (
  <div className="data my-4">
    <p className="d-flex gap-2 align-items-center">
      <Icons.User />
      كود الطالب : STU - {studentInfo.id || "غير متوفر"}
    </p>
    <p className="d-flex gap-2 align-items-center">
      <Icons.Mail />
      {studentInfo.email || "لا يوجد بريد إلكتروني"}
    </p>
    <p className="d-flex align-items-center gap-2">
      <Icons.Phone />
      {studentInfo.phone || "لا يوجد رقم هاتف"}
    </p>
    <p className="d-flex gap-2 align-items-center">
      <Icons.Location />
      {studentCenter || "لا يوجد مركز"}
    </p>
  </div>
);

// Parent Info Component
const ParentInfo = ({ parentData }) => (
  <div className="parent-data my-4">
    <h6
      style={{
        color: "hsl(var(--primary))",
        marginBottom: "15px",
        border: "2px dashed #919191a5",
        width: "fit-content",
        padding: "5px 10px",
        borderRadius: "8px",
        marginInline: "auto",
      }}
    >
      بيانات ولي الأمر
    </h6>
    <div className="data">
      <p className="d-flex gap-2 align-items-center">
        <Icons.User />
        الإسم: {parentData.name || "غير متوفر"}
      </p>
      <p className="d-flex align-items-center gap-2">
        <Icons.Phone />
        رقم الهاتف: {parentData.phone || "غير متوفر"}
      </p>
      <p className="d-flex gap-2 align-items-center">
        <Icons.User />
        صلة القرابة:{" "}
        {parentData.relationship === "father"
          ? "أب"
          : parentData.relationship === "mother"
            ? "أم"
            : parentData.relationship === "others"
              ? "شخص اّخر"
              : "غير محدد"}
      </p>
    </div>
  </div>
);

export default function Profile() {
  const [studentInfo, setStudentInfo] = useState({});
  const [loading, setLoading] = useState(true);
  const [showParentForm, setShowParentForm] = useState(false);
  const [parentsData, setParentsData] = useState(null);

  const sectionMap = {
    third_sec: "الثالث الثانوي",
    second_sec_scientific: "الثاني الثانوي - علمي",
    second_sec_literary: "الثاني الثانوي - أدبي",
  };

  const centerMap = {
    "Zayed Center": "سنتر الشيخ زايد",
    "Giza Center": "سنتر الجيزة",
    "Doki Center": "سنتر الدقي",
    "Elmohndseen Center": "سنتر المهندسين",
    "Ain Shams Center": "سنتر عين شمس",
  };

  const studentSection = sectionMap[studentInfo.section] || "";
  const studentCenter = studentInfo.centers
    ? centerMap[studentInfo.centers.name] || studentInfo.centers.name
    : "";

  useEffect(() => {
    getStudentInfo();
    getParentsData();
  }, []);

  const getStudentInfo = async () => {
    const token = localStorage.getItem("authToken");
    try {
      const response = await axios.get("/api/student/info", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setStudentInfo(response.data);
    } catch (error) {
      console.error("Error fetching Info:", error);
    } finally {
      setLoading(false);
    }
  };

  const getParentsData = async () => {
    const token = localStorage.getItem("authToken");
    try {
      const response = await axios.get("/api/student/parents", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      // Get the latest parent data (assuming the API returns an array)
      if (response.data && response.data.length > 0) {
        setParentsData(response.data[response.data.length - 1]);
      }
    } catch (error) {
      console.error("Error fetching parent data:", error);
    }
  };

  const handleSetParentsData = () => {
    setShowParentForm(true);
  };

  const handleParentFormClose = () => {
    setShowParentForm(false);
    // Refresh parent data after form submission
    getParentsData();
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div
      className="profilePage col-11 col-xl-12 mx-auto mx-md-0 pb-4"
      style={{ height: "inherit" }}
    >
      <div className="profilePageHeader d-flex justify-content-between align-items-center mb-1 col-12 px-4 pt-1">
        <h3 style={{ color: "hsl(var(--foreground))", padding: "20px 20px" }}>
          الملف الشخصي
        </h3>
        <button className="btn">
          <i className="bi bi-pencil-square mx-1"></i> تعديل الملف
        </button>
      </div>

      <div className="profileBody d-flex gap-3 flex-sm-row flex-column mx-auto px-3">
        {/* Profile Sidebar */}
        <div
          className="profile col-xxl-3 col-lg-3 rounded-3 p-3"
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
            className="text-center"
            style={{
              color: "hsl(var(--foreground))",
            }}
          >
            {studentInfo.name || "لا يوجد اسم"}
          </p>
          <p className="text-center">{studentSection}</p>

          {/* Student Info */}
          <StudentInfo
            studentInfo={studentInfo}
            studentCenter={studentCenter}
          />

          {/* Parent Data */}
          {parentsData ? (
            <ParentInfo parentData={parentsData} />
          ) : (
            <button
              className="btn mx-auto d-block"
              onClick={handleSetParentsData}
            >
              <i className="bi bi-pencil-square mx-1"></i> إضافة بيانات ولي
              الأمر
            </button>
          )}

          {showParentForm && (
            <div className="modal-overlay">
              <ParentDataForm onClose={handleParentFormClose} />
            </div>
          )}
        </div>

        {/* Stats Section */}
        <div className="stats col-xxl-9 col-lg-9">
          <div className="smallCards d-flex mb-4 flex-wrap">
            <ProfileSmallCard
              count="32"
              text="جلسات حضرتها"
              className="eye1"
              icon={<Icons.Target />}
            />
            <ProfileSmallCard
              icon={<Icons.Award className="text-success mx-auto" />}
              text="واجبات تم تسليمها"
              count="28"
              className="prize"
            />
            <ProfileSmallCard
              text="متوسط الدرجات"
              count="91.2%"
              className="up"
              icon={<Icons.TrendingUp className="text-warning mx-auto" />}
            />
            <ProfileSmallCard
              count="10"
              text="عدد الإختبارات"
              className="eye2"
              icon={<Icons.Target />}
            />
          </div>

          <div className="bigCards col-12">
            <ProfileBigCard1 />
          </div>
        </div>
      </div>
    </div>
  );
}
