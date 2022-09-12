import React from 'react';
import { motion } from 'framer-motion';

import './ConfirmPopup.scss';

interface IConfirmPopupProps {
  title: string;
  description: string;
  onClick: () => void;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ConfirmPopup: React.FC<IConfirmPopupProps> = ({
  title,
  description,
  onClick,
  setOpen,
}) => {
  const handleClose = () => setOpen(false);

  return (
    <motion.div
      transition={{ duration: 0.22 }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      className="popup-container app_flex"
    >
      <button onClick={handleClose} className="closeBtn">
        &times;
      </button>
      <div className="popup_wrapper">
        <div className="popup">
          <div className="popup-content_box">
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
          <div className="btnBx">
            <button onClick={handleClose}>Cancelar</button>
            <button onClick={onClick}>Confirmar</button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ConfirmPopup;
