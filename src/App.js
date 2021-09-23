import logo from "./logo.svg";
import "./App.css";
import Header from "./containers/header/header";
import { Route, Switch } from "react-router";
import HeadPage from "./pages/headPage";
import About from "./pages/about";
 import Blog from "./pages/blog";
import Commentarie from "./pages/comment";
import Registeration from "./pages/registeration";
import Footer from "./containers/footer";
import Thought from "./pages/thought";
import BlogInformation from "./pages/blogInformation/blogInformation";
import GroupTeachrs from "./pages/groupTeachrs/groupTeachrs";
import RegistirationForStudents  from "./pages/registirationForStudents/registiratsiyaForStudents";
const pages = [
  {
    path: "/",
    component: <HeadPage />,
    exact: true,
  },
  {
    path: "/about",
    component: <About />,
    exact: false,
  },
  {
    path: "/blog",
    component: <Blog />,
    exact: false,
  },
  {
    path: "/comment",
    component: <Commentarie />,
    exact: false,
  },
  {
    path: "/registeration",
    component: <Registeration />,
    exact: false,
  },
  {
    path: "/thought",
    component: < Thought />,
    exact: false,
  },
  {
    path: "/blogInformation",
    component: < BlogInformation />,
    exact: false,
  },
  {
    path: "/groupTeachrs",
    component: < GroupTeachrs />,
    exact: false,
  },
  {
    path: "/registiratsiyaForStudents",
    component: < RegistirationForStudents />,
    exact: false,
  },
];
function App() {
  return (
    <div className="App">
      <Header   />
      <Switch>
        {pages.map((v, i) => {
          return (
            <Route path={v.path} key={i} exact={v.exact}>
              {v.component}
            </Route>
          );
        })}
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
 