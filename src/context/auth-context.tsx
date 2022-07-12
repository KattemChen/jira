import React from 'react'
import { useState } from 'react'
import * as auth from '../auth-provider'
import { User } from '../screens/project-list/search-panel'

interface AuthForm {
  username: string
  password: string
}

const AuthContext = React.createContext(undefined)

AuthContext.displayName = 'AuthContext'

export const AuthProvider = () => {
  const [user, setUser] = useState<User | null>(null)

  const login = (form: AuthForm) => {
    auth.login(form).then((user: User) => {
      setUser(user)
    })
  }
}
