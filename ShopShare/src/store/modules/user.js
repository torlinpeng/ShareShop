
const state = {
    user:[{
        username: '18779190760',
        password: '123456'
    },{
        username: 'aaaaaa',
        password: 'aaaaaa'
    },{
        username: 'bbbbbb',
        password: 'bbbbbb'
    },{
        username: 'cccccc',
        password: 'cccccc'
    }],
    seccLogin: 0
};


const actions = {
    login ({commit},user) {
        commit('LOGIN',user)
    }
};

const mutations = {
    LOGIN(state,res){

        state.user.forEach(function(eee) {
            if(eee.username === res.username){
                if(eee.password === res.password){
                    state.seccLogin = 1
                }
            }
        }, this);
    }
}

export default {
    state,
    actions,
    mutations
}
