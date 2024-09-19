import { SignIn } from '@clerk/nextjs'

const SignInPage = () => {
  return (
    <main className='flex-center items-center h-screen'>
        <SignIn />
    </main>
  )
}

export default SignInPage