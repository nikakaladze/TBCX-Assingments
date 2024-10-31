import next from 'next';


export const Contact = () => {
  return (
    <>
      <div class="flex justify-center items-center min-h-screen bg-[rgb(1,82,148)] bg-no-repeat">
        <div class="w-[420px] bg-transparent text-white rounded-lg p-8">
          <h2 class="text-center text-3xl">Registration Form</h2>

          <div class="input-box w-full h-[50px] bg-inherit my-7">
            <input type="text" placeholder="Enter text" class="w-full h-full bg-transparent border-none outline-none border-2 border-white/20 rounded-full text-white px-5 py-2.5 pr-12 placeholder-white" />
          </div>

          <div class="remember-forgot flex justify-between text-sm my-3">
            <label class="flex items-center">
              <input type="checkbox" class="accent-white mr-1" />
              Remember me
            </label>
            <a href="#" class="text-white">Forgot password?</a>
          </div>

          <button class="btn w-full h-[45px] bg-white border-none outline-none rounded-full cursor-pointer text-black">
            Submit
          </button>

          <div class="register-link text-center text-sm mt-5">
            Don't have an account? <a href="#" class="text-white underline">Register</a>
          </div>
        </div>
      </div>

    </>
  )
}
export default Contact;

