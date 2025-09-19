// Utilities
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    isLoggedIn: false,
    user: {
      name:'',
      email:'',
    }
  }),
  getters: {
    isLogged: (state) => state.isLoggedIn,
    getUser: (state) => state.user
  },
  actions:{
    login(email, password){
      if(email === 'ivanpires@unemat.br' && password === '123456'){
        this.user.name = "Ivan Pires"
        this.user.email = email
        this.isLoggedIn = true
      }
    },
    logout() {
      this.user.name = ''
      this.user.email = ''
      this.isLoggedIn = false
    }
  }
})
