import Sidebar from "../../src/components/DashBoard/SideBar";
import NavBar from "../../src/components/DashBoard/NavBar";
import styled from "styled-components";
import { useState } from "react";
import Trials from "./Trials";
const Main = styled.div`
  height: 100vh;
  overflow-x: hidden;
`;
const Content = styled.div`
  direction: rtl;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
  padding-bottom: 20px;
  display: flex;
`;

export default function StudentDashBoard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);
  return (
    <>
      <Main>
        <NavBar toggleSidebar={toggleSidebar} />
        <Content>
          <Sidebar isOpen={sidebarOpen} onClose={closeSidebar} />
          <Trials />
        </Content>
      </Main>
    </>
  );
}
