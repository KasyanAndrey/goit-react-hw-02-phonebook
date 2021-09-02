import React from 'react';
import s from './Filter.module.css'

const Filter = ({filter, changeFilter}) => (
    <label htmlFor="">
        <p className={s.title}>Find contacts by name</p>
        <input type="text" value={filter} onChange={changeFilter} className={s.input}/>
    </label>
)

export default Filter;
