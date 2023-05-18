import React from 'react';
import { DUMMY_MEALS } from './DummyData/dummyData';
import Card from '../UI/Card/Card';
import MealItem from './MealsItem/MealItem';
import styles from './Styles/AvailableMeals.module.css';
const AvailableMeals = () => {
    const meals = DUMMY_MEALS.map((meal) => <MealItem key={meal.id} id={meal.id} name={meal.name} description={meal.description} price={meal.price} />)
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