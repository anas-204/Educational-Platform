import React from "react";
import { styled } from "styled-components";
import { BookOpen, Users, Trophy, Target,  } from "lucide-react";

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
  > div {
    flex: 1 1 100%;
  }

  @media (min-width: 768px) {
    > div {
      flex: 1 1 calc(50% - 1.5rem);
    }
  }

  @media (min-width: 1024px) {
    > div {
      flex: 1 1 calc(25% - 1.5rem);
    }
  }

  animation: slideUp 0.4s ease-out;

  @keyframes slideUp {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
const Card = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
  border-radius: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 1.5rem;
  text-align: center;
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
`;

const CardIcon = styled.div`
  margin: 0 auto 1rem;
  padding: 0.75rem;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 9999px;
  width: fit-content;

  svg {
    width: 2rem;
    height: 2rem;
    color: white;
  }
`;

const CardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: white;
  margin-bottom: 0.5rem;
`;

const CardDescription = styled.p`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.5;
`;

const features = [
  {
    title: "جلسات تفاعلية",
    description: "انضم إلى جلسات تعليمية مباشرة مع أفضل المعلمين",
    icon: BookOpen,
  },
  {
    title: "اختبارات ذكية",
    description: "اختبر معلوماتك مع نظام الاختبارات التكيفي",
    icon: Trophy,
  },
  {
    title: "مجتمع الطلاب",
    description: "تواصل وتعلم مع زملائك الطلاب",
    icon: Users,
  },
  {
    title: "تتبع التقدم",
    description: "راقب رحلتك التعليمية وإنجازاتك",
    icon: Target,
  },
];
export default function Crads() {
  return (
    <Cards>
      {features.map((feature, index) => (
        <Card key={index}>
          <CardIcon>
            <feature.icon />
          </CardIcon>
          <CardTitle>{feature.title}</CardTitle>
          <CardDescription>{feature.description}</CardDescription>
        </Card>
      ))}
    </Cards>
  );
}
