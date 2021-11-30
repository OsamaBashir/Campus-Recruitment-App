// import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Loginpage from "./login/Loginpage";
import { Route, Switch } from "react-router-dom";
import NewAccount from "./login/NewAccount";
import Company from "./Pages/company/Company";
import Vacancies from "./Pages/company/Vacancies";
import Profile from "./Pages/profile/Profile";
import Companies from "./Pages/student/Companies";
import AllJobs from "./Pages/student/AllJobs";
import AppliedJobs from "./Pages/student/AppliedJobs";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Loginpage} />
      <Route path="/signup" component={NewAccount} />
      <Route exact path="/signin" component={Loginpage} />
      <Route path="/vacancies" component={Company} />
      <Route path="/vacancy" component={Vacancies} />
      <Route path="/profile" component={Profile} />
      <Route path="/companies" component={Companies} />
      <Route path="/alljobs" component={AllJobs} />
      <Route path="/appliedjobs" component={AppliedJobs} />
    </Switch>
  );
}

export default App;
