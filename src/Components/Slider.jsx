import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

// import { Typewriter } from 'react-simple-typewriter'
const Slider = () => {
  return (
    <div className="relative">
      <div className="carousel mt-1 w-full ">
        <div id="slide1" className="carousel-item relative w-full">
          {/* Hero Section in slider */}
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage: "url(https://i.pinimg.com/736x/f5/1c/cf/f51ccfc2067f689150fb62512fd1b5a6.jpg)",
              backgroundPosition: "bottom center",
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              {/* i cut text from here  */}
            </div>
          </div>
          {/* Hero Section in slider */}

          <div className="absolute flex justify-between transform -translate-y-1/2 left-10 right-10 bottom-3">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          {/* Hero Section in slider */}
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage: "url(https://upload.wikimedia.org/wikipedia/commons/7/73/Hanging_bridge_of_Rangamati%2C_Bangladesh._.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              {/* text niyeci */}
            </div>
          </div>
          {/* Hero Section in slider */}
          <div className="absolute flex justify-between transform -translate-y-1/2 left-10 right-10 bottom-3">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          {/* Hero Section in slider */}
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage: "url(https://dkavqk5moymop.cloudfront.net/Global/Gallery/Bandarban:AFull-DayofAdventure/GalleryImages/78bdc54727fd4f7aab963aa6094b724a_130721629_113627590579772_5568424667079560241_n.jpg)",
              backgroundPosition: "bottom center",
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              {/* text niyeci */}
            </div>
          </div>
          {/* Hero Section in slider */}
          <div className="absolute flex justify-between transform -translate-y-1/2 left-10 right-10 bottom-3">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          {/* Hero Section in slider */}
          <div
            className="hero min-h-screen "
            style={{
              backgroundImage: "url(https://live.staticflickr.com/227/478856818_19331b599e_c.jpg)",
              backgroundPosition: "bottom center",
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              {/* text niyeci */}
            </div>
          </div>
          {/* Hero Section in slider */}
          <div className="absolute flex justify-between transform -translate-y-1/2 left-10 right-10 bottom-3">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        {/* These text */}
        <div className="w-1/2 absolute left-[10%] top-1/3 ">
          <h1 className="text-5xl font-bold text-white ">Hello there</h1>
          {/* animation Text */}
          <h1 className="mb-5 text-5xl font-bold text-white " style={{ paddingTop: '1rem',paddingBottom: '1rem', margin: 'auto 0' }}>
        Life is simple{' '}
        <span style={{ color: 'red', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['Tour', 'Sleep', 'Journey', 'Repeat!']}
            loop={Infinity}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </h1>
          {/* animation Text */}
          <p className="mb-5 text-white">
          Exploring new places fuels the souls thirst for adventure, unveiling hidden wonders and forging unforgettable memories. Across landscapes and cultures, we discover the beauty of diversity, weaving our own unique narrative in the fabric of the world. With each journey.
          </p>
          {/* <button className="btn btn-primary">Get Started</button> */}
          <div>
            <Link
              className="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-mono font-medium tracking-tighter text-white border rounded-lg group"
            >
              <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
              <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
              <span className="relative">More Information </span>
            </Link>
          </div>
        </div>
        {/* These text */}
      </div>
    </div>
  );
};

export default Slider;
