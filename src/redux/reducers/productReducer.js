import axios from 'axios';
import produce from 'immer';

const TOGGLE_ACTUAL_ID = 'TOGGLE_ACTUAL_ID';
const TOGGLE_ACTUAL = 'TOGGLE_ACTUAL';

let intialize = {
  actualItem: 2,
};
const productReducer = (state = intialize, action) => {
  switch (action.type) {
    case TOGGLE_ACTUAL_ID:
      return { ...state, actualItem: action.data };

    case TOGGLE_ACTUAL:
      return produce(state, (draft) => {
        draft.actualItem.heart = !draft.actualItem.heart;
      });
    default:
      return state;
  }
};

export const toggleId = (data) => ({ type: TOGGLE_ACTUAL_ID, data });
export const fetchActualHeart = () => ({ type: TOGGLE_ACTUAL });


export const postTell = (data) => (dispatch) =>{
  
    axios.post('https://6257e3c10c918296a48cf691.mockapi.io/qwe',{ data:data })
}




export default productReducer;
