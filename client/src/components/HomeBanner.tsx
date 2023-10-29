function HomeBanner() {
  return (
    <div className="h-screen w-screen relative">
      <img
        className="w-full h-full"
        src="https://www.flixfilm.dk/wp-content/uploads/2022/04/netflix-reklamer.jpg"
        alt=""
      />
      <div className="absolute w-full h-full bg-black bg-opacity-40 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center">
        <div className="text-center">
          <h1 className="text-white font-bold text-5xl">
            Unlimited movies, TV shows and more
          </h1>
          <p className="text-white text-3xl mt-3">
            Whatch anywhere, cancel anytime
          </p>
          <div className="mt-8">
            <a
              href="/login"
              className="bg-red-700 text-white p-4 px-16 text-lg rounded font-semibold"
            >
              Sign up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeBanner;
