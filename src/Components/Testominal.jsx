import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
const Testominal = () => {
  return (
    <div>
      <section className="my-8 bg-gray-100 text-gray-800">
        <div className="container flex flex-col items-center mx-auto mb-12 md:p-10 md:px-12">
          <h1 className="p-4 text-4xl font-semibold leading-none text-center">
            What our customers are saying about us
          </h1>
        </div>
        <div className="container flex flex-col items-center justify-center mx-auto lg:flex-row lg:flex-wrap lg:justify-evenly lg:px-10">
          <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
            <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 bg-gray-50">
              <p className="relative px-6 py-1 text-lg italic text-center text-gray-800">
                <FaQuoteLeft className="w-8 h-8 text-green-500" />
                “Absolutely wonderful! Just the right amount of time spent
                snorkeling and one of the most beautiful beaches I have ever
                seen. Customer service was professional. Highly recommend.”
                <FaQuoteRight className="absolute right-0 w-8 h-8 text-green-500" />
              </p>
            </div>
            <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-green-500 text-gray-50">
              <img
                src="https://source.unsplash.com/50x50/?portrait?1"
                alt=""
                className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full bg-gray-500 "
              />
              <p className="text-xl font-semibold leading-tight">
                Distinctio Animi
              </p>
              <p className="text-sm uppercase">Aliquam illum</p>
            </div>
          </div>
          <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
            <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 bg-gray-50">
              <p className="relative px-6 py-1 text-lg italic text-center text-gray-800">
                <FaQuoteLeft className="w-8 h-8 text-green-500" />
                “Customer service was professional. Highly recommend. Absolutely
                wonderful! Just the right amount of time spent snorkeling and
                one of the most beautiful beaches I have ever seen.”
                <FaQuoteRight className="absolute right-0 w-8 h-8 text-green-500" />
              </p>
            </div>
            <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-green-500 text-gray-50">
              <img
                src="https://source.unsplash.com/50x50/?portrait?2"
                alt=""
                className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full bg-gray-500 "
              />
              <p className="text-xl font-semibold leading-tight">
                Distinctio Animi
              </p>
              <p className="text-sm uppercase">Aliquam illum</p>
            </div>
          </div>
          <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
            <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 bg-gray-50">
              <p className="relative px-6 py-1 text-lg italic text-center text-gray-800">
                <FaQuoteLeft className="w-8 h-8 text-green-500" />
                “Absolutely wonderful! Just the right amount of time spent
                snorkeling and one of the most beautiful beaches I have ever
                seen. Customer service was professional. Highly recommend.”
                <FaQuoteRight className="absolute right-0 w-8 h-8 text-green-500" />
              </p>
            </div>
            <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-green-500 text-gray-50">
              <img
                src="https://source.unsplash.com/50x50/?portrait?3"
                alt=""
                className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full bg-gray-500"
              />
              <p className="text-xl font-semibold leading-tight">
                Distinctio Animi
              </p>
              <p className="text-sm uppercase">Aliquam illum</p>
            </div>
          </div>
          <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
            <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 bg-gray-50">
              <p className="relative px-6 py-1 text-lg italic text-center text-gray-800">
                <FaQuoteLeft className="w-8 h-8 text-green-500" />
                “Customer service was professional. Highly recommend. Absolutely
                wonderful! Just the right amount of time spent snorkeling and
                one of the most beautiful beaches I have ever seen.”
                <FaQuoteRight className="absolute right-0 w-8 h-8 text-green-500" />
              </p>
            </div>
            <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-green-500 text-gray-50">
              <img
                src="https://source.unsplash.com/50x50/?portrait?4"
                alt=""
                className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full bg-gray-500"
              />
              <p className="text-xl font-semibold leading-tight">
                Distinctio Animi
              </p>
              <p className="text-sm uppercase">Aliquam illum</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testominal;
