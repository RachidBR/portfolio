import { ThemeProvider } from "styled-components";
import { lightTheme } from "./components/Themes";
import { darkTheme } from "./components/Themes";
import "./styles/sass/globalStyles.scss";
import Main from "./pages/Main";
import AboutPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";
import MySkillsPage from "./pages/MySkillsPage";
import WorkPage from "./pages/WorkPage";
import { Routes, Route } from "react-router";
function App() {
  return (
    <div className="App">
      <ThemeProvider theme={lightTheme}>
        <Routes>
          <Route exact path="/" component={Main} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/blog" component={BlogPage} />
          <Route exact path="/work" component={WorkPage} />
          <Route exact path="/skills" component={MySkillsPage} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
