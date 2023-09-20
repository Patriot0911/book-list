import { ForwardedRef, forwardRef } from "react";
import { IFormInputProps } from "../types";

const FormInput = (props: IFormInputProps, refer: ForwardedRef<HTMLInputElement>) => {
    return (
        <label>
            <p>{props.name}:</p>
            <input
                className={'form-input'}
                type={'text'}
                ref={refer}
                minLength={3}
                maxLength={20}
                required
            />
        </label>
    );
};
export default forwardRef(FormInput);