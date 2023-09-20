import { IModalContentProps } from '../types';
import './ModalContent.css';

export default function ModalContent({
  onClose,
  info,
  children
}: IModalContentProps) {
  console.log(children);
  return (
    <div className={'modal-back'}>
      <div className={'modal-window'}>
        <p>{info}</p>
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};