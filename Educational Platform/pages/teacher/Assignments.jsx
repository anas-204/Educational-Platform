import React from "react";
import styled from "styled-components";
import {
  Search,
  Plus,
  Trophy,
  CircleAlert,
  CircleCheck,
  Target,
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
import ActiveAssignments from "../../src/components/cards/teacher/Assignments/ActiveAssignments";
import CompleteAssignments from "../../src/components/cards/teacher/Assignments/CompleteAssignments";
import DistributionOfAssignmetns from "../../src/components/cards/teacher/Assignments/DistributionOfAssignmetns";
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
        <h1>إدارة الاختبارات</h1>
        <Button>
          <Plus />
          <font>إنشاء اختبار جديدة</font>
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
          icon={<Trophy color="hsl(var(--primary))" />}
          titel="إجمالي الاختبارات"
          number={"4"}
        />{" "}
        <ControlPannelSmallCard
          icon={<Target color=" hsl(var(--success))" />}
          titel="اختبارات نشطه"
          number={"2"}
        />{" "}
        <ControlPannelSmallCard
          icon={<CircleCheck color="hsl(var(--warning))" />}
          titel="محاولات مكتملة"
          number={"23"}
        />
        <ControlPannelSmallCard
          icon={<CircleAlert color="hsl(var(--tertiary))" />}
          titel=" في انتظار التصحيح"
          number={"87%"}
        />
      </SmallCardContainer>
      <ActiveAssignments />
      <div style={{ marginTop: "25px" }}>
        <CompleteAssignments />
      </div>
      <div style={{ marginTop: "25px" }}>
        <DistributionAndrateContainer>
          <DistributionOfAssignmetns />
        </DistributionAndrateContainer>
      </div>
    </Main>
  );
}
