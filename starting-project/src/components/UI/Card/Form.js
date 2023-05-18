import React from 'react';
import styles from './Styles/Form.module.css';

const Form = React.forwardRef((props, ref) => {
    return (
        <>
            <div className={styles.input}>
                <label id={props.input.id}>{props.label}</label>
                <input ref={ref} {...props.input} />
            </div>
        </>
    )
})
export default Form