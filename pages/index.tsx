import { Navbar } from '@/components/Layout/Navbar';


const HomePage: React.FC = () => {

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <section className="items-center relative w-full border-black flex border-b-2">
          <div className="items-center relative w-full mx-auto 2xl:max-w-7xl">
            <div className="grid grid-cols-1 divide-black divide-y-2 2xl:border-x-2 border-black md:divide-x-2 md:divide-y-0 lg:grid-cols-2">


              <div className="items-center relative gap-12 h-full p-8 lg:inline-flex lg:px-20 bg-white">
                  <div className="max-w-xl mx-auto lg:text-left md:text-center text-left
                    border-2 border-black bg-brand-tertiary rounded-xl px-5 py-5 shadow-[-5px_5px_black]">
                    <div>
                      <h1 className="text-black font-display text-5xl">
                        Endless pages of zoning regulations?
                      </h1>
                      <h2 className="text-black tracking-tight xl:text-2xl max-w-xl mt-5">
                        Ask our AI about your local zoning ordinances and based on the documents, you'll get back:
                      </h2>
                      <ol className="max-w-xl gap-6 grid grid-cols-1 lg:gap-12 lg:grid-cols-3
                        lg:text-center list-none mt-5 sm:grid-cols-2">
                        <li>
                          <h3 className="text-black tracking-tight xl:text-xl bg-white">
                            Accurate answer
                          </h3>
                        </li>
                        <li>
                          <h3 className="text-black tracking-tight xl:text-xl bg-white">
                            Page number
                          </h3>
                        </li>
                        <li>
                          <h3 className="text-black tracking-tight xl:text-xl bg-white">
                            PDF
                          </h3>
                        </li>
                      </ol>
                      <h2 className="text-black tracking-tight xl:text-2xl max-w-xl mt-4">
                        Register for the waitlist to get a free first shot.
                      </h2>
                    </div>
                    <div className="flex flex-col gap-3 sm:flex-row mt-5 justify-end lg:mr-10">
                      <a className="text-black items-center inline-flex bg-white
                        border-2 border-black duration-200 ease-in-out focus:outline-none
                        hover:bg-black hover:shadow-none hover:text-white justify-center
                        rounded-xl shadow-[-5px_5px_black] text-center transform transition
                        w-full lg:w-auto px-6 py-3">
                      Register
                        <span className="ml-3">-></span>
                      </a>
                    </div>
                  </div>
              </div>

              <div className="w-full h-full aspect-square lg:mt-0 bg-lila-500 block">
                <img alt="#" class="object-cover" src="/testImage2.png" />
              </div>


            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;
