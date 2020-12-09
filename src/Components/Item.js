import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { isSearchSelector, searchListSelector, isAllSelector, listSelector, isProcessingSelector, proListSelector, doneListSelector } from '../selector';
import { changeTypeText, changeOrder, saveEdit, cancelEdit, editTodo, delTodo, handelOnClick } from '../store/actionCreator'


const Item = () => {

  const dispatch = useDispatch();
  const isSearch = useSelector(isSearchSelector);
  const searchList = useSelector(searchListSelector);
  const isAll = useSelector(isAllSelector);
  const list = useSelector(listSelector);
  const isProcess = useSelector(isProcessingSelector);
  const prolist = useSelector(proListSelector);
  const donelist = useSelector(doneListSelector);

  const changeList = (isSearch || searchList.length !== 0) ? (searchList) : (isAll ? (list) : (isProcess ? (prolist) : (donelist)))

  return (
    <>
      {
        changeList.map((item) => {
          return (
            <div key={item.id} >
              {(item.isEdit) ? (
                <input type="text" value={item.content} onChange={e => dispatch(changeTypeText(e.target.value, item))} />) : (
                  <>
                    <input type='number' placeholder='number' value={item.order} onChange={(e) => dispatch(changeOrder(e.target.value, item))} />
                    <div key={item.id} className={`${item.isClick ? "lis Click" : "lis"}`} onClick={() => dispatch(handelOnClick(item))} >{item.content}</div>
                  </>
                )}
              {(item.isEdit) ? (
                <>
                  <button onClick={() => dispatch(saveEdit(item))} >save</button>
                  <button onClick={() => dispatch(cancelEdit(item))}>cancel</button>
                </>
              ) : (<button disabled={item.isClick ? "disabled" : ""} onClick={() => dispatch(editTodo(item))} >edit</button>
                )}
              <button onClick={() => dispatch(delTodo(item))} >delete</button>
            </div>
          )
        })
      }
    </>
  )
}


export default Item;


