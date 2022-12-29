import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import DocumentList from "./components/DocumentList";
import DocumentPage from "./components/DocumentPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route element={<DocumentList />} path="/" />
        <Route element={<DocumentPage />} path="/DocumentPage" />
        <Route element={<DocumentPage />} path="/DocumentPage/:id" />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
