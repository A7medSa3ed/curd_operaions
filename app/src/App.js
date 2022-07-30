import NavBar from "./components/NavBar";
import AllUsers from "./components/AllUsers";
import UserForm from "./components/UserForm";
import NotFound from "./components/NotFound";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<AllUsers />} exact />
        <Route path="/add" element={<UserForm />} />
        <Route path="/edit/:id" element={<UserForm />} />
        <Route element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
