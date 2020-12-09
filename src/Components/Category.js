import React from 'react';
import { isDoneSelector, isProcessingSelector, isAllSelector } from '../selector';
import { clickAll, clickProcessing, clickDone } from '../store/actionCreator';
import { useSelector, useDispatch } from 'react-redux';


const Category = () => {
  const dispatch = useDispatch()
  const isAll = useSelector(isAllSelector)
  const isProcessing = useSelector(isProcessingSelector)
  const isDone = useSelector(isDoneSelector)

  return (

    <div className='comeon' >
      <span className={`${isAll ? "setcolor" : null}`} onClick={() => dispatch(clickAll())} >All </span>
      <span className={`${isProcessing ? "setcolor" : null}`} onClick={() => dispatch(clickProcessing())}>Processing</span>
      <span className={`${isDone ? "setcolor" : null}`} onClick={() => dispatch(clickDone())} >Done</span>
    </div>
  );

};


export default Category;


