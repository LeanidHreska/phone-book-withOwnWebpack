import React from 'react';
import styles from './FilterBlock.css';


const FilterBlock = (props) => {
  return (
    <div className={ styles.filterBlock } >
      <form>
        <input type="text" className={ styles.filterInput } placeholder="Enter the name" onChange={ (e) => props.filterByName(e.target.value) }/>
      </form>
    </div>
  );
};

export default FilterBlock;
