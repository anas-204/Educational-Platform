import React, { useState } from "react";
import "../../styles/profilePage.css"; // Ensure this file defines the CSS variables
import ProfileImage from "../../src/assets/profile-image.jpg"; // Replace with teacher avatar if needed
// If you have a separate teacher avatar, import it; otherwise reuse the same
import Loader from "../../src/components/cards/common/Loader"; // optional, if needed

// Icons (copied from the student profile for consistency)
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
  Star: ({ width = 19, height = 19, className = "" }) => (
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
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  ),
  Clock: ({ width = 19, height = 19, className = "" }) => (
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
      <polyline points="12 6 12 12 16 14"></polyline>
    </svg>
  ),
  GraduationCap: ({ width = 19, height = 19, className = "" }) => (
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
      <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
      <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
    </svg>
  ),
};

// Small stat card component (matches ProfileSmallCard style)
const ProfileSmallCard = ({ icon, text, count, className = "" }) => (
  <div className={`col-6 col-md-3 mb-3 ${className}`}>
    <div
      className="card h-100 text-center p-3"
      style={{
        backgroundColor: "hsl(var(--card))",
        border: "1px solid hsl(var(--border))",
        borderRadius: "0.5rem",
      }}
    >
      <div className="mb-2">{icon}</div>
      <h4 className="h5 mb-1 fw-bold">{count}</h4>
      <p className="small text-muted mb-0">{text}</p>
    </div>
  </div>
);

// Big card component for sections like subject stats, recent activity, achievements
const BigCard = ({ title, children }) => (
  <div
    className="card mb-4"
    style={{
      backgroundColor: "hsl(var(--card))",
      border: "1px solid hsl(var(--border))",
      borderRadius: "0.5rem",
    }}
  >
    <div
      className="card-header bg-transparent border-bottom"
      style={{ borderColor: "hsl(var(--border))" }}
    >
      <h5 className="mb-0" style={{ color: "hsl(var(--foreground))" }}>
        {title}
      </h5>
    </div>
    <div className="card-body">{children}</div>
  </div>
);

// Subject row component
const SubjectRow = ({ subject, students, sessions, rating }) => (
  <div
    className="d-flex align-items-center justify-content-between mb-3 p-2 rounded"
    style={{ backgroundColor: "hsl(var(--background))" }}
  >
    <div className="fw-medium">{subject}</div>
    <div className="d-flex align-items-center gap-3">
      <span className="d-flex align-items-center gap-1 small">
        <Icons.User width={16} height={16} />
        {students}
      </span>
      <span className="d-flex align-items-center gap-1 small">
        <Icons.Target width={16} height={16} />
        {sessions}
      </span>
      <span className="d-flex align-items-center gap-1 small">
        <Icons.Star width={16} height={16} className="text-warning" />
        {rating}
      </span>
    </div>
  </div>
);

// Activity item component
const ActivityItem = ({ activity, time, status }) => {
  const statusColor =
    status === "مكتملة"
      ? "bg-success"
      : status === "جارية"
        ? "bg-warning"
        : "bg-secondary";
  return (
    <div
      className="d-flex align-items-center gap-3 p-2 rounded mb-2"
      style={{ backgroundColor: "hsl(var(--background))" }}
    >
      <span
        className={`d-inline-block rounded-circle ${statusColor}`}
        style={{ width: "12px", height: "12px" }}
      />
      <div className="flex-grow-1">
        <p className="mb-0 fw-medium">{activity}</p>
        <p className="small text-muted mb-0">{time}</p>
      </div>
      <span className={`badge ${statusColor} text-white`}>{status}</span>
    </div>
  );
};

// Achievement item component
const AchievementItem = ({ title, date, type }) => {
  const iconColor =
    type === "ذهبية"
      ? "text-warning"
      : type === "فضية"
        ? "text-secondary"
        : "text-orange"; // you may need a custom class for bronze
  return (
    <div
      className="d-flex align-items-center gap-3 p-2 rounded mb-2"
      style={{ backgroundColor: "hsl(var(--background))" }}
    >
      <Icons.Award width={32} height={32} className={iconColor} />
      <div className="flex-grow-1">
        <p className="mb-0 fw-medium">{title}</p>
        <p className="small text-muted mb-0">{date}</p>
      </div>
      <span className="badge bg-secondary">{type}</span>
    </div>
  );
};

// Main TeacherProfile component
const TeacherProfile = () => {
  // Static data (replace with API calls if needed)
  const teacherData = {
    name: "د. أحمد محمد الحسني",
    email: "teacher@example.com",
    phone: "01004022722",
    specialization: "رياضيات وفيزياء",
    avatar: ProfileImage, // use same default image or replace
    joinDate: "يناير 2020",
    teacherId: "TCH001",
    location: "القاهرة، مصر",
    experience: "15 سنة خبرة",
    education: "ماجستير في الرياضيات - جامعة القاهرة",
    rating: 4.8,
  };

  const stats = {
    totalStudents: 156,
    totalSessions: 320,
    averageRating: 4.8,
    completedCourses: 45,
  };

  const achievements = [
    { title: "أفضل معلم للعام", date: "ديسمبر 2024", type: "ذهبية" },
    { title: "100 جلسة مكتملة", date: "نوفمبر 2024", type: "فضية" },
    { title: "تقييم 5 نجوم", date: "أكتوبر 2024", type: "برونزية" },
  ];

  const subjectStats = [
    { subject: "الرياضيات", students: 89, sessions: 180, rating: 4.9 },
    { subject: "الفيزياء", students: 67, sessions: 140, rating: 4.7 },
    { subject: "الكيمياء", students: 45, sessions: 95, rating: 4.8 },
    { subject: "الأحياء", students: 32, sessions: 68, rating: 4.6 },
  ];

  const recentActivity = [
    {
      activity: "جلسة رياضيات - الصف الثالث الثانوي",
      time: "منذ ساعتين",
      status: "مكتملة",
    },
    { activity: "تصحيح اختبار الفيزياء", time: "منذ 4 ساعات", status: "جارية" },
    { activity: "إعداد واجب الكيمياء", time: "أمس", status: "مكتملة" },
    { activity: "مراجعة أداء الطلاب", time: "منذ يومين", status: "مكتملة" },
  ];

  return (
    <div
      className="profilePage col-11 col-xl-12 mx-auto mx-md-0 pb-4"
      style={{ height: "inherit" }}
      dir="rtl"
    >
      {/* Header */}
      <div className="profilePageHeader d-flex justify-content-between align-items-center mb-1 col-12 px-4 pt-1">
        <h3 style={{ color: "hsl(var(--foreground))", padding: "20px 20px" }}>
          الملف الشخصي
        </h3>
        <button className="btn">
          <i className="bi bi-pencil-square mx-1"></i> تعديل الملف
        </button>
      </div>

      {/* Body */}
      <div className="profileBody d-flex gap-3 flex-sm-row flex-column mx-auto px-3">
        {/* Sidebar */}
        <div
          className="profile col-xxl-3 col-lg-3 rounded-3 p-3"
          style={{
            backgroundColor: "hsl(var(--card))",
            border: "1px solid hsl(var(--border))",
          }}
        >
          <img
            src={teacherData.avatar}
            alt="profile"
            className="mx-auto profileImage rounded-circle"
            style={{ width: "128px", height: "128px", objectFit: "cover" }}
          />
          <p
            className="text-center fw-bold mt-2"
            style={{ color: "hsl(var(--foreground))" }}
          >
            {teacherData.name}
          </p>
          <p className="text-center text-muted small">
            {teacherData.specialization}
          </p>
          <div className="d-flex justify-content-center align-items-center gap-1 mb-3">
            <Icons.Star
              width={16}
              height={16}
              className="text-warning"
              fill="currentColor"
            />
            <span className="fw-medium">{teacherData.rating}</span>
            <span className="text-muted small">
              ({stats.totalStudents} طالب)
            </span>
          </div>

          {/* Teacher Info */}
          <div className="data my-4">
            <p className="d-flex gap-2 align-items-center small">
              <Icons.User /> كود المعلم : {teacherData.teacherId}
            </p>
            <p className="d-flex gap-2 align-items-center small">
              <Icons.Mail /> {teacherData.email}
            </p>
            <p className="d-flex align-items-center gap-2 small">
              <Icons.Phone /> {teacherData.phone}
            </p>
            <p className="d-flex gap-2 align-items-center small">
              <Icons.Location /> {teacherData.location}
            </p>
            <p className="d-flex gap-2 align-items-center small">
              <Icons.Clock /> {teacherData.experience}
            </p>
            <p className="d-flex gap-2 align-items-center small">
              <Icons.GraduationCap /> انضم في: {teacherData.joinDate}
            </p>
          </div>

          {/* Education */}
          <div
            className="border-top pt-2 mt-2"
            style={{ borderColor: "hsl(var(--border))" }}
          >
            <p className="small text-muted mb-0">{teacherData.education}</p>
          </div>
        </div>

        {/* Main content */}
        <div className="stats col-xxl-9 col-lg-9">
          {/* Small stats cards */}
          <div className="smallCards d-flex mb-4 flex-wrap">
            <ProfileSmallCard
              count={stats.totalStudents}
              text="طالب نشط"
              icon={
                <Icons.Target width={35} height={35} className="text-primary" />
              }
            />
            <ProfileSmallCard
              count={stats.totalSessions}
              text="جلسة مكتملة"
              icon={
                <Icons.Target width={35} height={35} className="text-success" />
              }
            />
            <ProfileSmallCard
              count={stats.averageRating}
              text="متوسط التقييم"
              icon={
                <Icons.Star width={35} height={35} className="text-warning" />
              }
            />
            <ProfileSmallCard
              count={stats.completedCourses}
              text="دورة مكتملة"
              icon={
                <Icons.Award width={35} height={35} className="text-info" />
              }
            />
          </div>

          {/* Subject Statistics */}
          <BigCard title="إحصائيات المواد الدراسية">
            {subjectStats.map((subj, idx) => (
              <SubjectRow key={idx} {...subj} />
            ))}
          </BigCard>

          {/* Recent Activity */}
          <BigCard title="النشاط الأخير">
            {recentActivity.map((act, idx) => (
              <ActivityItem key={idx} {...act} />
            ))}
          </BigCard>

          {/* Achievements */}
          <BigCard title="الإنجازات الأخيرة">
            {achievements.map((ach, idx) => (
              <AchievementItem key={idx} {...ach} />
            ))}
          </BigCard>
        </div>
      </div>
    </div>
  );
};

export default TeacherProfile;
