export default function(state=null,action){
    console.log("enterd into reducers");
   
    switch(action.type){
        case 'ACTIVE_TRAINER':
        console.log(action.type);
                return state=action.data;
    }
    return state;
}