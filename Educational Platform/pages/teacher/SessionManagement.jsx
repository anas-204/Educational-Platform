import { useState } from "react";
import { styled } from "styled-components";
import { Plus, Search } from "lucide-react";
import { SmallCardContainer } from "../student/ControlPanel";
import { Clock, User, Book, Calendar } from "lucide-react";
import ControlPannelSmallCard from "../../src/components/cards/teacher/Session/SmallCard";
import UpcomingSessions from "../../src/components/cards/teacher/Session/UpcomingSessions";
import CompleteSessions from "../../src/components/cards/teacher/Session/CompleteSessions";
import Cover from "../../src/components/comon/cover";
import SessionsForm from "../../src/components/forms/SessionsForm";

const Main = styled.div`
  @media (max-width: 768px) {
    margin-inline: auto;
  }
`;

const Header = styled.div`
  --tw-text-opacity: 1;
  padding: 0.5rem;
  padding-bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  gap: 1rem;
  @media (min-width: 640px) {
    align-items: center;
  }
  @media (min-width: 640px) {
    flex-direction: row;
  }
  h1 {
    font-weight: 700;
    font-size: 1.875rem;
    line-height: 2.25rem;
    margin-bottom: 0.5rem;
    color: hsl(var(--foreground));
  }
`;

const Button = styled.button`
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.25rem;
  padding-left: 2rem;
  padding-right: 2rem;
  border-radius: 10px;
  white-space: nowrap;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  height: 2.75rem;
  display: inline-flex;
  cursor: pointer;
  text-transform: none;
  background-color: hsl(var(--primary-dark));
  color: white;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    background-color: #6c28d9c7 !important;
  }
`;

const SearchContainer = styled.div`
  --tw-space-y-reverse: 0;
  margin-top: calc(1.5rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(1.5rem * var(--tw-space-y-reverse));
  color: hsl(var(--card-foreground));
  box-shadow: var(--shadow-soft);
  background-color: hsl(var(--card));
  border-width: 1px;
  border-radius: 0.75rem;
  border-color: hsl(var(--border));
`;

const SearchInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media (min-width: 640px) {
    flex-direction: row;
  }
  .left {
    flex: 1 1 0%;
    position: relative;
    background-color: hsl(var(--background));
    border: 1px solid hsl(var(--input));
    padding: 0.5rem 2.5rem 0.5rem 0.75rem;
    border-radius: 10px;
    width: 100%;
    height: 2.5rem;
    display: flex;

    &:focus-within {
      border-color: hsl(var(--primary));
    }

    input {
      text-align: right;
      width: 100%;
      border: none !important;
      outline: none !important;
      box-shadow: none !important;
      padding: 8px;
      @media (min-width: 768px) {
        font-size: 0.875rem;
        line-height: 1.25rem;
      }
    }
    svg {
      position: absolute;
      top: 50%;
      right: 0.75rem;
      transform: translateY(-50%);
      pointer-events: none;
      color: #6b7280;
    }
  }
`;

const Button2 = styled.button`
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.25rem;
  background-color: hsl(var(--background));
  padding: 0.5rem 1rem;
  border-width: 1px;
  border-color: hsl(var(--input));
  border-radius: 10px;
  white-space: nowrap;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  height: 2.5rem;
  display: inline-flex;
  cursor: pointer;

  &:hover {
    background-color: hsl(var(--accent)) !important;
    color: hsl(var(--primary)) !important;
  }
`;

// Modal overlay with animations
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: fadeIn 0.3s ease-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const ModalContent = styled.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  max-width: 500px;
  width: 90%;
  max-height: 90vh;
  overflow-y: auto;
  animation: slideUp 0.3s ease-out;

  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  left: 15px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #666;
  z-index: 1001;
  padding: 5px;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    background-color: #f0f0f0;
    transform: scale(1.1);
  }
`;

// Mock sessions data
const MOCK_SESSIONS = [
  {
    id: 1,
    title: "Algebra Basics",
    description: "Introduction to equations and inequalities",
    session_datetime: "2025-09-01T15:00:00.000Z",
    section: "first_sec",
    centers: {
      id: 1,
      name: "Zayed Center",
    },
  },
  {
    id: 2,
    title: "Geometry Fundamentals",
    description: "Understanding shapes and angles",
    session_datetime: "2025-09-10T10:00:00.000Z",
    section: "second_sec_scientific",
    centers: {
      id: 2,
      name: "Giza Center",
    },
  },
  {
    id: 3,
    title: "Literature Analysis",
    description: "Analyzing classic Arabic poetry",
    session_datetime: "2024-12-15T14:00:00.000Z",
    section: "second_sec_literary",
    centers: {
      id: 3,
      name: "Doki Center",
    },
  },
  {
    id: 4,
    title: "Chemistry Reactions",
    description: "Chemical equations and reactions",
    session_datetime: "2024-11-20T11:00:00.000Z",
    section: "third_sec",
    centers: {
      id: 4,
      name: "Elmohndseen Center",
    },
  },
  {
    id: 5,
    title: "Physics Mechanics",
    description: "Motion, force, and energy",
    session_datetime: "2025-01-15T09:00:00.000Z",
    section: "third_sec",
    centers: {
      id: 1,
      name: "Zayed Center",
    },
  },
  {
    id: 6,
    title: "Arabic Grammar",
    description: "Advanced grammar rules",
    session_datetime: "2024-10-05T13:00:00.000Z",
    section: "first_sec",
    centers: {
      id: 2,
      name: "Giza Center",
    },
  },
];

export default function SessionManagement() {
  const [showForm, setShowForm] = useState(false);
  const [sessions] = useState(MOCK_SESSIONS); // Using mock data

  // Helper function to check if session is upcoming
  const isUpcomingSession = (sessionDatetime) => {
    const now = new Date();
    const sessionDate = new Date(sessionDatetime);
    return sessionDate > now;
  };

  // Helper function to check if session is completed
  const isCompletedSession = (sessionDatetime) => {
    const now = new Date();
    const sessionDate = new Date(sessionDatetime);
    return sessionDate <= now;
  };

  // Calculate counts based on mock data
  const totalSessionsCount = sessions.length;

  // Separate sessions into upcoming and completed
  const upcomingSessions = sessions.filter(
    (session) =>
      session.session_datetime && isUpcomingSession(session.session_datetime),
  );

  const completedSessions = sessions.filter(
    (session) =>
      session.session_datetime && isCompletedSession(session.session_datetime),
  );

  const upcomingSessionsCount = upcomingSessions.length;
  const completedSessionsCount = completedSessions.length;

  const handleCreateSessionClick = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  const handleFormSubmitSuccess = (responseData) => {
    console.log("Form submitted successfully:", responseData);
    setShowForm(false);
  };

  return (
    <Main className="py-3 px-3 mb-4 col-11">
      {/* Modal Overlay with Form */}
      {showForm && (
        <ModalOverlay onClick={handleCloseForm}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={handleCloseForm}>×</CloseButton>
            <SessionsForm
              onClose={handleCloseForm}
              onSubmitSuccess={handleFormSubmitSuccess}
            />
          </ModalContent>
        </ModalOverlay>
      )}

      {/* Original Session Management Content */}
      <Cover show={false} />
      <Header>
        <h1>إدارة الجلسات</h1>
        <Button onClick={handleCreateSessionClick}>
          <Plus />
          إنشاء جلسة جديدة
        </Button>
      </Header>
      <SearchContainer>
        <div className="p-3">
          <SearchInput>
            <div className="left">
              <Search size={18} color="#6b7280" />
              <input placeholder="البحث في الجلسات...." />
            </div>
            <Button2>تصفية النتائج</Button2>
            <Button2>بحث</Button2>
          </SearchInput>
        </div>
      </SearchContainer>
      <SmallCardContainer>
        <ControlPannelSmallCard
          icon={<Calendar color="hsl(var(--primary))" />}
          titel="جلسات قادمة"
          number={upcomingSessionsCount} // Now using actual count
        />
        <ControlPannelSmallCard
          icon={<Book color=" hsl(var(--success))" />}
          titel="جلسات مكتمله"
          number={completedSessionsCount} // Now using actual count
        />
        <ControlPannelSmallCard
          icon={<User color="hsl(var(--warning))" />}
          titel="الأرقام"
          number={"41"} // Keeping this hardcoded as it's not part of sessions data
        />
        <ControlPannelSmallCard
          icon={<Clock color="hsl(var(--tertiary))" />}
          titel="عدد الجلسات"
          number={totalSessionsCount} // Now using sessions.length
        />
      </SmallCardContainer>
      <UpcomingSessions />
      <div style={{ marginTop: "25px" }}>
        <CompleteSessions />
      </div>
    </Main>
  );
}
