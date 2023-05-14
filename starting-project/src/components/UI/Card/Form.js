import React from 'react';
import styles from './Styles/Form.module.css';

const Form = (props) => {
    return (
        <>
            <div className={styles.input}>
                <label id={props.input.id}>{props.label}</label>
                <input {...props.input} />
            </div>
        </>
    )
}
export default Form