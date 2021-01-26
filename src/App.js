import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";

import 'materialize-css'
import {CardPage} from "./pages/CardPage";
import {QuestionsPage} from "./pages/QuestionsPage";
import {EditQuestionPage} from "./pages/EditQuestionPage";
import {Navbar} from "./components/Navbar";
import {AnswerPage} from "./pages/AnswerPage";

function App(props) {
  return (
      <BrowserRouter>
          <Navbar/>
          <div className='container'>
              <Switch>
                  <Route exact path="/cards" render={() => <CardPage state={props.state} />}/>
                  <Route exact path="/cards/:key" render={() => <CardPage state={props.state} />}/>
                  <Route exact path="/answer/:key" render={() => <AnswerPage state={props.state}/>}/>
                  <Route exact path="/questions" render={() => <QuestionsPage state={props.state}/>}/>
                  <Route exact path="/questions/:page" render={() => <QuestionsPage state={props.state}/>}/>
                  <Route exact path="/questions/:key/edit" render={() => <EditQuestionPage state={props.state}/>}/>
                  <Redirect to="/cards"/>
              </Switch>
          </div>
      </BrowserRouter>
  );
}

export default App;
