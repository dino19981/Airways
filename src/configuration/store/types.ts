import { AxiosError } from 'axios'

import { store } from './store'

export type InitialUserState = {
  userData: {
    id: string
    username: string
    role: {
      id: string
      unique_name: string
      description: string
    }
    description: string
  }
  userLoading: boolean
  userError: null | { message?: string }
}

export type RootStore = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
