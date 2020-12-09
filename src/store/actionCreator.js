import * as Actions from "./Constants";

export const inputOnFocus = () => ({
  type: Actions.InputOnFocus
});

export const inputOnBlur = () => ({
  type: Actions.InputOnBlur

});

export const clickAll = () => ({
  type: Actions.ClickAll
});

export const changeTypeText = (newTypeValue, item) => ({
  type: Actions.ChangeTypeText,
  newTypeValue,
  item
});

export const changeOrder = (typeOrder, item) => ({
  type: Actions.ChangeOrder,
  typeOrder,
  item,
  compare

})
const compare = (property) => {
  return function (obj1, obj2) {
    var value1 = obj1[property];
    var value2 = obj2[property];
    return value1 - value2;
  }
}
export const delTodo = (item) => ({
  type: Actions.DelTodo,
  item
})

export const editTodo = (item) => ({
  type: Actions.EditTodo,
  item

});
export const saveEdit = (item) => ({
  type: Actions.SaveEdit,
  item
})
export const cancelEdit = (item) => ({
  type: Actions.CancelEdit,
  item

});
export const searchItem = (typeSearchValue) => ({
  type: Actions.SearchItem,
  typeSearchValue
})

export const handelOnClick = (item) => ({
  type: Actions.HandelOnClick,
  item

})
export const clickProcessing = () => ({
  type: Actions.ClickProcessing

})
export const clickDone = () => ({
  type: Actions.ClickDone

})

export const addTodo = () => ({
  type: Actions.AddTodo,
  compare

})

