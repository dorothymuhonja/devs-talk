import "./App.css";
import { Routes, Route } from "react-router-dom";
import Feeds from './components/home/Feeds';
import Welcome from './components/registration/Welcome'
import Settings from './components/settings/Settings';
import Profile from "./components/profile/Profile";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Feeds />} />
        <Route exact path="/welcome" element={<Welcome />} />
        <Route exact path="/settings" element={<Settings />} />
        <Route exact path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
