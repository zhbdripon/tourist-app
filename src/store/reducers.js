import * as actionTypes from './actions';

const initialState = {
    spots : [
        {
            id : 1,
            name: 'Lalbagh Fort',
            address: 'Lalbagh',
            rating: '2',
            picture: "http://picsum.photos/200/201"
          },
          {
            id : 2,
            name: 'Sera Dip',
            address: 'St. Martain',
            rating: '4',
            picture: "http://picsum.photos/201/200"
          }
    ],
    spotTypes : [
        'Beach',
        'Hills',
        'Fourtain',
        'Landmark'
      ]
}

const updateObject = (oldObject,updatedProperties) =>{
    return {
        ...oldObject,
        ...updatedProperties
    }
}

const handleSpotDelete = (state,action) => {
    const newSpotsList = state.spots.filter(item=> item.id!==action.id);
    return updateObject(state,{spots:newSpotsList});
}

const handleSpotAddUpdate = (state,action) =>{
  const data = action.data;
  const newSpotsList = state.spots.filter(spot=> Number(spot.id)!==Number(data.id));
  if(!data['id']) data['id'] = Date.now();
  newSpotsList.push(data);
  return updateObject(state,{spots:newSpotsList});
}

const reducer = (state=initialState,action) => {
    switch(action.type){
        case actionTypes.DELETE_SPOT:   return handleSpotDelete(state,action);
        case actionTypes.ADD_UPDATE_SPOT:   return handleSpotAddUpdate(state,action);
        default: return state;
    }
}

export default reducer;