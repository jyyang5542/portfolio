import {Routes, Route} from 'react-router-dom';
import {MyMain, MyProfile, MySkill, MyPortfolio, MyContact, NotFound} from '../views/index';

function MyRouter() {
	return (
		<Routes>
			<Route path="/" exact element={<MyMain />}></Route>
			<Route path="/profile" exact element={<MyProfile />}></Route>
			<Route path="/skill" exact element={<MySkill />}></Route>
			<Route path="/portfolio" exact element={<MyPortfolio />}></Route>
			<Route path="/contact" exact element={<MyContact />}></Route>
			<Route path="/*" element={<NotFound />}></Route>
		</Routes>
	);
}
export default MyRouter;
