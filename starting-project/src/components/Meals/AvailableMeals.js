import React from 'react';
import { DUMMY_MEALS } from './DummyData/dummyData';
import Card from '../UI/Card/Card';
import styles from './Styles/AvailableMeals.module.css';
const AvailableMeals = () => {
    const meals = DUMMY_MEALS.map((meal) => <li key={meal.id}>{meal.name}</li>)
    return (
        <>
            <section className={styles.meals}>
                <Card>
                    <ul>
                        {meals}
                    </ul>
                </Card>
            </section>
        </>
    )
};

export default AvailableMeals;