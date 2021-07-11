import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NewsList from "./components/NewsList";
import ArticleDetail from "./components/ArticleDetail";
import Header from "./components/Header";
import NotFoundPage from "./components/NotFoundPage";

function App() {
  return (
    <div className="App">
      <Router>
          <Header/>
          <Switch>
              <Route path='/' exact component={NewsList}/>
              <Route path='/article/:articleTitle' exact component={ArticleDetail}/>
              <Route component={NotFoundPage}/>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
