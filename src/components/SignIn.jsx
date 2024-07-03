import { getAuth,GoogleAuthProvider,signInWithPopup } from '../utils/firebase'

const SignIn = ()=>{

const auth = getAuth()
const provider = new GoogleAuthProvider()
  const signInWithGoogle=()=>{
    signInWithPopup(auth, provider)
      .then(res => {
        const credential = GoogleAuthProvider.credentialFromResult(res)
        const token = credential.accessToken
        const user = res.user
      }).catch(err => console.log(err))
  }
  return (
    <main className="SignIn">
      <button className="btn primary" onClick={signInWithGoogle}>Sign in</button>
    </main>
  )
}

export default SignIn