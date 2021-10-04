import { Route } from 'react-router-dom';

interface MyRouteProps {
	component: any;
	path: string;
	exact?: boolean;
}

export default function MyRoute({ component: Component, ...rest }: MyRouteProps) {
	return <Route {...rest} render={(props) => <Component {...props} />} />;
	/** Descomentar para impedir acesso ao checkout com carrinho vazio
	return (
		<Route
			{...rest}
			render={(props) =>
				cart.items.length !== 0 ? (
					<Component {...props} />
				) : (
					<Redirect to={{ pathname: '/', state: { from: props.location } }} />
				)
			}
		/>
	);
	*/
}
