import React, { Component } from 'react';
import{BrowserRouter, Route,Switch} from 'react-router-dom';
import '../App.css';
import  Home  from './Home';
import  NotFound  from './NotFound';
import  AddProducts  from './AddProducts';
import  ViewProducts  from './ViewProducts';



class App extends Component {
    render() {
        return (
                <BrowserRouter>
                    <div className="App">
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route exact path="/product/view/:id" component={ViewProducts}/>
                            <Route exact path="/product/add" component={AddProducts}/>
                            <Route exact path="/product/edit/:id" component={AddProducts}/>
                            <Route component={NotFound}/>
                        </Switch>
                    </div>
                </BrowserRouter>
                );
    }
}
;

export default App;
