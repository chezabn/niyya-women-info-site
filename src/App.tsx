import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import LegalPage from "./pages/LegalPage";
import ContactPage from "./pages/ContactPage";
import ScrollToHash from "./components/common/ScroolToHash.tsx";

function App() {
    return (
        <>
            <ScrollToHash />

            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/legal/:slug" element={<LegalPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;