import React from 'react';
import styles from './NoZeroInput.css';

const NoZeroInput = props => (
  <div
    className={styles.input}
    contentEditable={true}
    aria-multiline="true"
    tabIndex={0}
    spellCheck={true}
  >
    {props.value}
  </div>
);

export default NoZeroInput;
