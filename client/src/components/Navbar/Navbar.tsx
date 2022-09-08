import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import './Navbar.scss';
import { RootState } from '../../redux/store';
import { logOut } from '../../redux/UserSlice';
import ConfirmPopup from '../ConfirmPopup/ConfirmPopup';

const Navbar: React.FC = () => {
	const [modalVisible, setModalVisible] = useState(false);

	const dispatch = useDispatch();

	const currentUser = useSelector(
		(state: RootState) => state.user_redux.currentUser,
	);

	const handleLogOut = () => {
		dispatch(logOut());
		setModalVisible(false);
	};

	return (
		<>
			<nav className="navbarBox">
				<Link className="logo" to="/">
					LOGO
				</Link>
				{!currentUser ? (
					<ul className="menu">
						<li>
							<Link to="/login">Login</Link>
						</li>
						<li>
							<Link to="/cadastro">Cadastro</Link>
						</li>
					</ul>
				) : (
					<div className="profileBox">
						<div className="user">
							{currentUser.profilePic && (
								<img src={currentUser.profilePic} alt="ProfilePic" />
							)}
							<span>{currentUser.username}</span>
						</div>

						<button onClick={() => setModalVisible(true)}>Sair</button>
					</div>
				)}
			</nav>
			{modalVisible && (
				<ConfirmPopup
					title="Janela de Confirmaçao"
					onClick={handleLogOut}
					setOpen={setModalVisible}
					description="Deseja confirmar essa ação ?"
				/>
			)}
		</>
	);
};

export default Navbar;
