import React from "react";
import img1 from "./images/hero1.png";
import img2 from "./images/phone1.png";
import img3 from "./images/phone2.png";
import img4 from "./images/phone3.png";
import img5 from "./images/phone.png";
import rings from "./images/rings.png";
import gradient from "./images/gradient.png";
import gradient2 from "./images/gradient2.png";
import cube1 from "./icons/cube1.png";
import cube2 from "./icons/cube2.png";
import star from "./icons/star.png";
import star2 from "./icons/star2.png";
import bstar from "./icons/bstar.png";
import sstar from "./icons/sstar.png";
import bell from "./icons/bell.png";
import fire from "./icons/fire.png";
import play from "./icons/play.png";
import email from "./icons/email.png";
import phone from "./icons/phone.png";
import arrow from "./icons/arrow.png";
import people1 from "./people/people1.png";
import people2 from "./people/people2.png";
import banner from "./banner/banner.png";

const App = () => {
  return (
    <div className="w-full justify-center flex flex-col overflow-hidden ">
      <nav className="mt-[40px] flex flex-col md:flex-row w-[340px] sm:w-[450px]  md:w-[1090px] md:h-[60px] items-center justify-between self-center relative pl-2">
        <img
          src={bstar}
          className="absolute right-[-100px] top-8 hidden lg:flex"
        ></img>
        <ul className="md:flex md:flex-row grid grid-cols-3   w-full items-center ">
          <div className="flex flex-row justify-center items-center">
            <img src={fire} className="w-[34px] h-[34px]"></img>
            <li className="text-[30px] font-bold mr-[40px]">uifry</li>
          </div>
          <li className="text-[20px] font-bold mr-6 text-[#FF5555] ">
            <a href="#home">Home</a>
          </li>
          <li className="text-[20px] font-[500] mr-6">
            <a href="#aboutus">About Us</a>
          </li>
          <li className="text-[20px] font-[500] xsm:ml-16 md:ml-0 mr-6">
            <a href="#pricing">Pricing</a>
          </li>
          <li className="text-[20px] font-[500] mr-6 xsm:ml-16 md:ml-0 ">
            <a href="#features">Features</a>
          </li>
        </ul>
        <button className="bg-black text-white w-[320px] h-[40px] mt-4 md:w-[180px] md:h-[60px] mr-20 hover:font-bold hover:bg-slate-700 md:mt-0 ml-[75px] md:ml-0 ">
          Download
        </button>
      </nav>

      {/* ----------------------------------  HERO SECTION-------------------- */}
      <div
        id="home"
        className="herosection flex  md:w-[1090px] w-[340px] sm:w-[450px]  justify-center self-center md:flex-row flex-col relative mt-24 md:mt-[115px]"
      >
        <img
          src={rings}
          className="md:absolute  right-[-70px] w-[550px] h-[751px] top-[-130px] rotate-[-15deg] hidden md:flex  "
        ></img>
        <img
          src={sstar}
          className="absolute left-40 bottom-64 hidden lg:flex"
        ></img>
        <img
          src={sstar}
          className="absolute right-96 bottom-40 z-10 hidden lg:flex"
        ></img>
        <img
          src={gradient2}
          className="absolute left-4 top-[-260px] w-[527px] h-[550px]"
        ></img>
        <img
          src={gradient2}
          className="absolute right-20 bottom-[-90px] w-[527px] h-[550px] hidden lg:flex"
        ></img>
        <div className="details flex flex-col md:w-1/2 w-[340px] sm:w-[450px]  ">
          <h1 className="md:text-[64px] text-[40px] font-bold text-black md:w-full z-10">
            Make The Best FinancialDecisions
          </h1>
          <p className="w-full text-[18px] font-medium opacity-50 mt-6">
            Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
            faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
          </p>
          <div className="flex flex-row  mt-6  md:w-9/12">
            <button className="mr-0 bg-black text-white h-[60px] text-[16px] w-[180px] flex flex-row justify-center items-center hover:font-bold ">
              Get Started <img src={arrow} className="w-[24px] ml-2"></img>
            </button>
            <div className="h-[60px] w-[180px] flex flex-row justify-center items-center text-[18px] font-[500] hover:font-bold hover:bg-slate-200">
              {" "}
              <img
                src={play}
                className="w-[29px] h-[29px] mr-[14px] "
              ></img>{" "}
              Watch Video
            </div>
          </div>
          <img
            src={img1}
            className="w-[569px] h-[357.74px] hidden md:flex"
          ></img>
        </div>
        <div className="image w-1/2 md:flex flex-row relative hidden">
          <img
            src={img2}
            className="w-[450px] h-[704.32px] rotate-[15] absolute top-8 left-[200px]"
          ></img>
          <img
            src={img3}
            className="w-[550px] h-[704.32px] rotate-[15]  absolute  top-[-32px] left-[80px]"
          ></img>
          <img
            src={img4}
            className="w-[550px] h-[704.32px] absolute top-[-105px] left-[-40px]   rotate-[15]"
          ></img>
        </div>
      </div>

      {/* ----------------------------------  FEATURES SECTION-------------------- */}
      <div
        id="features"
        className=" features px-0 relative w-full flex justify-center"
      >
        <div className=" flex md:flex-row flex-col  md:w-[1090px] justify-center self-center  mt-16">
          <img
            src={rings}
            className="md:absolute left-28 w-[530px] h-[751px] top-0 rotate-[-15deg] z-0 hidden md:flex "
          ></img>
          <img
            src={sstar}
            className="absolute left-16 top-48 hidden lg:flex "
          ></img>
          <img
            src={gradient2}
            className="absolute left-12 top-20 w-[527px] h-[550px] -z-10"
          ></img>
          <img
            src={gradient}
            className="absolute right-0 top-44 w-[327px] h-[600px] "
          ></img>
          <div className="image md:w-1/2 w-[360px]  flex justify-center justify-self-center ">
            <img src={img5} className="rotate-0 justify-self-center"></img>
          </div>
          <div className="details md:w-1/2 w-[340px] sm:w-[450px]  flex flex-col justify-center justify-self-center xsm:ml-3 md:ml-0">
            <p className="text-[18px] font-medium  text-[#FF5555]">FEATURES</p>
            <h3 className="text-[48px] font-bold mb-[32px] ">Uifry Premium</h3>
            <div className="flex flex-row mb-[8px]">
              <img src={star} className="w-[24px] h-[24px] mr-2"></img>
              <h5 className="text-[18px] font-[600] flex flex-row ">
                Budgeting intervals
              </h5>
            </div>
            <p className="text-[18px] font-medium opacity-50 mb-[32px]">
              Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
              faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </p>

            <div className="flex flex-row mb-[8px]">
              <img src={cube1} className="w-[24px] h-[24px] mr-2"></img>
              <h5 className="text-[18px] font-[600] flex flex-row ">
                Budgeting intervals
              </h5>
            </div>
            <p className="text-[18px] font-medium opacity-50 mb-[32px]">
              Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
              faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </p>

            <div className="flex flex-row mb-[8px]">
              <img src={cube2} className="w-[24px] h-[24px] mr-2 "></img>
              <h5 className="text-[18px] font-[600] flex flex-row ">
                Budgeting intervals
              </h5>
            </div>
            <p className="text-[18px] font-medium opacity-50 mb-[32px]">
              Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
              faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </p>
          </div>
        </div>
      </div>

      {/* ----------------------------------  GALLERY-------------------- */}
      <div className="gallery flex md:flex-row-reverse flex-col    md:w-[1090px] justify-center self-center relative items-center">
        <img
          src={rings}
          className="md:absolute right-16 w-[550px] h-[751px] top-[-80px] rotate-[-15deg] hidden md:flex  "
        ></img>
        <img
          src={sstar}
          className="absolute right-4 top-4 hidden lg:flex"
        ></img>
        <img
          src={sstar}
          className="absolute right-100 bottom-16 hidden lg:flex"
        ></img>
        <img
          src={gradient2}
          className="absolute right-72 top-28 w-[327px] h-[500px] "
        ></img>
        <div className="image md:w-1/2 flex justify-center justify-self-center xsm:ml-16 md:ml-0">
          <img src={img5} className="rotate-0 justify-self-center"></img>
        </div>
        <div className="details md:w-1/2 w-[340px] sm:w-[450px]   flex flex-col justify-center justify-self-center md:mr-16 xsm:ml-2 md:ml-0 ">
          <p className="text-[18px] font-medium  text-[#FF5555]">ADVANTAGES</p>
          <h3 className="text-[48px] font-bold mb-[32px]">Why Choose Uifry?</h3>
          <div className="flex flex-row mb-[8px] items-center ">
            <div className="bg-red-600 rounded-[48px] w-[48px] h-[48px]  justify-center items-start flex ">
              <img src={bell} className=" flex self-center   "></img>
            </div>
            <h5 className="text-[18px] font-bold flex flex-row ml-2 ">
              Clever Notifications
            </h5>
          </div>
          <p className="text-[18px] font-medium opacity-50 mb-[32px]">
            Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies.
            In ultrices malesuada elit mauris etiam odio. Duis tristique lacus,
            et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse
            sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien,
            suspendisse aliquam.
          </p>
        </div>
      </div>

      <div className="gallery flex md:flex-row flex-col  md:w-[1090px] justify-center self-center relative">
        <img
          src={rings}
          className="md:absolute left-[-75px] w-[550px] h-[751px] top-[-50px] rotate-[-15deg] xsm:hidden md:flex "
        ></img>
        <img
          src={sstar}
          className="absolute right-20 bottom-28 hidden lg:flex"
        ></img>
        <img
          src={gradient2}
          className="absolute left-56  top-28 w-[327px] h-[500px] hidden lg:flex "
        ></img>
        <div className="image md:w-1/2 xsm:w-[340px] flex justify-center justify-self-center">
          <img src={img5} className="rotate-0 justify-self-center"></img>
        </div>
        <div className="details md:w-1/2 xsm:w-[340px] sm:w-[450px]  flex flex-col justify-center justify-self-center">
          <div className="flex flex-row mb-[8px] items-center">
            <div className="bg-red-600 rounded-[48px] w-[48px] h-[48px]  justify-center items-start flex ">
              <img src={star2} className=" flex self-center  "></img>
            </div>
            <h5 className="text-[18px] font-bold flex flex-row ml-2 ">
              Fully Customizable
            </h5>
          </div>
          <p className="text-[18px] font-medium opacity-50 mb-[32px]">
            Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies.
            In ultrices malesuada elit mauris etiam odio. Duis tristique lacus,
            et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse
            sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien,
            suspendisse aliquam.
          </p>
        </div>
      </div>

      {/* ---------------------------------- TESTIMONIALS-------------------- */}
      <div
        id="aboutus"
        className="testimonials flex flex-col   lg:w-[1090px] justify-center self-center relative"
      >
        <img
          src={gradient2}
          className="absolute left-12  top-64 w-[327px] h-[400px]"
        ></img>
        <div className="flex flex-col justify-center self-center text-center md:w-[445px]">
          <h6 className="text-[18px] font-medium">TESTIMONIALS</h6>
          <h1 className="md:text-[48px] xsm:text-[32px] font-bold">
            What Our Users Say About US?
          </h1>
        </div>
        <div className="flex md:flex-row xsm:flex-col">
          <div className="image md:w-1/2 z-10">
            <img src={people1}></img>
          </div>
          <div className="details flex justify-center self-center flex-col md:w-1/2 xsm:w-[340px] sm:w-[450px] ">
            <h4 className="mb-[24px] text-[28px] font-bold ">
              The best financial accounting app ever!
            </h4>
            <p className="text-[18px] font-medium opacity-50 ">
              “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris etiam odio. Duis
              tristique lacus, et blandit viverra nisl velit. Sed mattis
              rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget
              ac dolor neque lorem sapien, suspendisse aliquam.”
            </p>
            <img
              src={people2}
              className="w-[192px] h-[40px] mt-[24px] mb-[24px]"
            ></img>
            <p className="text-[18px] font-semibold">Nick Jonas</p>
          </div>
        </div>
      </div>

      {/* ----------------------------------  PRICES-------------------- */}
      <div
        id="pricing"
        className="subscription flex flex-col   lg:w-[1090px] justify-center self-center mt-[68px] relative"
      >
        <img
          src={bstar}
          className="absolute right-[450px] top-28 hidden lg:flex"
        ></img>
        <img
          src={gradient2}
          className="absolute left-[-160px] bottom-[-360px] w-[327px] h-[400px]"
        ></img>
        <div className="xsm:mx-8 md:mx-0">
          <p className="text-[18px] font-medium text-[#FF5555]">FAQ</p>
          <h1 className="text-[48px] font-bold md:w-[497px] ">
            Frequently Asked Questions
          </h1>
        </div>
        <div className="md:grid md:grid-cols-2 gap-5 mt-[40px] flex flex-col justify-center items-center">
          <div className="md:w-[535px] sm:w-[450px]  h-[181px] flex flex-col justify-center bg-[#FF5555] text-white p-[31px] hover:shadow-2xl  hover:shadow-slate-500 xsm:w-[340px]">
            <h4 className="text-[28px] font-[600] xsm:text-[20px]">
              The Best Financial Accounting App Ever!
            </h4>
            <p className="text-[18px] font-[500] ">
              “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris.
            </p>
          </div>
          <div className="xsm:w-[340px] sm:w-[450px]    md:w-[535px] h-[181px] flex flex-col justify-center   p-[31px] hover:shadow-2xl  hover:shadow-slate-500 ">
            <h4 className="md:text-[28px] font-[600] xsm:text-[20px]">
              The Best Financial Accounting App Ever!
            </h4>
            <p className="text-[18px] font-[500] opacity-50 ">
              “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris.
            </p>
          </div>
          <div className="md:w-[535px] xsm:w-[340px] sm:w-[450px]  h-[181px] flex flex-col justify-center bg-[#FF5555] lg:bg-white text-white lg:text-black   p-[31px] hover:shadow-2xl  hover:shadow-slate-500">
            <h4 className="text-[28px] font-[600] xsm:text-[20px]">
              The Best Financial Accounting App Ever!
            </h4>
            <p className="text-[18px] font-[500] lg:opacity-50 ">
              “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris.
            </p>
          </div>
          <div className="md:w-[535px] xsm:w-[340px] sm:w-[450px]  h-[181px] flex flex-col justify-center lg:bg-[#FF5555] bg-white  p-[31px] lg:text-white hover:shadow-2xl  hover:shadow-slate-500">
            <h4 className="text-[28px] font-[600] xsm:text-[20px]">
              The Best Financial Accounting App Ever!
            </h4>
            <p className="text-[18px] font-[500]  opacity-50 lg:opacity-100">
              “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris.
            </p>
          </div>
          <div className="md:w-[535px] xsm:w-[340px] sm:w-[450px]  h-[181px] flex flex-col justify-center bg-[#FF5555]  p-[31px] text-white hover:shadow-2xl  hover:shadow-slate-500">
            <h4 className="text-[28px] font-[600] xsm:text-[20px]">
              The Best Financial Accounting App Ever!
            </h4>
            <p className="text-[18px] font-[500] ">
              “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris.
            </p>
          </div>
          <div className="md:w-[535px] xsm:w-[340px] sm:w-[450px]  h-[181px] flex flex-col justify-center bg-white  p-[31px]  hover:shadow-2xl  hover:shadow-slate-500">
            <h4 className="text-[28px] font-[600] xsm:text-[20px]">
              The Best Financial Accounting App Ever!
            </h4>
            <p className="text-[18px] font-[500] opacity-50">
              “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris.
            </p>
          </div>
        </div>
      </div>

      <div className="banner flex justify-center self-center xsm:w-[340px] xsm:h-[250px] sm:w-[450px] sm:h-[300px]  lg:w-[1090px] lg:h-[508px] mt-[155px] relative ">
        <img
          src={sstar}
          className="absolute left-[-100px] top-32 hidden lg:flex"
        ></img>
        <img
          src={bstar}
          className="absolute right-[-100px] top-[-80px] hidden lg:flex"
        ></img>
        <img src={banner} className="w-full hover:scale-105"></img>
      </div>

      {/* ---------------------------------- CONTACT DETAILS-------------------- */}
      <div className="contact xsm:w-[360px]  flex flex-col sm:w-[450px]   lg:w-[1090px] justify-center self-center text-left md:mt-[155px] mt-20">
        <footer>
          <div className="container mx-auto md:flex md:flex-row justify-between xsm:grid sm:grid-cols-2">
            <div>
              <div className="flex items-center mb-4">
                <img
                  src={fire}
                  alt="Uifry Logo"
                  className="w-[30px] h-[30px] mr-2"
                />
                <span className="font-semibold text-[32px] hover:text-[34px]">
                  uifry
                </span>
              </div>
              <div className="mb-2 flex items-center text-[32px] font-semibold hover:text-[18px]">
                <img
                  src={email}
                  alt="Uifry Logo"
                  className="w-[26px] h-[26px] mr-2"
                />

                <a
                  href="mailto:Help@Frybix.Com"
                  className=" text-[16px] font-semibold hover:text-[18px]"
                >
                  Help@Frybix.Com
                </a>
              </div>
              <div className="mb-2 flex items-center">
                <img
                  src={phone}
                  alt="Uifry Logo"
                  className="w-[26px] h-[26px] mr-2"
                />

                <span className=" text-[16px] font-semibold hover:text-[18px]">
                  +1234 456 678 89
                </span>
              </div>
            </div>
            <div>
              <h3 className=" mb-4 text-[32px] font-semibold hover:text-[34px] ">
                Links
              </h3>
              <ul>
                <li className="mb-2">
                  <a
                    href="#home"
                    className=" text-[16px] font-semibold hover:text-[18px]"
                  >
                    Home
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#aboutus"
                    className=" text-[16px] font-semibold hover:text-[18px]"
                  >
                    About Us
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#pricing"
                    className=" text-[16px] font-semibold hover:text-[18px]"
                  >
                    Bookings
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#features"
                    className=" text-[16px] font-semibold hover:text-[18px]"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div className="xsm:mt-4 md:mt-0">
              <h3 className=" mb-4 text-[32px] font-semibold hover:text-[34px]">
                Legal
              </h3>
              <ul>
                <li className="mb-2">
                  <a
                    href="#"
                    className=" text-[16px] font-semibold hover:text-[18px]"
                  >
                    Terms Of Use
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className=" text-[16px] font-semibold hover:text-[18px]"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className=" text-[16px] font-semibold hover:text-[18px]"
                  >
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
            <div className="xsm:mt-4 md:mt-0">
              <h3 className=" mb-4 text-[32px] font-semibold hover:text-[34px] ">
                Product
              </h3>
              <ul>
                <li className="mb-2">
                  <a
                    href="#"
                    className=" text-[16px] font-semibold hover:text-[18px]"
                  >
                    Take Tour
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className=" text-[16px] font-semibold hover:text-[18px]"
                  >
                    Live Chat
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className=" text-[16px] font-semibold hover:text-[18px]"
                  >
                    Reviews
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-span-2 xsm:mt-4 md:mt-0 ">
              <h3 className=" mb-4 text-[32px] font-semibold hover:text-[34px]">
                Newsletter
              </h3>
              <p className=" text-[16px] font-semibold hover:text-[18px]">
                Stay Up To Date
              </p>
              <form className="row-span-2   flex flex-row border-gray-300 border rounded mt-2">
                <input
                  type="email"
                  placeholder="your email"
                  className="w-full h-full  px-4 py-2 mb-2 outline-none  "
                />
                <button
                  type="submit"
                  className="w-full bg-black text-white px-4 py-2 hover:text-[16px] hover:font-bold "
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <hr className="mt-[92px] mb-[39px]"></hr>
          <div className="text-center mt-8 text-sm text-gray-500 mb-[39px]">
            Copyright 2022 Uifry.Com All Rights Reserved
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;
