import { Switch, Route} from 'react-router-dom';
import Login from './Login';
import Success from './Success';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <Login />
        </Route>
        <Route path="/success">
          <Success />
        </Route>
      </Switch> 
    </div>
  );
}

export default App;
