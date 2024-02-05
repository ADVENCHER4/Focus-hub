import { FC, PropsWithChildren } from 'react';
import { TiMinus } from "react-icons/ti";
import { IModal } from '../../../types';
import Button from '../Button/Button';
import styles from './Modal.module.css';

interface ModalProps extends IModal {
  id: string
  title: string
}

const Modal: FC<PropsWithChildren<ModalProps>> = ({ children, toggle, isVisible, title, id }) => {
  return (
    <div className={isVisible ? styles.modal : styles.unactive} id={id}>
      <div className={styles.modalHeader}>
        <h3>{title}</h3>
        <Button onClick={toggle}>
          <TiMinus />
        </Button>
      </div>
      <div className={styles.modalContent}>
        {children}
      </div>
    </div>
  )
}

export default Modal