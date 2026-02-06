import styled from "styled-components";
import { useEffect, useState } from "react";
import SessionCard from "../../src/components/cards/student/SessionCard";
import Loader from "../../src/components/cards/common/Loader";
import apiRequest from "../../src/utils/apiRequest";
const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 100vh;
`;
export default function SessionsPage() {
  const [sessions, setSessions] = useState([]);
  const [loading, setLoading] = useState(true);
  // const token = localStorage.getItem("authToken");
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await fetch("https://student-hub-pied.vercel.app/student/sessions", {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       });
  //       const json = await res.json();
  //       setSessions(json);
  //     } catch (error) {
  //       console.error("Error fetching sessions:", error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, []);

  const fetchData = async () => {
    try {
      await apiRequest({
        service: "SESSIONS",
      }).then((res) => {
        setSessions(res);
      });
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <Loader />;
  }

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
              session.sessions.session_datetime,
            ).toLocaleDateString()}
            Description={session.sessions.description}
            hour={new Date(
              session.sessions.session_datetime,
            ).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
            duration="90 دقيقة"
          />
        ))}
      </Body>
    </div>
  );
}
