import { Navbar } from '@/components/Layout/Navbar';
import { Footer } from '@/components/Layout/Footer';
import Link from 'next/link';
import React from "react";
import Head from "next/head";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/CheckoutForm";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe(`${process.env.NEXT_STRIPE_PUBLISHABLE_KEY_TEST}`);

const HomePage: React.FC = () => {
  const [clientSecret, setClientSecret] = React.useState("");

  React.useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("/api/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));

    console.log(clientSecret)
  }, []);

  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <>
      <Head>
        <title>My Zoning AI</title>
        <meta
          name="description"
          content="Home page for a chatbot to extract zoning information for the selected locality."
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link
          rel="icon"
          href="/myzaiFavicon2.png"
        />
      </Head>
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
                        Where zoning meets AI
                      </h1>
                      <h2 className="text-black font-light
                        px-3
                        mt-5 lg:mt-10
                        text-xl lg:text-2xl
                        text-center lg:text-start
                        ">
                        With My Zoning AI, you can just select a locality and ask a question about its zoning laws to get an answer. Give it a try, it's that easy.
                      </h2>
                    </div>
                    <div className="flex gap-3 mt-10
                    flex-col sm:flex-row
                    justify-center lg:justify-start
                    ">
                      <Link
                        href="/login"
                        className="inline-flex
                          text-black hover:text-white
                          bg-white hover:bg-black
                          border-2 border-black
                          shadow-nb-assistant hover:shadow-none

                          duration-200 ease-in-out focus:outline-none
                          rounded text-center transform transition
                          w-auto
                          px-20 py-4
                          text-xl lg:text-2xl
                          ml-3 mr-3
                          justify-center
                          font-light
                      ">
                        Try for free
                      </Link>
                    </div>
                  </div>
              </div>

              <div className="w-full h-full aspect-square lg:mt-0 bg-white block">
                <img alt="#" className="object-cover" src="/myzaiDemo3.gif" />
              </div>


            </div>
          </div>
        </section>
        <section className="items-center relative w-full flex bg-brand-secondary">
          <div className="items-center relative w-full mx-auto 2xl:max-w-7xl h-full">
            <div className="grid grid-rows-1 divide-black divide-y-2 2xl:border-x-2 border-black ">
              <div className="flex flex-col items-center">
                <h1 className="
                  text-black
                  mt-14 mb-5
                  lg:ml-10 lg:mr-10
                  px-5 lg:px-20
                  py-8
                  text-center
                  text-5xl
                  bg-white
                  rounded border-2 border-black
                  shadow-[-5px_5px_0_black]
                  w-10/12 sm:w-9/12
                ">
                  Enjoy more time doing your thing, less time digging through archives.
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
                        src="/myzaiSampleSelectLocation.png"
                        className="object-cover m-4 md:w-3/4
                          border-2 border-black rounded shadow-[-5px_5px_0_black]"
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
                        src="/myzaiSampleChat.png"
                        className="object-cover m-4 md:w-3/4
                          border-2 border-black rounded shadow-[-5px_5px_0_black]"
                        />
                    </li>
                  </ol>
                </div>
              </div>
              <div className="w-full bg-white">
                <div className="flex flex-col items-center">
                  <h1 className="
                    text-black
                    mt-10
                    lg:ml-10 lg:mr-10
                    sm:px-5 lg:px-20
                    py-8
                    text-center
                    text-5xl lg:text-7xl
                    w-10/12 sm:w-9/12
                  ">
                    Uncomplicate Your Process
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
                    Whether you're looking for faster access, efficient research, or just a simpler approach to zoning laws, our app streamlines your projects. You don't have to be a legal expert or understand the intricacies of zoning regulations. You just need to leverage your expertise and let our app handle the rest.
                  </h2>
                  <div className="w-10/12 md:w-1/2">
                    <div className="
                    w-full grid
                    grid-cols-2
                    text-center
                    mb-8
                    ">
                      <div className="flex flex-col items-center lg:ml-36">
                        <Link
                        href="/login"
                        className="inline-flex
                          text-black hover:text-white
                          bg-brand-tertiary hover:bg-black
                          border-2 border-black hover:border-black
                          shadow-nb-assistant hover:shadow-none

                          duration-200 ease-in-out focus:outline-none
                          rounded text-center transform transition
                          w-auto
                          px-5 py-2
                          text-xl lg:text-2xl
                          justify-center
                          font-light
                        ">
                            Try Free
                        </Link>
                      </div>
                      <div className="flex flex-col items-center lg:mr-36">
                        <Link
                        href="mailto: chris.chen347@gmail.com"
                        className="inline-flex
                          text-black hover:text-white
                          bg-white hover:bg-black
                          border-2 border-black hover:border-black
                          shadow-nb-user hover:shadow-none

                          duration-200 ease-in-out focus:outline-none
                          rounded text-center transform transition
                          w-auto
                          px-5 py-2
                          text-xl lg:text-2xl
                          justify-center
                          font-light
                        ">
                            Contact us
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
