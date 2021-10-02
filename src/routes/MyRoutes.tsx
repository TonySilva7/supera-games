import { Route } from 'react-router-dom';

// export default function MyRoute({ component: Component, ...rest }) {
interface MyRouteProps {
	component: any;
	path: string;
	exact?: boolean;
}

export default function MyRoute({ component: Component, ...rest }: MyRouteProps) {
	return <Route {...rest} render={(props) => <Component {...props} />} />;
}
