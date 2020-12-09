import React, { Component } from "react";
import List from './Components/List'
import './TodoList.css'
import Header from './Components/Header'
import Category from './Components/Category'
import { connect } from "react-redux";
import * as actions from "./store/actionCreator";
import { bindActionCreators } from "redux";

class TodoList extends Component {


  componentDidMount() {
    document.addEventListener("keydown", this.onKeyDown)
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.onKeyDown)
  }
  onKeyDown = (e) => {
    if (this.props.inputValue) {
      switch (e.keyCode) {
        case 13:
          this.props.actionControls.addTodo()
          break
      }
    }
  }

  render() {
    const { changeTypeText, } = this.props.actionControls;
    const { list, inputValue } = this.props;
    return (
      <>
        <List className='List' />
        {list.length === 0 ? (
          <>
            <Header />
            <input type="text" placeholder='come on !!!' value={inputValue} onChange={e => changeTypeText(e.target.value)} />
          </>
        ) : (
            <>
              <Category></Category>
              <input type="text" placeholder='come on !!!' value={inputValue} onChange={e => changeTypeText(e.target.value)} />
            </>
          )}
      </>
    );
  }
};

const mapStateToProps = (state) => ({
  inputValue: state.inputValue,
  list: state.list
});

const mapDispatchToProps = (dispatch) => ({
  actionControls: bindActionCreators({ ...actions }, dispatch)
});


export default connect(mapStateToProps, mapDispatchToProps)(TodoList);