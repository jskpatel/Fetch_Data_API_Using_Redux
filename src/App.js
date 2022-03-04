import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import UserList from './component/user/UserList'
import UserDetail from './component/user/UserDetail'

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={UserList} />
          <Route path='/UserDetail/:userId' exact component={UserDetail} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
