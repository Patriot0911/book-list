import { IModalContentProps } from "../types";
import './ModalContent.css';

export default function ModalContent({ onClose, info }: IModalContentProps) {
  return (
    <div className={'modal-back'}>
      <div className={'modal-window'}>
        <p>{info}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};