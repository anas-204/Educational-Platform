import styled from "styled-components";
import { Book, Trophy, Target, FileText } from "lucide-react";
import ControlPannelSmallCard from "../../src/components/cards/common/ControlPannelSmallCard";
import ControlPannelCommingSession from "../../src/components/cards/ControlPannelCommingSession";
import ControlPannelResultsCard from "../../src/components/cards/ControlPannelResultsCard";
import ControlPannelHomeWork from "../../src/components/cards/ControlPannelHomeWork";
export const Main = styled.div`
  @media (max-width: 768px) {
    margin-inline: auto;
  }
  background-color: hsl(var(--background));
`;
export const Header = styled.div`
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity, 1));
  padding: 1.5rem;
  background: var(--hero-gradient);
  border-radius: 0.75rem;
  border-color: hsl(var(--border));
  margin-top: 20px;
  h1 {
    font-weight: 700;
    font-size: 1.875rem;
    line-height: 2.25rem;
    margin-bottom: 0.5rem;
  }
  p {
    color: rgba(255, 255, 255, 0.9);
  }
`;
export const SmallCardContainer = styled.div`
  gap: 1rem;
  margin: 1.5rem 0;
  display: grid;
  grid-template-columns: repeat(1, minmax(0px, 1fr));
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0px, 1fr));
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`;
export const BigCardContainer = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  margin-top: 2rem;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;
export default function ControlPanel() {
  return (
    <Main className="py-3 px-3 col-12">
      <Header className="col-11">
        <h1>أهلاً بك مرة أخرى!</h1>
        <p>مستعد لمتابعة رحلتك التعليمية؟</p>
      </Header>
      <SmallCardContainer className="col-11">
        <ControlPannelSmallCard
          titel={"إجمالي الجلسات"}
          icon={<Book />}
          number={"24"}
          info={"+2 من الأسبوع الماضي"}
        />
        <ControlPannelSmallCard
          titel={"متوسط الدرجات"}
          icon={<Trophy />}
          number={85}
          info={"+5% من الشهر الماضي"}
        />
        <ControlPannelSmallCard
          titel={"الاختبارات المكتملة"}
          icon={<Target />}
          number={"18"}
          info={"3 قيد الانتظار"}
        />
        <ControlPannelSmallCard
          titel={"الواجبات"}
          icon={<FileText />}
          number={"2"}
          info={" في انتظار التسليم"}
        />
      </SmallCardContainer>
      <BigCardContainer className="col-11">
        <ControlPannelCommingSession
          sessions={[
            {
              subjectName: "رياضيات متقدمة",
              MrName: "د. أحمد",
              Date: "2024-01-15",
              Time: "10:00 صباحاً",
            },
            {
              subjectName: "فيزياء",
              MrName: "د. خالد",
              Date: "2024-01-16",
              Time: "12:00 ظهراً",
            },
            {
              subjectName: "كيمياء",
              MrName: "د. منى",
              Date: "2024-01-17",
              Time: "02:00 مساءً",
            },
          ]}
        />
        <ControlPannelResultsCard
          results={[
            { subject: "اختبار التفاضل", date: "2024-01-10", score: 85 },
            { subject: "قوانين الفيزياء", date: "2024-01-08", score: 92 },
            { subject: "الروابط الكيميائية", date: "2024-01-05", score: 78 },
          ]}
        />
      </BigCardContainer>
      <ControlPannelHomeWork
        className="col-11"
        assignments={[
          {
            title: "مسائل التفاضل",
            subject: "الرياضيات",
            dueDate: "2024-01-20",
          },
          {
            title: "تقرير عن الروابط",
            subject: "الكيمياء",
            dueDate: "2024-01-25",
          },
        ]}
      />
    </Main>
  );
}
