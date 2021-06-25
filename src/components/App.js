import Home from "./Home";
import Features from "./Features";
import Contact from "./Contact";
import Main from "./Main";
import Footer from "./Footer";
import {Link, NavLink, Route} from "react-router-dom";

function App() {
  return (

        <div className="app">
            <div className="content">
                  <div className="header">
                    <div className="cover">
                      Cover
                    </div>
                    <div className="nav">
                        <div className="home">
                            <NavLink  exact to="/" activeClassName="selected" className="navLink">Home</NavLink>
                        </div>
                      <div className="features">
                          <NavLink  to="/features" activeClassName="selected" className="navLink">Features</NavLink>

                      </div>
                      <div className="contact">
                          <NavLink to="/contact" activeClassName="selected" className="navLink">Contact</NavLink>
                      </div>
                    </div>
                  </div>
                <Route exact path="/">
                    <Main />
                </Route>
                <Route path="/features">
                    <Features />
                </Route>
                <Route path="/contact">
                    <Contact />
                </Route>
                <div className="footer">
                    <Footer />
                </div>
            </div>
        </div>
  );
}

export default App;
