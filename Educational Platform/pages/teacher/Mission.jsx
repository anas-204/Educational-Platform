import React from "react";
import styled from "styled-components";
import {
  Search,
  Plus,
  FileText,
  Book,
  CircleAlert,
  CircleCheck,
} from "lucide-react";

import {
  Main,
  Header,
  SearchContainer,
  SearchInput,
  Button,
  Button2,
} from "./Students";
import { SmallCardContainer } from "../student/ControlPanel";
import ControlPannelSmallCard from "../../src/components/cards/teacher/Session/SmallCard";
import ActiveMission from "../../src/components/cards/teacher/mission/ActiveMission";
import CompleteSessions from "../../src/components/cards/teacher/mission/CompleteSessions";
import DistributionOfSubject from "../../src/components/cards/teacher/mission/DistributionOfSubject";
import Rate from "../../src/components/cards/teacher/mission/Rate";
const DistributionAndrateContainer = styled.div`
  margin-block: 1.5rem;
  display: grid;
  gap: 1.5rem;
  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, minmax(0px, 1fr));
  }
  grid-template-columns: repeat(1, minmax(0px, 1fr));
`;
export default function Mission() {
  return (
    <Main className="py-3 px-3 mb-4 col-11">
      <Header>
        <h1>إدارة المهام والواجبات</h1>
        <Button>
          <Plus />
          <font>إنشاء مهمة جديدة</font>
        </Button>
      </Header>
      <SearchContainer>
        <div className="p-3">
          <SearchInput>
            <div className="left">
              <Search size={18} color="#6b7280" />
              <input placeholder="البحث عن الطلاب...." />
            </div>
            <Button2>تصفية حسب المادة</Button2>
            <Button2>تصفية حسب الحالة</Button2>
          </SearchInput>
        </div>
      </SearchContainer>
      <SmallCardContainer>
        <ControlPannelSmallCard
          icon={<FileText color="hsl(var(--primary))" />}
          titel="إجمالي المهام"
          number={"4"}
        />{" "}
        <ControlPannelSmallCard
          icon={<Book color=" hsl(var(--success))" />}
          titel="مهام نشطه"
          number={"3"}
        />{" "}
        <ControlPannelSmallCard
          icon={<CircleCheck color="hsl(var(--warning))" />}
          titel="مهام مُسلمة"
          number={"100"}
        />
        <ControlPannelSmallCard
          icon={<CircleAlert color="hsl(var(--tertiary))" />}
          titel=" في انتظار التصحيح"
          number={"87%"}
        />
      </SmallCardContainer>
      <ActiveMission />
      <div style={{ marginTop: "25px" }}>
        <CompleteSessions />
      </div>
      <div style={{ marginTop: "25px" }}>
        <DistributionAndrateContainer>
          <DistributionOfSubject />
          <Rate />
        </DistributionAndrateContainer>
      </div>
    </Main>
  );
}
