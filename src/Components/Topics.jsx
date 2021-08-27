import React from 'react'
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useParams,
	useRouteMatch,
} from 'react-router-dom'
export function Topics() {
	let { path, url } = useRouteMatch()
	return (
		<Router>
			<div>
				<h2>Topics</h2>
				<ul>
					<li>
						<Link to={`${url}/rendering`}>
							Rendering with React
						</Link>
					</li>
					<li>
						<Link to={`${url}/components`}>Components</Link>
					</li>
					<li>
						<Link to={`${url}/props-v-state`}>Props vs. State</Link>
					</li>
				</ul>
				<Switch>
					<Route exact path={path}>
						<h3>Please select a topic.</h3>
					</Route>
					<Route path={`${path}/:topicId`}>
						<Topic />
					</Route>
				</Switch>
			</div>
		</Router>
	)
}
function Topic() {
	let { topicId } = useParams()
	return (
		<div>
			<h3>{topicId}</h3>
		</div>
	)
}
