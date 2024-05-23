import './App.css';
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import {Route, Switch} from "react-router-dom";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import NotFound from "./Pages/NotFound";
import Category from "./Pages/Category";
import Recipe from "./Components/Recipe";

function App() {
  return (
    <div>
        <Header />
        <main className='container content'>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/about' component={About} />
                <Route path='/contacts' component={Contact} />
                <Route path='/category/:name' component={Category} />
                <Route path='/meal/:id' component={Recipe} />
                <Route component={NotFound} />
            </Switch>
        </main>
        <Footer/>
    </div>
  );
}

export default App;
