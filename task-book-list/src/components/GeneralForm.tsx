import './GeneralForm.css';
import FormInput from './FormInput';
import { IGeneralFormProps } from '../types';

export default function GeneralForm({
    title,
    inputItems,
    submitHandle
}: IGeneralFormProps) {
    return (
        <form
            className={'general-form-container'}
            onSubmit={submitHandle}
        >
            <h1>{title}</h1>
            {
                inputItems.map(item =>
                    <FormInput
                        key={item.name}
                        name={item.name}
                        ref={item.refer}
                        value={
                            item.value ? item.value : ''
                        }
                    />
                )
            }
            <button
                type={'submit'}
                className={'form-submit-button'}
            >
                Submit
            </button>
        </form>
    );
};