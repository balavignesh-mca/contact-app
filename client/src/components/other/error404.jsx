export const  ErrorPage = () =>{
  let token = localStorage.getItem('token')
    return (
      <section className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
        <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
          <svg
            className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
            viewBox="0 0 100 100"
            fill="currentColor"
            preserveAspectRatio="none slice"
          >
            <path d="M50 0H100L50 100H0L50 0Z" />
          </svg>
          <img
            className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
            src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
            alt=""
          />
        </div>
        <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
          <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
            <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              404
              <br className="hidden md:block" />
              <span className="inline-block text-black">Look like you're lost</span>
            </h2>
            <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg">
              The page you are looking for is not available!
            </p>
            <div className="flex items-center">
              {token !== null && token !== undefined ? (
                <button
                  className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-black hover:bg-gray-800 focus:shadow-outline focus:outline-none"
                  onClick={() => {
                    window.location.href = "/welcome";
                  }}
                >
                  Go to welcome
                </button>
              ) : (
                <button
                  className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-black hover:bg-gray-800 focus:shadow-outline focus:outline-none"
                  onClick={() => {
                    window.location.href = "/";
                  }}
                >
                  Go to Login
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
    );
}