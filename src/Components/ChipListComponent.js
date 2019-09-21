import React from "react";
import {
  addChipInList,
  RemoveChip,
  HighlightChip
} from "../Actions/ChipReducerAction";
import { connect } from "react-redux";
import {DebounceInput} from 'react-debounce-input';
import SelectedChip from "./SelectedChipList";
class ChipList extends React.Component {
  constructor() {
    super();
    this.inputRef = React.createRef();
  }
  shouldComponentUpdate(prev, next) {
    return prev !== next;
   
     }
  handleSelectName()
  {
    var that=this;
    let listedData=this.props.chipReducer.itemList.filter(function(data){
      return data.itemName==that.inputRef.current.state.value?data:false
    })
    if(listedData.length>0)
    {
that.props.addChipInList(listedData[0]);
document.getElementById("filterChip").value='';
that.inputRef.current.state.value="";
    }
  }
  keyHandler(e) {
    var that = this;
    if (e.keyCode == 8) 
    {
    this.keyActions(e);
  }
  }
  keyActions(e)
  {
    var that=this;
    var itemNm = that.props.chipReducer.selectedList.filter(function(data) {
      return data.highlight == true ? data : null;
    });
    if(e.target.value=="" && that.props.chipReducer.selectedList.length>0&&itemNm.length>0)
    {
      that.props.removeChipFromList(itemNm[0].itemName);
    }
    else if(e.target.value=="" && that.props.chipReducer.selectedList.length>0)
    {
      that.props.HighlightItem();
    }
  }
  render() {
    var that = this;
    
    return (
      <div className="Main">
      <h1 className="txtHeader">Add chips assignment</h1>
      <section className="chipDashboard">
      <div className="selectedOne">{that.props.chipReducer.selectedList.length > 0 ? <SelectedChip/>:null}</div>
        <div className="filter"><DebounceInput
          list="chips" name="chips"
          minLength={2}
          ref={this.inputRef}
          id="filterChip"
          className="chipInput"
          onKeyDown={that.keyHandler.bind(this)}
          debounceTimeout={300}
          onChange={()=>that.handleSelectName(this)} />
         <datalist id="chips" >
           {that.props.chipReducer.itemList.map(function(data,key){
  return(
    <option value={data.itemName} key={key}>
       {data.itemEmailId}
    </option>
    
  )
  
})}
</datalist>
</div>
      </section>
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
    addChipInList: value => {
      dispatch(addChipInList(value));
    },
    removeChipFromList: value => {
      dispatch(RemoveChip(value));
    },
    HighlightItem: value => {
      dispatch(HighlightChip());
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChipList);
