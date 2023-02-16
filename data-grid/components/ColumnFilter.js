import styles from './filter.module.css';
const ColumnFilter = ({ column }) => {
  let id = null;
  let changeHandler = (e) => {
    setFilter(e.target.value);
  };
  const { filterValue, setFilter } = column;
  return (
    <span>
      <input
        className={styles['input-sample']}
        value={filterValue || ''}
        onChange={changeHandler}
        placeholder={'search'}
      ></input>
    </span>
  );
};
export default ColumnFilter;
