import React from 'react'
import { getUsersByEmailAndPassword } from '../Services/UserService'

const AuthContext = React.createContext();
export const useAuth = () => React.useContext(AuthContext)

export function AuthProvider({ children }) {
  const [user, setUser] = React.useState(null)
  const [isAuthenticated, setIsAuthenticated] = React.useState(false)

  React.useEffect(() => {
    const storedUser = localStorage.getItem('authUser')
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser)
      setUser(parsedUser)
      setIsAuthenticated(true)
    }
  }, [])

function login(email, password) {
    return getUsersByEmailAndPassword(email, password)
    .then((users) => {
        if (users.length === 0) {
            throw new Error('Invalid email or password')
        }
        const authenticatedUser = users[0]
        setUser(authenticatedUser)
        setIsAuthenticated(true)
        localStorage.setItem('authUser', JSON.stringify(authenticatedUser))
    })
    .catch((error) => {
        console.error('Login error:', error)
        throw new Error("Invalid email or password")
    })
  }

  function logout() {
    setUser(null)
    setIsAuthenticated(false)
    localStorage.removeItem('authUser')
  }

  const value = {
    user,
    isAuthenticated,
    login,
    logout,
  }

   return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

