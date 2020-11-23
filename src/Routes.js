import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import ExporterHubPage from "./pages/ExporterHubPage";
import ReadmePage from "./pages/ReadmePage";
import Footer from "./components/Footer/Footer";

function Routes() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={ExporterHubPage} />
        <Route exact path="/detail" component={ReadmePage} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default Routes;
