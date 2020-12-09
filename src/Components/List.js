import React from 'react';
import Item from './Item';
import { useSelector, useDispatch } from 'react-redux';
import { listSelector } from '../selector';
import { inputOnFocus, inputOnBlur, searchItem } from '../store/actionCreator'



const List = () => {

  const list = useSelector(listSelector);
  const dispatch = useDispatch()

  return (
    <>
      {list && list.length !== 0 ?
        (<input type='search' placeholder='search' onChange={(e) => dispatch(searchItem(e.target.value))}
          onClick={() => dispatch(inputOnFocus())} onBlur={() => dispatch(inputOnBlur())} />) : (null)
      }
      <Item />
    </>
  )
}


export default List;