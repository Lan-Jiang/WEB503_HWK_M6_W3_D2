import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
  Outlet
} from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";


export default function App() {
  //Insert router, links here
  return (
    <Router>
    <h2>TV APPS</h2>
    <Link to="/netflix">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/69/Netflix_logo.svg"
        alt="Netflix logo"
      />
    </Link>
    <Link to="/HBOMax">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/1/17/HBO_Max_Logo.svg"
        alt="HBO MAX logo"
      />
    </Link>
    <Link to="/hulu">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Hulu_Logo.svg"
        alt="Hulu logo"
      />
    </Link>
    <Link to="/primeVideo">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Prime_Video.png"
        alt="Prime Video logo"
      />
    </Link>

    <Switch>
      <Route exact path="/:id">
        <Child />
      </Route>
    </Switch>
  </Router>
  )
}


// const tvApps = {
//     '1': {
//     name: 'Netflix',
//     description: 'https://upload.wikimedia.org/wikipedia/commons/6/69/Netflix_logo.svg'
//     },
//     '2': {
//     name: 'HBO MAX',
//     description: 'https://upload.wikimedia.org/wikipedia/commons/1/17/HBO_Max_Logo.svg'
//     }
//     };


// function AppLists() {
//       return (
//       <div style={{ padding: 20 }}>
//       <h2>TV APPS</h2>
//       {/* render any matching child */}
//       <ul>
//         {Object.entries(tvApps).map(([slug, { name
//       }]) => (
//       <li key={slug}>
//         <img src={description} class={name}></img>
//         {name}
//       </li>
//       ))}
//       </ul>
//       {/* <tvApp /> */}
//       </div>
//       );
// }


// function tvApp() {

//   // Below this comment, there's one major key script missing

//   const { slug } = useParams();
//   const app = tvApps[slug];
//   const { name, description } = app;  

//   return (
//     <div>
//       <h3>You Selected:<span>{name}</span></h3>
//     </div>
//   );
// }

function Child() {
  // Below this comment, there's one major key script missing
  let params = useParams();
  let id = params.id;

  return (
    <div>
      <h3>
        You Selected:<span>{id}</span>
      </h3>
    </div>
  );
}
