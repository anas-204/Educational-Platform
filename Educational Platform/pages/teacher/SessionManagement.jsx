import React from "react";
import { styled } from "styled-components";
import { Plus, Search } from "lucide-react";
import { SmallCardContainer } from "../student/ControlPanel";
import { Clock, User, Book, Calendar } from "lucide-react";
import ControlPannelSmallCard from "../../src/components/cards/teacher/Session/SmallCard";
import UpcomingSessions from "../../src/components/cards/teacher/Session/UpcomingSessions";
import CompleteSessions from "../../src/components/cards/teacher/Session/CompleteSessions";
const Main = styled.div`
  @media (max-width: 768px) {
    margin-inline: auto;
  }
`;
const Header = styled.div`
  --tw-text-opacity: 1;
  padding: 1.5rem;
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
  }
`;

const Button = styled.button`
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.25rem;
  padding-left: 2rem;
  padding-right: 2rem;
  border-width: 1px;
  border-radius: 10px;
  white-space: nowrap;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  height: 2.75rem;
  display: inline-flex;
  cursor: pointer;
  text-transform: none;
  background-color: #6d28d9;
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
export default function SessionManagement() {
  return (
    <Main className="py-3 px-3 mb-4 col-11">
      <Header>
        <h1>إدارة الجلسات</h1>
        <Button>
          <Plus />
          <font>إنشاء جلسة جديدة</font>
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
          </SearchInput>
        </div>
      </SearchContainer>
      <SmallCardContainer>
        {" "}
        <ControlPannelSmallCard
          icon={<Calendar color="hsl(var(--primary))" />}
          titel="جلسات قادمة"
          number={2}
        />{" "}
        <ControlPannelSmallCard
          icon={<Book color=" hsl(var(--success))" />}
          titel="جلسات مكتمله"
          number={"1"}
        />{" "}
        <ControlPannelSmallCard
          icon={<User color="hsl(var(--warning))" />}
          titel="الأرقام"
          number={"41"}
        />
        <ControlPannelSmallCard
          icon={<Clock color="hsl(var(--tertiary))" />}
          titel="عدد الجلسات"
          number={"320"}
        />
      </SmallCardContainer>
      <UpcomingSessions />
      <div style={{ marginTop: "25px" }}>
        <CompleteSessions />
      </div>
    </Main>
  );
}
