import React from 'react';
import { motion } from 'framer-motion';

import './ConfirmPopup.scss';

interface IConfirmPopupProps {
  title: string;
  description?: string;
  onClick: () => void;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ConfirmPopup: React.FC<IConfirmPopupProps> = ({
	title,
	description,
	onClick,
	setOpen,
}) => {
	return (
		<motion.div
			initial={{ opacity: 0, scale: 0 }}
			animate={{ opacity: 1, scale: 1 }}
			exit={{ opacity: 0, scale: 0 }}
			className="popup-container app_flex"
		>
			<div className="popup">
				<h2>{title}</h2>
			</div>
		</motion.div>
	);
};

export default ConfirmPopup;
