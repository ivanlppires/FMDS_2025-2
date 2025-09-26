import { defineStore } from 'pinia'
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut  } from 'firebase/auth'
import router from '@/router'

const auth = getAuth()
const provider = new GoogleAuthProvider()

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
  }),
  getters: {
    isAuthenticated: (state) => !!state.user,
  },
    actions: {
    async signIn() {
      try {
        const result = await signInWithPopup(auth, provider)
        this.user = result.user
        console.log(this.user)
        router.push('/dashboard')
      } catch (error) {
        console.error('Error during sign-in:', error)
      }
    },
    async signOut() {
      try {
        await signOut(auth)
        this.user = null
        router.push('/login')
      } catch (error) {
        console.error('Error during sign-out:', error)
      }
    },
  },
})
