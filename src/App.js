import "./App.css";
import { Routes, Route } from "react-router-dom";
import Feeds from './components/home/Feeds';
import Welcome from './components/welcome/Welcome'
import Settings from './components/settings/Settings';
import Profile from "./components/profile/Profile";
import { useEffect, useState } from "react";
// import WelcomeLogo from "./components/welcome/WelcomeLogo";
import General from "./components/settings/General";
import Navbar from "./components/navigation/Navbar";

function App() {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(true)
    }, 3000);
    return () => {
      clearTimeout(timer);
      setLoading(false)
    }
  }, [])

  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Feeds />} />
        
        <Route exact path="/welcome" element={<Welcome />} />

        <Route exact path="/settings" element={<Settings />} />
        <Route exact path="/settings/general" element={<General />} />

        <Route exact path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
