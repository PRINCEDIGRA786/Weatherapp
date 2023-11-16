const toget=(state="",action)=>{
    if(action.type=="city"){
        state=action.payload;
    }

    return state;
}
export default toget;