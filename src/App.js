import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Feeds from './components/home/Feeds';
import Welcome from './components/welcome/Welcome'
import Settings from './components/settings/Settings';
import Profile from "./components/profile/Profile";
import { Fragment } from "react";
// import WelcomeLogo from "./components/welcome/WelcomeLogo";
import General from "./components/settings/General";
import Navbar from "./components/navigation/Navbar";
import Privacy from "./components/settings/Privacy";
import Notifications from "./components/settings/Notifications";
import Security from "./components/settings/Security";

function App() {

  // const [loading, setLoading] = useState(true)

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setLoading(true)
  //   }, 3000);
  //   return () => {
  //     clearTimeout(timer);
  //     setLoading(false)
  //   }
  // }, [])

  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Feeds />} />
        
        <Route exact path="/welcome" element={<Welcome />} />

        <Route path="/settings" element={<Navigate to="/settings/general" />} />

        <Route exact path="/settings/privacy" element={
          <Fragment>
            <Settings />
            <Privacy />
          </Fragment>
        } />

        <Route exact path="/settings/general" element={
          <Fragment>
            <Settings />
            <General />
          </Fragment>
        } />

        <Route exact path="/settings/notifications" element={
          <Fragment>
            <Settings />
            <Notifications />
          </Fragment>
        } />

        <Route exact path="/settings/security" element={
          <Fragment>
            <Settings />
            <Security />
          </Fragment>
        } />

        <Route exact path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
