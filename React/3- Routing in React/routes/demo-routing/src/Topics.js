import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";

export default function Topics() {
    let { path, url } = useRouteMatch(); // {path: '/topics', url: '/topics'}

    return (
      <div>
        <ul className="topics">
            <li>
                <Link to={`${url}/link1`}> Link1</Link>
            </li>
            <li>
                <Link to={`${url}/link2`}> Link2</Link>
            </li>
            <li>
                <Link to={`${url}/link3`}> Link3</Link>
            </li>
        </ul>
        <Switch>
            <Route path={`${path}/:topicId`}>
                <Topic />
            </Route>
        </Switch>
      </div>
    );
  }

  function Topic() {
      let { topicId } = useParams();

      return (
          <div>
              <h3>Topic with ID: {topicId}</h3>
          </div>
      )
  }