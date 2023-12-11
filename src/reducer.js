const reducer = (state, action)=>{
    switch(action.type){
      case "LIKE":
        return{
          ...state,
          obj: [...state.obj.map((elm,index)=>{
            if(elm.cardId == action.payload){
              return {...elm, liked:!elm.liked}
            }
            return elm
          })]
        };
        case "BOOK":
        return{
          ...state,
          obj: [...state.obj.map((elm,index)=>{
            if(elm.cardId == action.payload){
              return {...elm, bookmarked:!elm.bookmarked}
            }
            return elm
          })]
        }
        case "ADD_CARDS":
        return{
          ...state,
          obj: [...state.obj, action.payload]
        };
        case "ADD_DESCRIPTION":
          return{
            ...state,
            obj:[...state.obj.map((elm, index)=>{
              if(elm.cardId == action.payload.cardId){
                return {...elm, desc: [...elm.desc,action.payload.comment]};
              }
              return elm
            })]
          }
          case "DELETE_POST":
            return{
              ...state,
              obj: [...state.obj.filter((elm,index)=>
                elm.cardId != action.payload)]
            }
  
    }
  }
export default reducer;