import { signIn } from 'next-auth/client'

const Login = () => {
  return (
    <div>
      <button onClick={() => signIn('google')}>Google Login</button>
      <button onClick={() => signIn('facebook')}>Facebook Login</button>
    </div>
  )
}

export default Login
