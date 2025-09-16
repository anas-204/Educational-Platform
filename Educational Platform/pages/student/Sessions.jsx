import styled from "styled-components";
import { useEffect, useState } from "react";
import SessionCard from "../../src/components/cards/student/SessionCard";
const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 100vh;
`;
export default function SessionsPage() {
  const [sessions, setSessions] = useState([]);
  const token = localStorage.getItem("authToken");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:3000/student/sessions", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const json = await res.json();
        setSessions(json);
      } catch (error) {
        console.error("Error fetching sessions:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <div style={{ padding: "30px 20px" }}>
        <h3 style={{ fontWeight: "bold", color: "hsl(var(--foreground))" }}>
          الجلسات التعليمية
        </h3>
        <p>عرض جميع الجلسات المسجلة والقادمة</p>
      </div>
      <Body style={{ paddingInlineStart: "20px" }}>
        {sessions.map((session) => (
          <SessionCard
            key={session.id}
            title={session.sessions.title}
            status={session.status === "present" ? "مكتملة" : "غائب"}
            date={new Date(
              session.sessions.session_datetime
            ).toLocaleDateString()}
            hour={new Date(
              session.sessions.session_datetime
            ).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
            duration="90 دقيقة"
          />
        ))}
        {/* <SessionCard
          title="مقدمة في الرياضيات"
          status="مكتملة"
          date="2025-01-15"
          hour="10:00"
          duration="90 دقيقة"
        /> */}
      </Body>
    </div>
  );
}
