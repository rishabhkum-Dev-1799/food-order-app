import React from 'react';
import { DUMMY_MEALS } from './DummyData/dummyData';
import styles from './Styles/AvailableMeals.module.css';
const AvailableMeals = () => {
    const meals = DUMMY_MEALS.map((meal) => <li key={meal.id}>{meal.name}</li>)
    return (
        <>
            <section className={styles.meals}>
                <ul>
                    {meals}
                </ul>
            </section>
        </>
    )
};

export default AvailableMeals;