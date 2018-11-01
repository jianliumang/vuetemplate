import {
    CHANGE_FIRST,
    CHANGE_LAST
} from './mutation-types.js'

export default {
    
    async setfirst({state,commit}){
        function setnum(){
            return {num:4}
        };
        let res = await setnum();
        commit(CHANGE_FIRST,res)
    },
    async setlast({state,commit}){
        function setnum(){
            return {num:5}
        };
        let res = await setnum();
        commit(CHANGE_LAST,res)
    }
}