import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Building2, Users, ArrowRight } from "lucide-react";
import EORForm from "./components/EORForm";
import RORForm from "./components/RORForm";
import DeepRootComparison from "./DeepRootComparison";
import ViewSubmission from "./components/ViewSubmission";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 to-purple-700">
      <Routes>
        <Route path="/" element={<DeepRootComparison />} />
        <Route path="/eor" element={<EORForm />} />
        <Route path="/ror" element={<RORForm />} />
        <Route path="/view/:type/:id" element={<ViewSubmission />} />
      </Routes>
    </div>
  );
}


export default App;
