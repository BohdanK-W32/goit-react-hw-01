import React from 'react';
import PropTypes from 'prop-types';
import styles from './Stats.module.css';

const Stats = ({title, stats}) => (
  <section className={styles.statSection}>
    <h2 className={styles.title}>{title}</h2>

    <ul className={styles.statList}>
      { stats.map( item =>
      (<li key={item.id} style={{backgroundColor: `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`}} className={styles.item}>
        <span className={styles.label}>{item.label}</span>
        <span className={styles.percentage}>{item.percentage}%</span>
      </li>)
      ) }
    </ul>
  </section>
);

Stats.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf( PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired
  }) )
}

export default Stats;