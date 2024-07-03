import { useState, useEffect } from 'react'
import { getAuth, onAuthStateChanged } from '../utils/firebase'

const useAuth = (
) => {
  const [user, setUser] = useState(null)
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

  return () => unsubscribe()
  }, [])

  return user
}

export default useAuth
