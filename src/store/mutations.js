import {
    CHANGE_FIRST,
    CHANGE_LAST
} from './mutation-types.js'

export default {
    [CHANGE_FIRST](state,{num=2}){
        state.first=state.first+num;
    },
    [CHANGE_LAST](state,{num=3}){
        state.last=state.last+num;
    },
}