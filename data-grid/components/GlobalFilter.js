import { useState } from 'react';
import { useAsyncDebounce } from 'react-table';
import 'regenerator-runtime/runtime';
import styles from './filter.module.css';

const GlobalFilter = ({ filter, setFilter }) => {
  const [value, setValue] = useState(filter);
  const setFilterAndDelay = useAsyncDebounce((val) => {
    setFilter(val);
  }, 1000);

  const onChangeHandler = (val) => {
    setValue(val);
    setFilterAndDelay(val);
  };

  return (
    <span>
      Search:{' '}
      <input
        className={styles['input-sample']}
        value={value || ''}
        onChange={(e) => onChangeHandler(e.target.value)}
      ></input>
    </span>
  );
};
export default GlobalFilter;
