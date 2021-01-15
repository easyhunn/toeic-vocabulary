import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./Main/main.js";
import Dictionary from "./Dictionary/dictionary.js";
import Navigation from "./Navigator/navigation";
import LessonComponent from "./Lesson/PhraseComponent.js";

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <div>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/Dictionary">
            <Dictionary />
          </Route>
          <Route path="/Phrase">
            <LessonComponent />
          </Route>
        </div>
      </div>
    </Router>
  );
}

export default App;
