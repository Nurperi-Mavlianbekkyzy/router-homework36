import React  from 'react';
import { Topics } from './Components/Topics';
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
} from "react-router-dom";
function Home () {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}
export function App() {
  return(
    <>
    <BrowserRouter>
     <div>
       <ul>
         <li>
           <Link to="/">Home</Link>
         </li>
         <li>
           <Link to="/topics">Topics</Link>
         </li>
       </ul>
      <hr />
       <Switch>
         <Route exact path="/">
           <Home/>
         </Route>
         <Route path="/topics">
           <Topics/>
         </Route>
       </Switch>
     </div>
    </BrowserRouter>
    </>
  );
}
