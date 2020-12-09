import * as Actions from "./Constants";
const initialState = {
    inputValue: '',
    list: [],
    originalTodoText: "",
    order: '',
    searchValue: '',
    searchList: [],
    isSearch: false,
    isAll: true,
    isProcessing: false,
    isDone: false,
    processingList: [],
    doneList: []
};

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case Actions.InputOnFocus:
            return {
                ...state,
                isSearch: !state.isSearch
            };
        case Actions.InputOnBlur:
            return {
                ...state,
                isSearch: false
            };
        case Actions.ClickAll:
            return {
                ...state,
                isAll: true,
                isProcessing: false,
                isDone: false,
                searchList: [],
            };
        case Actions.ChangeTypeText:
            return (action.item) ? ({
                ...state,
                list: state.list.map((each) => {
                    if (each.content === action.item.content) each.content = action.newTypeValue;
                    return each
                })
            }) : ({
                ...state,
                inputValue: action.newTypeValue
            })
        case Actions.ChangeOrder:
            return (action.item) ? ({
                ...state,
                list: state.list.map((each) => {
                    if (each.id === action.item.id) each.order = action.typeOrder;
                    return each
                }).sort(action.compare('order'))
            }) : ({ ...state })
        case Actions.DelTodo:
            return {
                ...state,
                list: state.list.filter((each) => each.id !== action.item.id)
            }
        case Actions.EditTodo:
            const newList = state.list.map((each) => {
                if (each.id === action.item.id) each.isEdit = true;
                return each
            })
            return {
                ...state,
                list: newList,
                originalTodoText: action.item.content
            }
        case Actions.SaveEdit:
            const EditedList = state.list.map((each) => {
                if (each.id === action.item.id) each.isEdit = false;
                return each
            })
            return {
                ...state,
                list: EditedList
            }
        case Actions.SearchItem:
            return {
                ...state,
                searchList: state.list.filter((each) => {
                    if (each.content.includes(action.typeSearchValue)) {
                        return each
                    }
                })
            }
        case Actions.HandelOnClick:
            return {
                ...state,
                list: state.list.map((each) => {
                    if (each.id === action.item.id) {
                        each.isClick = true;
                    }
                    return each;
                })
            }
        case Actions.CancelEdit:
            return {
                ...state,
                list: state.list.map((each) => {
                    if (each.id === action.item.id) {
                        each.content = state.originalTodoText;
                        each.isEdit = false;
                    }
                    return each;
                })
            }
        case Actions.ClickProcessing:
            return {
                ...state,
                isAll: false,
                isProcessing: true,
                isDone: false,
                searchList: [],
                processingList: state.list.filter((each) => !each.isClick),
            }
        case Actions.ClickDone:
            return {
                ...state,
                doneList: state.list.filter((each) => each.isClick),
                isAll: false,
                isProcessing: false,
                isDone: true,
                searchList: []
            }
        case Actions.AddTodo:
            const newItem = {
                id: new Date(),
                content: state.inputValue,
                isEdit: false,
                isOrder: false,
                isClick: false,
                order: '1'
            }
            const existtodo = state.list.filter((each) => each.content.toUpperCase() === newItem.content.toUpperCase()).length;
            return (newItem.content) ? (
                (!existtodo) ? (
                    {
                        ...state,
                        list: [...state.list, newItem].sort(action.compare('order')),
                        inputValue: '',
                    })
                    : ({
                        ...state,
                        inputValue: '',
                    })
            ) : (alert('please type to do'))


        default:
            return { ...state };
    }

}


export default reducer;