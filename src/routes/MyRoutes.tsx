import { Route } from 'react-router-dom';

interface MyRouteProps {
	component: any;
	path: string;
	exact?: boolean;
}

export default function MyRoute({ component: Component, ...rest }: MyRouteProps) {
	return <Route {...rest} render={(props) => <Component {...props} />} />;
}
