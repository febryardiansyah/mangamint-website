import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import NavbarComponent from "./components/navbar/navbar";
import FooterComponent from "./components/footer/FooterComponent";
import HomePage from "./pages/homePage";
import DetailPage from "./pages/DetailPage";
import ChapterPage from "./pages/ChapterPage";
import ScrollToTop from "./helpers/ScrollToTop";
import AllMangaPage from "./pages/AllMangaPage";
import SearchResultPage from "./pages/SearchResultPage";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <BrowserRouter>
      <NavbarComponent />
      <main>
        <ScrollToTop />
        <Switch>
          <Redirect from="/all/page/1" to="/all"></Redirect>
          <Route path="/" exact component={HomePage} />
          <Route path="/detail/:id" component={DetailPage} />
          <Route path="/chapter/:id" component={ChapterPage} />
          <Route path="/all/page/:page" component={AllMangaPage} />
          <Route path="/all" component={AllMangaPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/search/:query" component={SearchResultPage} />
        </Switch>
      </main>
      <FooterComponent />
    </BrowserRouter>
  );
}

export default App;
