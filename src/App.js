import { Routes, Route } from "react-router-dom";
import Articles from "./components/pages/Articles";
import Editor from "./components/pages/Editor";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Admin from "./components/pages/Admin";
import Photos from "./components/pages/Photos";
import Profile from "./components/pages/Profile";
import Unauthorized from "./components/pages/Unauthorized";
import Missing from "./components/pages/Missing";
import Layout from "./components/Layout";
import RequireAuth from "./components/RequireAuth";
import "./App.css";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/unauthorized" element={<Unauthorized />} />

        {/*bu routesları role'e göre protected yapmak istiyoruz bunlar */}
        <Route element={<RequireAuth allowedRoles={["Author"]} />}>
          <Route path="/articles" element={<Articles />} />
        </Route>
        <Route element={<RequireAuth allowedRoles={["Editor"]} />}>
          <Route path="/editor" element={<Editor />} />
        </Route>
        <Route element={<RequireAuth allowedRoles={["Photographer"]} />}>
          <Route path="/photos" element={<Photos />} />
        </Route>
        <Route element={<RequireAuth allowedRoles={["Admin"]} />}>
          <Route path="/admin" element={<Admin />} />
        </Route>

        <Route
          element={
            <RequireAuth
              allowedRoles={[
                "Admin",
                "Client",
                "Editor",
                "Photographer",
                "Author",
              ]}
            />
          }
        >
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="*" element={<Missing />} />
      </Routes>
    </Layout>
  );
}

export default App;
