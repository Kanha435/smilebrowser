export const initialState = {
    val :null,
};
export const actionType = {
    Set_Search_Value : "Set_Search_Value"
};

const reducer = (state,action)=>{
    console.log(action);
    console.log("state : ",state.val);
    switch (action.type) {
        case actionType.Set_Search_Value:
            return{
                ...state,
                val : action.val,
            }    
        default:
            return state;
    }
}
export default reducer;