import { Switch } from 'react-router-dom';
import Checkout from '../Pages/Checkout';
import Home from '../Pages/Home';
import MyRoute from './MyRoutes';

export default function AllRoutes() {
	return (
		<Switch>
			<MyRoute exact path='/' component={Home} />
			<MyRoute exact path='/checkout' component={Checkout} />
		</Switch>
	);
}
