import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaLightbulb,
  FaEye,
  FaSeedling,
  FaUsers,
  FaRobot,
} from "react-icons/fa";
import man from "../assets/man.jpg";
import star from "../assets/star.jpg";

export default function About() {
  const navigate = useNavigate();
  return (
    <div className="bg-white w-full overflow-x-hidden">
      {/* 1. HERO SECTION - PERFECT FULL SCREEN FOR DESKTOP */}
      <section className="relative min-h-screen flex items-center overflow-hidden w-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 max-w-[1440px] mx-auto">
        {/* FULL BACKGROUND IMAGE */}
        <img
          src={star}
          alt=""
          className="absolute inset-0 w-full h-full object-cover select-none z-0"
        />

        {/* CONTENT */}
        <div className="w-full relative z-10 flex justify-start py-20 md:py-0">
          <div className="w-full max-w-5xl">
            <p className="text-xs sm:text-sm tracking-widest uppercase text-[#DDA23A] mb-4 font-bold">
              Our Identity
            </p>

            <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary tracking-tight leading-[1.15] mb-6 md:mb-8">
              Bridging Sacred Wisdom and{" "}
              <span className="text-[#DDA23A] text-secondary italic block lg:inline mt-2 lg:mt-0">
                Silicon Innovation
              </span>
            </h1>

            <p className="mt-4 md:mt-6 text-gray-600 max-w-xl text-base sm:text-lg leading-relaxed font-medium">
              We are a vibrant community of Muslim students from All Universities dedicated to mastering modern technology.
              Rooted in Islamic values, we strive to create a supportive ecosystem where faith and innovation thrive together.
            </p>
          </div>
        </div>
      </section>

      {/* 2. MISSION + VISION - ICON & TITLE SIDE-BY-SIDE, DESCRIPTION FULL WIDTH BELOW */}
      <section className="bg-[#f4f7fb] py-20 sm:py-28 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          
          {/* MISSION CARD */}
          <div className="group bg-white p-6 sm:p-8 rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between">
            <div>
              {/* TOP ROW: Icon + Title side by side */}
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0 flex items-center justify-center rounded-full bg-yellow-100">
                  <FaLightbulb className="text-[#DDA23A] text-lg sm:text-xl animate-pulse" />
                </div>
                <h3 className="text-xl md:text-2xl text-[#013463] font-bold">
                  Mission
                </h3>
              </div>
              
              {/* BOTTOM ROW: Description spans full width below */}
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed w-full">
                To empower Muslim students across the nation by providing
                mentorship, learning opportunities, and collaborative platforms
                rooted in Islamic values.
              </p>
            </div>
          </div>

          {/* VISION CARD */}
          <div className="group bg-[#0b2545] text-white p-6 sm:p-8 rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between">
            <div>
              {/* TOP ROW: Icon + Title side by side */}
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0 flex items-center justify-center rounded-full bg-blue-900">
                  <FaEye className="text-[#DDA23A] text-lg sm:text-xl" />
                </div>
                <h3 className="text-xl md:text-2xl text-white font-bold">
                  Vision
                </h3>
              </div>
              
              {/* BOTTOM ROW: Description spans full width below */}
              <p className="text-sm sm:text-base text-gray-200 leading-relaxed w-full">
                To be the leading Muslim developer community that nurtures
                faith-driven tech talent and creates lasting impact through
                technology.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 3. GENESIS SECTION */}
      <section className="bg-white py-16 sm:py-24 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <img
            src={man}
            alt="Founder"
            className="rounded-3xl object-cover w-full h-[300px] sm:h-[400px] md:h-[450px] shadow-sm order-1 md:order-none"
          />

          <div className="order-2 md:order-none">
            <p className="text-xs uppercase text-[#DDA23A] font-semibold mb-2">
              The Genesis
            </p>
            <h2 className="text-xl sm:text-2xl md:text-3xl text-[#013463] font-bold mb-4">
              Founded on March 31, 2025
            </h2>

            <p className="text-gray-600 text-sm mb-6 sm:mb-8 leading-relaxed">
              NSDA was founded through the collaboration of students from
              multiple universities, united by a shared vision to uplift the
              Ummah through technology. It aims to build a faith-driven tech
              community that empowers Muslim students with purpose, knowledge,
              and support.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full bg-blue-50">
                  <FaSeedling className="text-[#013463]" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg text-[#013463] font-semibold mb-1">
                    Rooted in Purpose
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm">
                    Every line of code is an act of stewardship over the digital realm.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full bg-blue-50">
                  <FaUsers className="text-[#013463]" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg text-[#013463] font-semibold mb-1">
                    Student-Led Growth
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm">
                    Built by students, for students, fostering a peer-to-peer ecosystem of excellence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CORE VALUES SECTION */}
      <section className="bg-[#f4f7fb] py-16 sm:py-24 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl md:text-3xl text-[#013463] font-bold mb-3">
              Our Core Values
            </h2>
            <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
              Foundational principles that guide every algorithm we write and
              every community we build.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="group bg-white p-6 sm:p-8 rounded-2xl text-center shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-full bg-blue-50 mb-4">
                <FaRobot className="text-[#013463] text-lg" />
              </div>
              <h4 className="font-semibold text-[#013463] mb-2">Ethical AI</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Developing intelligent systems that respect human dignity, privacy
                and divine principles of justice.
              </p>
            </div>

            <div className="group bg-white p-6 sm:p-8 rounded-2xl text-center shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-full bg-blue-50 mb-4">
                <FaSeedling className="text-[#013463] text-lg" />
              </div>
              <h4 className="font-semibold text-[#013463] mb-2">Sadaqah Jariyah</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Building open-source tools that serve humanity as a form of perpetual
                charity long after the code is written.
              </p>
            </div>

            <div className="group bg-white p-6 sm:p-8 rounded-2xl text-center shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-full bg-blue-50 mb-4">
                <FaUsers className="text-[#013463] text-lg" />
              </div>
              <h4 className="font-semibold text-[#013463] mb-2">Community Growth</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Nurturing an environment where every developer lifts another,
                creating a collective chain of technical mastery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA SECTION */}
      <section className="bg-white py-16 sm:py-24 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
        <div className="max-w-7xl mx-auto bg-gradient-to-r from-[#0b2545] to-[#1e4b7a] text-white rounded-3xl p-6 sm:p-10 md:p-14 text-center shadow-lg">
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold mb-4">
            Ready to Build for the Sanctuary?
          </h2>

          <p className="text-gray-200 text-xs sm:text-sm md:text-base max-w-xl mx-auto mb-6 sm:mb-8">
            Join our community of student developers and start your journey of
            technical and spiritual excellence.
          </p>

          <div className="flex justify-center">
            <button
              onClick={() => navigate("/form")}
              className="w-full sm:w-auto bg-[#DDA23A] text-[#0b2545] px-8 py-3 rounded-full font-semibold hover:bg-yellow-500 transition-all duration-200 shadow-md transform hover:scale-105"
            >
              Apply for Membership
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}