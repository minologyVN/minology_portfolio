import { Header } from "./components/Header";
import { VerticalNavbar } from "./components/Navbar/VerticalNavbar";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import { Home, Contact, Skill, Work, Resume } from "./pages";
import { PageLayout } from "./layout/PageLayout";

export const App = () => {
  return (
    <div className="relative h-full font-base max-w-page pt-20 pb-10">
      <Header />
      <VerticalNavbar />
      <Routes>
        <Route
          path="/"
          element={
            <PageLayout>
              <Outlet />
            </PageLayout>
          }
        >
          <Route index element={<Navigate to="home" />} />
          <Route path="home" element={<Home />} />
          <Route path="skill" element={<Skill />} />
          <Route path="work" element={<Work />} />
          <Route path="resume" element={<Resume />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </div>
  );
};
