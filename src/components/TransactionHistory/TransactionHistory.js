import React from 'react';
import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

const TransactionHistory = ({items}) => (
  <table className="transactionHistory">
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>

    <tbody>
      { items.map( item => (
        <tr key={item.id}>
          <td className={styles.type}>{item.type}</td>
          <td className={styles.amount}>{item.amount}</td>
          <td className={styles.currency}>{item.currency}</td>
        </tr> )
      ) }
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf( PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired
  }) )
};

export default TransactionHistory;