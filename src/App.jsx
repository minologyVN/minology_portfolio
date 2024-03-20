import { AppLayout } from "./layout/AppLayout";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import { Home, Contact, Skill, Work, Resume } from "./pages";
import { PageLayout } from "./layout/PageLayout";

export const App = () => {
  return (
    <AppLayout>
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
    </AppLayout>
  );
};
