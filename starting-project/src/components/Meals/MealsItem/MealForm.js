import React from 'react';
import Form from '../../UI/Card/Form';
import styles from './Styles/MealForm.module.css';
const MealForm = (props) => {
    return (
        <>
            <form className={styles.form}>
                <Form label='Amount'
                    input={
                        {
                            id: props.id,
                            type: 'number',
                            min: '1',
                            max: '5',
                            step: '1',
                            defaultValue: '1'
                        }
                    } />
                <button>+Add</button>
            </form>
        </>

    )
};

export default MealForm;