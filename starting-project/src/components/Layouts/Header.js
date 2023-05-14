import React from 'react';
import mealsImage from '../../assets/meals.jpg';
import styles from './Header.module.css';
import HeaderButton from './HeaderButton';

const Header = (props) => {
    return (
        <>
            <header className={styles.header}>
                <h1>QuickMeals</h1>
                <HeaderButton />
            </header>
            <div className={styles['main-image']}>
                <img src={mealsImage} alt='A table with delicious foods' />
            </div>
        </>
    )
}

export default Header;