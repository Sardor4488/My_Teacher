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
];
function App() {
  return (
    <div className="App">
      <Header />
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
