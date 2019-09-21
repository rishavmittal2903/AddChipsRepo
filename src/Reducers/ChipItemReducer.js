const initialState = {
  flag: false,
  inputValue: "",
  selectedList: [],
  itemList: [
    { itemName: "User1",itemEmailId:"user1@gmail.com",highlight: false },
    { itemName: "User2",itemEmailId:"user2@gmail.com",highlight: false },
    { itemName: "User3",itemEmailId:"user3@gmail.com",highlight: false },
    { itemName: "User4",itemEmailId:"user4@gmail.com",highlight: false },
    { itemName: "User5",itemEmailId:"user5@gmail.com",highlight: false },
    { itemName: "User6",itemEmailId:"user6@gmail.com",highlight: false },
    { itemName: "User7",itemEmailId:"user7@gmail.com",highlight: false },
    { itemName: "User8",itemEmailId:"user8@gmail.com",highlight: false },
    { itemName: "User9",itemEmailId:"user9@gmail.com",highlight: false },
	  { itemName: "User10",itemEmailId:"user10@gmail.com",highlight: false }
  ]
};
const ChipItemReducer = (state = initialState, action) => {

  switch (action.type) {
    case "addChipInList": {
       /*If you press backspace one time and again tries to add chip 
      then last chip will consider for delete thats way while adding
     chips making all highlight value false*/
      for (let i = 0; i < state.selectedList.length; i++) {
        if (state.selectedList[i].highlight == true) {
          state.selectedList[i].highlight = false;
          break;
        }
      }
      /*Removing from itemlist which ever selected*/
      var data = {};
      data.itemList = [];
      for (let i = 0; i < state.itemList.length; i++) {
        if (state.itemList[i].itemName == action.payload.itemName) {
          state.itemList.splice(i, 1);
          break;
        }
      }
      /*adding chips in selectedList*/
      state = {
        ...state,
        selectedList: [
          ...state.selectedList,
          { itemName: action.payload.itemName,itemEmailId:action.payload.itemEmailId, highlight: false }
        ]
      };
      break;
    }
    case "RemoveChip": {
      var data = {};

      for (let i = 0; i < state.selectedList.length; i++) {
        if (state.selectedList[i].itemName == action.payload) {
          state.selectedList[i].highlight = false;
          state.itemList.push(state.selectedList[i]);
          state.selectedList.splice(i, 1);
          break;
        }
      }
      state = {
        ...state
      };
      break;
    }
    case "HighLightChip": {
      state.selectedList[state.selectedList.length - 1].highlight = true;
      state = {
        ...state
      };
      break;
    }
  }
  return state;
};

export default ChipItemReducer;
