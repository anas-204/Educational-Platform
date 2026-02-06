import { useNavigate } from "react-router-dom";
import { Main } from "../student/ControlPanel";
import { Header } from "../student/ControlPanel";
import { SmallCardContainer } from "../student/ControlPanel";
import { BigCardContainer } from "../student/ControlPanel";
import { Plus } from "lucide-react";
import { styled, css } from "styled-components";
import ControlPannelSmallCard from "../../src/components/cards/common/ControlPannelSmallCard";
import ControlPannelCommingSession from "../../src/components/cards/common/ControlPannelCommingSession";
import ControlPannelResultsCard from "../../src/components/cards/common/ControlPannelResultsCard";
import { File, ChevronUp, Heart, User } from "lucide-react";
import ControlPannelMissions from "../../src/components/cards/teacher/controlPannel/ControlPannelMissions";

const variants = {
  glass: css`
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(6px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: white;
    &:hover {
      background: rgba(255, 255, 255, 0.2);
    }
  `,
};
export const Button = styled.button`
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.25rem;
  padding-left: 2rem;
  padding-right: 2rem;
  background-color: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.2);
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
  ${({ variant }) => variants[variant || "default"]};
`;
export default function TeacherControlPannel() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/TeacherDashBoard/SessionManagement");
  }
  return (
    <Main className="py-3 px-3 mb-4 col-11">
      <Header>
        <h1>مرحبا بك مرة أخرى أيها المعلم!</h1>
        <p>دعونا نلهم ونثقف اليوم</p>
        <div className="mt-3">
          <Button variant="glass" onClick={handleClick}>
            <Plus />
            <font>إنشاء جلسة جديدة</font>
          </Button>
        </div>
      </Header>
      <SmallCardContainer>
        <ControlPannelSmallCard
          titel={"إجمالي الطلاب"}
          icon={<User />}
          number={"127"}
          info={"عبر جميع الجلسات"}
        />
        <ControlPannelSmallCard
          titel={"جلسات هذا الأسبوع"}
          icon={<Heart />}
          number={"12"}
          info={"3 مجدولة أخرى"}
        />
        <ControlPannelSmallCard
          titel={"متوسط الأداء"}
          icon={<ChevronUp />}
          number={"85%"}
          info={"+ 3٪ عن الشهر الماضي"}
        />
        <ControlPannelSmallCard
          titel={"المراجعات المعلقة"}
          icon={<File />}
          number={"24"}
          info={" الواجبات والاختبارات"}
        />
      </SmallCardContainer>
      <BigCardContainer>
        <ControlPannelCommingSession
          sessions={[
            {
              subjectName: "رياضيات متقدمة",
              Date: "2024-01-15",
              Time: "10:00 صباحاً",
              studentNumber: "25",
            },
            {
              subjectName: "فيزياء",
              Date: "2024-01-16",
              Time: "12:00 ظهراً",
              studentNumber: "25",
            },
            {
              subjectName: "كيمياء",
              Date: "2024-01-17",
              Time: "02:00 مساءً",
              studentNumber: "25",
            },
          ]}
        />
        <ControlPannelResultsCard
          results={[
            { subject: "اختبار التفاضل", degree: "25/30 مقدمة", score: 85 },
            { subject: "قوانين الفيزياء", degree: "22/25 مقدمة", score: 92 },
            { subject: "الروابط الكيميائية", degree: "28/30 مقدمة", score: 78 },
          ]}
        />
      </BigCardContainer>
      <ControlPannelMissions
        missions={[
          {
            title: "تقارير مختبر الفيزياء للصف",
            total: "15 سلع",
          },
          {
            title: "مراجعة عمليات إرسال الاختبار",
            total: "8 عناصر",
          },
          {
            title: "إعداد جلسة الكيمياء",
            total: "1 سلع",
          },
        ]}
      />
    </Main>
  );
}
