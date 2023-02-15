import {NavLink} from 'react-router-dom';

function MyHeader() {
	return (
		<header className="MyHeader">
			<h1 class="MyHeader__h1">
				<NavLink to="/">로고</NavLink>
			</h1>
			<nav className="MyHeader__gnb">
				<ul>
					<li>
						<NavLink to="./profile" className={({isActive}) => '' + (isActive ? ' on' : '')}>
							Profile
						</NavLink>
					</li>
					<li>
						<NavLink to="./skill" className={({isActive}) => '' + (isActive ? ' on' : '')}>
							Skills
						</NavLink>
					</li>
					<li>
						<NavLink to="./portfolio" className={({isActive}) => '' + (isActive ? ' on' : '')}>
							Portfolio
						</NavLink>
					</li>
					<li>
						<NavLink to="./contact" className={({isActive}) => '' + (isActive ? ' on' : '')}>
							contact
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
}
export default MyHeader;
