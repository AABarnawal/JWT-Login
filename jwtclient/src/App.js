import Logout from './Logout';
import NoPage from './NoPage';
import Home from './Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        hello world
      </header> */}
      {/* <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />}>

          <Route path="log" element={<Logout />} />

          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
      </BrowserRouter> */}
      <Router>
                {/* <div className="App">
                    <ul className="App-header">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact">
                                Contact Us
                            </Link>
                        </li>
                    </ul> */}
                    <Routes>
                        <Route
                            path="/"
                            element={<Home />}
                        ></Route>
                        <Route
                            path="/log"
                            element={<Logout />}
                        ></Route>
                        <Route
                            path="*"
                            element={<NoPage />}
                        ></Route>
                    </Routes>
                {/* </div> */}
            </Router>

      
    </div>
  );
}

export default App;
