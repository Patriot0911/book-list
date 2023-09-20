import { createPortal } from 'react-dom';
import { useState } from 'react';
import { IActionListProps, IMainActionButtonsProps } from '../types';
import ActionButton from './ActionButton';
import ModalContent from './ModalContent';

export default function ActionsList(props: IActionListProps) {
    const [showModal, setShowModal] = useState(false);
    
    return (
        <div className={'action-buttons-container'}>
            {
                showModal && 
                createPortal(
                    <ModalContent
                        onClose={() => setShowModal(false)}
                        info={'Choose Action to Interact'}
                    >
                        <MainActionButtons
                            {...props}
                            mobile={true}
                        />
                    </ModalContent>,
                document.body)
            }
            <MainActionButtons
                {...props}
                mobile={false}
            />
            <button
                className={'mobile-actions'}
                onClick={() => setShowModal(true)}
            >
                Action
            </button>
        </div>
    );
};


function MainActionButtons({
    book,
    deleteBookHandle,
    changeBookActiveHandle,
    mobile
}: IMainActionButtonsProps) {
    return (
        <>
            <ActionButton
                name={'Edit'}
                mobile={mobile}
                path={`/books?bookid=${book.id}`}
            />
            <ActionButton
                name={'Delete'}
                mobile={mobile}
                callback={() => deleteBookHandle(book)}
            />
            <ActionButton
                name={
                    book.activated ?
                    'DeActivate' : 'ReActivate'
                }
                mobile={mobile}
                color={
                    book.activated ?
                    'green' : 'red'
                }
                callback={() => changeBookActiveHandle(book)}
            />        
        </>
    );
};