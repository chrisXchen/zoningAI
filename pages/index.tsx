import { Navbar } from '@/components/Layout/Navbar';


const HomePage: React.FC = () => {

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <section className="items-center relative w-full border-black flex border-b-2">
          <div className="items-center relative w-full mx-auto 2xl:max-w-7xl">
            <div className="grid grid-cols-1 divide-black divide-y-2 2xl:border-x-2 border-black md:divide-x-2 lg:divide-y-0 lg:grid-cols-2">


              <div className="items-center relative gap-12 h-full p-2 sm:inline-flex sm:px-20 bg-brand-tertiary">
                  <div className="max-w-xl mx-auto lg:text-left md:text-center text-end
                     rounded-xl py-5">
                    <div>
                      <h1 className="text-black font-display
                        px-4 font-bold
                        mt-5
                        text-6xl lg:text-7xl
                        text-center lg:text-start
                        ">
                        An architect's zoning masterpiece.
                      </h1>
                      <h2 className="text-black font-light
                        px-3
                        mt-5 lg:mt-10
                        text-xl lg:text-2xl
                        text-center lg:text-start
                        ">
                        With Zoning AI, you can just select a locality and ask a question about its zoning laws to get an answer. Give it a try, it's that easy.
                      </h2>
                    </div>
                    <div className="flex gap-3 mt-10
                    flex-col sm:flex-row
                    justify-center lg:justify-start
                    ">
                      <a
                        href="/login"
                        className="text-white inline-flex bg-black
                          border-2 border-black duration-200 ease-in-out focus:outline-none
                          hover:bg-white hover:shadow-none hover:text-black
                          rounded text-center transform transition
                          w-auto
                          px-20 py-4
                          text-xl lg:text-2xl
                          ml-3 mr-3
                          justify-center
                          font-light
                          ">
                            Start saving time
                      </a>
                    </div>
                  </div>
              </div>

              <div className="w-full h-full aspect-square lg:mt-0 bg-lila-500 block">
                <img alt="#" className="object-cover" src="/testImage2.png" />
              </div>


            </div>
          </div>
        </section>
        <section className="items-center relative w-full border-black flex border-b-2 bg-brand-tertiary">
          <div className="items-center relative w-full mx-auto 2xl:max-w-7xl h-full">
            <div className="grid grid-rows-1 divide-black divide-y-2 2xl:border-x-2 border-black ">
              <div>
                <h1 className="
                  text-black
                  mt-14 mb-5 ml-10 mr-10
                  px-5 lg:px-20
                  py-8
                  text-center
                  text-5xl
                  bg-white
                  rounded border-2 border-black
                  shadow-nb-assistant
                  whitespace-pre-line
                ">
                  Enjoy more time designing, less time digging through archives.
                </h1>
                <div className="px-12 lg:px-32">
                  <ol className="
                    w-full grid
                    gap-6
                    grid-cols-1
                    text-center
                    list-none
                    py-10
                    mb-8
                    ">
                    <li className="flex flex-col items-center m-4">
                      <h3 className="text-black font-bold
                        text-3xl lg:text-5xl
                        ">
                        <span className="text-black font-bold
                          text-5xl sm:text-6xl lg:text-8xl
                          ">
                          1. </span>
                      Select your city.
                      </h3>
                      <img
                        alt="#"
                        src="/tmpSelectCity.png"
                        className="object-cover m-4 md:w-3/4 border-2 border-black rounded shadow-nb-assistant"
                      />
                    </li>
                    <li className="flex flex-col items-center mt-4 mx-4">
                      <h3 className="text-black font-bold
                        text-3xl lg:text-5xl
                        ">
                        <span className="text-black font-bold
                          text-5xl sm:text-6xl lg:text-8xl
                          ">
                          2. </span>
                      Ask away!
                      </h3>
                      <img
                        alt="#"
                        src="/testImage2.png"
                        className="object-cover m-4 md:w-3/4 border-2 border-black rounded shadow-nb-assistant"
                        />
                    </li>
                  </ol>
                </div>
              </div>
              <div className="w-full bg-white">
                <div className="flex flex-col items-center m-4">
                  <h1 className="
                    text-black
                    mt-10 ml-10 mr-10
                    px-5 lg:px-20
                    py-8
                    text-center
                    text-5xl lg:text-7xl
                    w-8/12
                  ">
                    Uncomplicate Your Design Proces
                  </h1>
                  <h2 className="
                    text-black
                    mb-5 ml-10 mr-10
                    px-5 lg:px-20
                    py-4
                    text-center
                    text-xl lg:text-2xl
                    w-8/12
                    font-light
                  ">
                    Whether you require faster access, efficient research, or just a simpler approach to zoning laws, our app streamlines your architectural projects. You don't have to be a legal expert or understand the intricacies of zoning regulations. You just need to leverage your expertise and let our app handle the rest.
                  </h2>
                  <div className="w-10/12 md:w-1/2">
                    <div className="
                    w-full grid
                    grid-cols-2
                    text-center
                    mb-8
                    ">
                      <div className="flex flex-col items-center lg:ml-36">
                        <a
                        href="/login"
                        className="text-white inline-flex bg-black
                          border-2 border-black duration-200 ease-in-out focus:outline-none
                          hover:bg-brand-tertiary hover:border-brand-tertiary hover:text-black
                          rounded text-center transform transition
                          w-auto
                          px-5 py-2
                          text-l lg:text-xl
                          justify-center
                          font-light
                        ">
                            Give us a try
                        </a>
                      </div>
                      <div className="flex flex-col items-center lg:mr-36">
                        <a
                        href="/login"
                        className="text-black inline-flex bg-white
                          border-2 rounded border-brand-tertiary
                          duration-200 ease-in-out focus:outline-none
                          hover:bg-white hover:border-black hover:text-black
                          rounded text-center transform transition
                          w-auto
                          px-5 py-2
                          text-l lg:text-xl
                          justify-center
                          font-light
                        ">
                            Contact us
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;
