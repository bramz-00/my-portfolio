import { Toaster } from "./components/atoms/sonner"
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import "./utils/i18n";
import Home from "@/pages/Home";
import ProjectDetail from "./pages/ProjectDetail";
import BackToTopButton from "./components/molecules/BackToTopButton";


function App() {

  return (
      <BrowserRouter>
      <Toaster
        position="top-center"
        richColors
        toastOptions={{
          duration: 600,
        }} />
        <BackToTopButton/>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:projectId" element={<ProjectDetail />} />
        </Routes>

      </BrowserRouter>
  )
}

export default App
