import React from "react";
import {RemoveChip } from "../Actions/ChipReducerAction";
import { connect } from "react-redux";
class SelectedChip extends React.Component {
  constructor() {
    super();
  }
  shouldComponentUpdate(prev, next) {
    return prev !== next;
  }
  deselectChip(itemName)
  {
    var that=this;
    that.props.RemoveItem(itemName);
  }
  render() {
    var that = this;
    return (
      <div className="selectedChip">
            {that.props.chipReducer.selectedList.map(function(data, key) {
              if (data.itemName != "") {
                return (
                  <div className={data.highlight ?"userList floatleft highlightChip":"userList floatleft"}>
                  <span key={key} className={"pddnglft15"}>
                    {data.itemName}
                  </span>
                  <span className="floatright pddngt2r8 pointer" onClick={()=>that.deselectChip(data.itemName)}>X</span>
                 </div>
                );
              }
            })}
          </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    chipReducer: state.ChipItemReducer
  };
};
const mapDispatchToProps = dispatch => {
  return {
    RemoveItem: value => {
      dispatch(RemoveChip(value));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectedChip);
