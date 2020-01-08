import React, { Component } from 'react'
import {BrowserRouter as Router , Route ,Switch, Link,useParams , useRouteMatch } from 'react-router-dom';
export default class NestedRoutes extends Component {
    render() {
        return (
            <div>
                <hr/>
               <h1> this is the nested route Example</h1> 
               <Router>
                 <div>
                     <ul>
                         <li>
                             <Link to="/" >Home</Link>
                         </li>
                         <li>
                             <Link to="/topics" > Topics to Learn </Link>
                         </li>
                     </ul>
                     <hr/>
                     <br/>
                     <Switch>
                         <Route exact  path="/" component={Home}>
                            
                         </Route>

                         <Route  path="/topics"  component={Topics}>
                             
                         </Route>
                     </Switch>
                    </div>
               </Router>
            </div>
        )
    }
}
const Home = () => (
    <div>
        <h2> Home page</h2>
    </div>
)
// the same of Home function
function Home2(){
    return (
        <div>
          <h2> Home page</h2>
        </div>

    )
}
function Topics(){
     let { path ,  url} = useRouteMatch();
     return (
         <div>
             <h3> Topics</h3>
            <ul>
                <li>
                    <Link to={`${url}/class-component`}> Class Component in React</Link>                    
                </li>
                <li>
                    <Link to={`${url}/reactstrap`}>Bootstrap with React (reactstrap)</Link>                    
                </li>
                <li>
                    <Link to={`${url}/state-props`}> State and props in react </Link>                    
                </li>
            </ul>
            <br/>
            <Switch >
                <Route exact path={path}>
                    <h4> please select a topic in React</h4>                     
                </Route>
                <Route path={`${path}/:topicName`}>
                    <Topic />
                </Route>
            </Switch>
         </div>
     )

}

function Topic(){
    let { topicName  } = useParams();
    return (
        <div>
            <h4> {topicName} </h4>
        </div>
    );


}