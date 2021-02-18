
export const state = () => ({
    dialog:{
        isShow: false,
        title: '',
        message: ''
    },
    line: {
        pictureUrl: '',
        displayName: '',
        userId: '',
        //email: ''
    },
    register: {
        firstname: '',
        lastname: '',
        email:'',
        gender: '',
        phone:'',
        birthday: new Date().toISOString().substr(0, 10),
        company:'',
        position:''
    },
    data: {  
        workshop: [
          {
            date: "20 March 2020",
            sessions: [
              {
                id: 1,
                title: "Passive Selling Online Amazon",
                spaker: "Mr. Tang Pavint 1",
                image: "https://t.kfs.io/upload_images/104088/PPT_Cover_large_large.png",
                content:
                  "Passive Selling Online Passive Selling OnlinePassive Selling OnlinePassive Selling Online",
                time: "Time : 13: 30 - 16: 30",
                toppic: "Detail for Workshop 1"
              },
              {
                id: 2,
                title: "Passive Selling Online Facbook",
                spaker: "Mr. Tang Pavint 2 ",
                image: "https://t.kfs.io/upload_images/104088/PPT_Cover_large_large.png",
                content:
                  "Passive Selling Online Passive Selling OnlinePassive Selling OnlinePassive Selling Online",
                time: "Time : 13: 30 - 16: 30",
                toppic: "Detail for Workshop 2"
              },
              {
                id: 3,
                title: "Passive Selling Online Shoppee",
                spaker: "Mr. Tang Pavint 3",
                image: "https://t.kfs.io/upload_images/104088/PPT_Cover_large_large.png",
                content:
                  "Passive Selling Online Passive Selling OnlinePassive Selling OnlinePassive Selling Online",
                time: "Time : 13: 30 - 16: 30",
                toppic: "Detail for Workshop 3"
              }
            ]
          },
          {
            date: "21 March 2020",
            sessions: [
              {
                id: 4,
                title: "Passive Selling Online Fastbook",
                spaker: "Mr. Tang Pavint",
                image: "https://t.kfs.io/upload_images/104088/PPT_Cover_large_large.png",
                content:
                  "Passive Selling Online Passive Selling OnlinePassive Selling OnlinePassive Selling Online",
                time: "Time : 1: 30 PM - 4: 30 PM",
                toppic: "Detail for Workshop 4"
              },
              {
                id: 5,
                title: "Passive Selling Online Add Facebook",
                spaker: "Mr. Tang Pavint",
                image: "https://t.kfs.io/upload_images/104088/PPT_Cover_large_large.png",
                content:
                  "Passive Selling Online Passive Selling OnlinePassive Selling OnlinePassive Selling Online",
                time: "Time : 1: 30 PM - 4: 30 PM",
                toppic: "Detail for Workshop 5"
              },
              {
                id: 6,
                title: "Passive Selling Online Line Developer",
                spaker: "Mr. Tang Pavint",
                image: "https://t.kfs.io/upload_images/104088/PPT_Cover_large_large.png",
                content:
                  "Passive Selling Online Passive Selling OnlinePassive Selling OnlinePassive Selling Online",
                time: "Time : 1: 30 PM - 4: 30 PM",
                toppic: "Detail for Workshop 5"
              }
            ]
          }
        ]
      }
})
export const getters = {
    getRegister(state){
        return state.register
    },
    getDialog(state){
        return state.dialog
    },
    getLine(state){
        return state.line
    },
    getWorkshop(state){
        return state.data.workshop 
    }
}

export const mutations = {
    SET_REGISTER(state, data){
        state.register = {
            ...state.register,
            ...data
        }
    },
    SET_DIALOG(state, data){
        state.dialog = {
            ...state.dialog,
            ...data
        }
    },
    SET_LINE(state, data){
        state.line = {
            ...state.line,
            ...data
        }
    }
}

export const actions = {
    setRegister({ commit}, data){
        commit('SET_REGISTER', data)
    },
    setDialog({ commit}, data){
        commit('SET_DIALOG', data)
    },
    setLine({ commit}, data){
        commit('SET_LINE', data)
    }
}

