import React from 'react';

export default function WhatWeDo() {
  return (
    <main className="bg-[#faf8ff] text-[#013463] font-body">
      <section className="pt-20 pb-14">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <span className="inline-flex items-center rounded-full bg-[#fff4d2] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#7f5600]">
                Our Mission
              </span>
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-headline font-bold leading-tight tracking-tight">
                Architecting the <span className="text-[#DDA23A]">Digital Sanctuary</span>
              </h1>
              <p className="max-w-xl text-base leading-8 text-[#4a4f5a]">
                We are a collective of Muslim developers dedicated to technical excellence and spiritual purpose. We build tools that serve humanity and foster a community rooted in faith and code.
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <a
                  href="/register"
                  className="inline-flex items-center justify-center rounded-full bg-[#DDA23A] px-8 py-3 text-sm font-semibold text-[#013463] shadow-lg transition-transform duration-200 hover:-translate-y-0.5 active:scale-95"
                >
                  Become a Member
                </a>
                <a
                  href="https://t.me/nsda_community"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-[#013463] bg-white px-8 py-3 text-sm font-semibold text-[#013463] transition hover:bg-[#013463] hover:text-white active:scale-95"
                >
                  Support Our Projects
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-[2rem] shadow-[0_30px_80px_rgba(1,52,99,0.16)]">
                <img
                  alt="Modern collaborative workspace with clean design"
                  className="w-full h-full min-h-[420px] object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCR9Y1cOxlALqJtaKdAq6ZgesI9E6Qo4scXYosfeJkGZa8U-9qLldZ6d9j_3dObJLdcnvHdN4CUI-kmdKrXQeLDiwRquaWJ6rvQcn6DRCoMTWOUr5qjI3B7vl9nvrGCW0SAnfzvCi5iUjXTbhu4S90QH-X1lbk2kwiqg0gUJ5hUPDL0q6DnE5wJUS-IqV-DEmUzoHsEj0gR33K3EYrEoolPWssmGXUKA4B1HzfAwtGUtDCFsdHdSiYffRqf2O6sR67wC2vV2lP91p-f"
                />
              </div>
              <div className="hidden lg:block absolute -bottom-6 -left-6 rounded-[1.75rem] bg-[#DDA23A] px-7 py-6 shadow-xl">
                <p className="text-4xl font-headline font-bold text-[#013463]">24/7</p>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#013463]">Community Support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-[2rem] bg-[#F8F8FF] p-8 text-center shadow-sm">
              <p className="text-5xl font-headline font-bold text-[#013463]">11</p>
              <p className="mt-3 text-xs uppercase tracking-[0.25em] text-[#7f7f7f]">Industry Mentors</p>
            </div>
            <div className="rounded-[2rem] bg-[#F8F8FF] p-8 text-center shadow-sm">
              <p className="text-5xl font-headline font-bold text-[#DDA23A]">80</p>
              <p className="mt-3 text-xs uppercase tracking-[0.25em] text-[#7f7f7f]">Active Students</p>
            </div>
            <div className="rounded-[2rem] bg-[#F8F8FF] p-8 text-center shadow-sm">
              <p className="text-5xl font-headline font-bold text-[#013463]">15+</p>
              <p className="mt-3 text-xs uppercase tracking-[0.25em] text-[#7f7f7f]">Open Source Projects</p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 md:px-8 pb-16">
        <div className="mb-12">
          <h2 className="text-3xl font-headline font-bold text-[#013463]">
            The <span className="underline decoration-[#DDA23A] decoration-4 underline-offset-8">Pillars</span> of NSDA
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-12">
          <div className="md:col-span-8 bg-[#F3F3FF] p-10 rounded-[1.5rem] shadow-[0_12px_40px_rgba(1,52,99,0.06)] hover:-translate-y-1 transition-all group">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1 space-y-6">
                <div className="w-12 h-12 rounded-full bg-[#DDA23A] flex items-center justify-center text-[#013463]">
                  <span className="material-symbols-outlined">volunteer_activism</span>
                </div>
                <h3 className="text-3xl font-headline font-bold text-[#013463]">Sadaqah Jariyah</h3>
                <p className="text-[#4a4f5a] leading-relaxed">
                  Building open-source tools that serve the Ummah and earn continuous reward. From prayer timing algorithms to Islamic education platforms, we leverage code as a form of eternal charity.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-sm font-medium text-[#4a4f5a]">
                    <span className="material-symbols-outlined text-[#013463] text-sm">check_circle</span> Open-source licensing for all religious tools
                  </li>
                  <li className="flex items-center gap-3 text-sm font-medium text-[#4a4f5a]">
                    <span className="material-symbols-outlined text-[#013463] text-sm">check_circle</span> Community-driven feature roadmaps
                  </li>
                </ul>
              </div>
              <div className="flex-1">
                <img
                  className="rounded-[1rem] w-full h-64 object-cover shadow-md group-hover:shadow-xl transition-shadow"
                  alt="Abstract close-up of clean programming code on a monitor with soft blue and gold ambient lighting highlights"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQJllyZaPzdTLXotDaTn_y4nbNwebzK6jryS_GB87ZYJQtHwoqG3G051wfIyB0Jv8aE1aolIimbid2S9APHekYORxgSCGIId8oNzKWQuuNRqnlGzVw1gGY67YQCAOJXcceoMlFoq3ALzfbQYBMWt3i8cpKFIt6v5pBNkOfgUNNyORq9H-3SwMC6XAEI4d7XFAE3h9Ln5xOYABSq86K4H_u_32NK0KdecBwvbx8MpAf4LooUbvuAGLoXXlotQAxL4CM4d_9eXAT0YQs"
                />
              </div>
            </div>
          </div>

          <div className="md:col-span-4 bg-[#013463] text-white p-10 rounded-[1.5rem] shadow-xl flex flex-col justify-between hover:-translate-y-1 transition-all">
            <div className="space-y-6">
              <div className="w-12 h-12 rounded-full bg-[#DDA23A] flex items-center justify-center text-[#013463]">
                <span className="material-symbols-outlined">diversity_3</span>
              </div>
              <h3 className="text-3xl font-headline font-bold">Mentorship</h3>
              <p className="text-white/80 leading-relaxed">
                One-on-one guidance connecting seasoned devs with aspiring students. Bridge the gap between academia and the elite tech industry.
              </p>
            </div>
            <a className="mt-8 flex items-center gap-2 font-bold text-[#DDA23A] hover:gap-4 transition-all" href="/register">
              Find a Mentor <span className="material-symbols-outlined">arrow_forward</span>
            </a>
          </div>

          <div className="md:col-span-4 bg-[#F8F8FF] p-10 rounded-[1.5rem] border border-[#E8E9F3] hover:-translate-y-1 transition-all">
            <div className="space-y-6">
              <div className="w-12 h-12 rounded-full bg-[#DDA23A] flex items-center justify-center text-[#013463]">
                <span className="material-symbols-outlined">star</span>
              </div>
              <h3 className="text-2xl font-headline font-bold text-[#013463]">Nujum al-Code</h3>
              <p className="text-[#4a4f5a] leading-relaxed">
                Technical deep-dives and webinars with industry veterans. Learn the "secrets of the stars" in software architecture and career growth.
              </p>
            </div>
          </div>

          <div className="md:col-span-8 bg-white p-10 rounded-[1.5rem] shadow-[0_12px_40px_rgba(1,52,99,0.06)] border border-[#E8E9F3]/10 flex flex-col md:flex-row items-center gap-10 hover:-translate-y-1 transition-all">
            <div className="hidden md:block w-1/3">
              <img
                className="rounded-full aspect-square object-cover border-4 border-[#F3F3FF]"
                alt="Diverse group of tech professionals laughing and collaborating in a modern office with glass walls and plant life"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAC1fX5A9XaZE11nqDkyMpSnqRcSz6pWaZPRw5aQpuOqsWJrKP6WRcp0N3zrB7n0PpUZp7J-1GrfRt6Q16qzD2Xf9bIr2P00M8UJ_JgyOyxdp4I3A64TxxJ3nJrZlcJ7afXOhbNOo8k2AtDqVSFpQfHcwngnLr-6RKPfb98C66zWLWZCgcSND-j5a0NMH7I95_2mWwT0fqFwQCFbBmXNL6bsY_N4SFQqk5B0I5Hdxepqy2KKmc2vwmuItHwHP_Q6hXQwlK6IJZbOgIg"
              />
            </div>
            <div className="flex-1 space-y-6">
              <h3 className="text-3xl font-headline font-bold text-[#013463]">Muslim Devs</h3>
              <p className="text-[#4a4f5a] leading-relaxed">
                A professional network spanning the globe, united by faith and code. We provide a space for networking, job referrals, and collective problem-solving.
              </p>
              <div className="flex gap-4 flex-wrap">
                <button
                  type="button"
                  className="bg-[#F3F3FF] px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-[#013463] transition hover:bg-[#e8ecff]"
                >
                  Global Slack
                </button>
                <button
                  type="button"
                  className="bg-[#F3F3FF] px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-[#013463] transition hover:bg-[#e8ecff]"
                >
                  Job Board
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="max-w-6xl mx-auto px-6 md:px-8 pb-20">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-headline font-bold text-[#013463] mb-4">Our Process</h2>
          <p className="text-[#4a4f5a] max-w-2xl mx-auto">From intentional planning to ethical execution, our workflow is designed for impact.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative">
          <div className="hidden md:block absolute top-24 left-0 w-full h-[2px] bg-[#013463]/20 z-0"></div>

          <div className="relative z-10 text-center space-y-6 group">
            <div className="w-20 h-20 bg-white mx-auto rounded-full border-4 border-[#E8E9F3] flex items-center justify-center group-hover:border-[#DDA23A] transition-colors duration-300">
              <span className="text-2xl font-headline font-bold text-[#013463]">01</span>
            </div>
            <h4 className="text-xl font-headline font-bold text-[#013463]">Collaborate</h4>
            <p className="text-[#6b7280] text-sm px-4">
              Gathering diverse perspectives from the community to define meaningful challenges.
            </p>
          </div>

          <div className="relative z-10 text-center space-y-6 group">
            <div className="w-20 h-20 bg-white mx-auto rounded-full border-4 border-[#E8E9F3] flex items-center justify-center group-hover:border-[#DDA23A] transition-colors duration-300">
              <span className="text-2xl font-headline font-bold text-[#013463]">02</span>
            </div>
            <h4 className="text-xl font-headline font-bold text-[#013463]">Build</h4>
            <p className="text-[#6b7280] text-sm px-4">
              Agile development cycles with a focus on code quality, security, and accessibility.
            </p>
          </div>

          <div className="relative z-10 text-center space-y-6 group">
            <div className="w-20 h-20 bg-white mx-auto rounded-full border-4 border-[#E8E9F3] flex items-center justify-center group-hover:border-[#DDA23A] transition-colors duration-300">
              <span className="text-2xl font-headline font-bold text-[#013463]">03</span>
            </div>
            <h4 className="text-xl font-headline font-bold text-[#013463]">Serve</h4>
            <p className="text-[#6b7280] text-sm px-4">
              Deploying solutions that provide value and ease for the Ummah worldwide.
            </p>
          </div>
        </div>
      </section>

    <section className="max-w-7xl mx-auto px-8 mb-32">
  <div className="bg-gradient-to-br from-primary to-primary p-8 md:p-12 rounded-2xl relative overflow-hidden">

    <div className="absolute inset-0 opacity-10">
      <img
        className="w-full h-full object-cover"
        alt="Technological abstract background with flowing data lines and nodes in deep blue and gold"
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfxAH3Sx5KN8OQInffq4RD9BFgFFLrgjCZQKUP7xtlk4sR0oKQ9XFg0ETSYylBA6muvI8hf7IQ5lFmUcsoevICyHt2YiVPEEgqYeOIgnmwW0ZmdaB0AVxEuu3odYZD3UQFTXfEw_KxXHcmzqDfO5ryHhVMS3C-VdksfaZ3KXrWQ1MbZku_Dfg4hmGliRIPsP7qM9TIqlBI1dv3hWAVUlPNihAWTwEMVK7wtIV7VgVkUHB4StnslGUVgJbZuHRNImRULaS-E-eClsnT"
      />
    </div>

    <div className="relative z-10 max-w-2xl">
      <h2 className="text-3xl md:text-5xl font-headline font-bold text-white mb-4 leading-tight">
        Ready to code for a higher purpose?
      </h2>

        {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-6">
        
        {/* Primary Button */}
        <a
          href="/register"
          className="group inline-flex items-center justify-center rounded-2xl bg-[#DDA23A] px-10 py-4 text-lg font-bold text-[#013463] transition-all duration-300 hover:-translate-y-1 hover:bg-[rgba(221, 162, 58, 0.85) hover:shadow-[0_15px_40px_rgba(255,255,255,0.25)] active:scale-95"
        >
          Become a Member
          <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </a>

        {/* Secondary Button */}
        <a
          href="https://t.me/nsda_community"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-2xl border border-white/20 bg-white/5 backdrop-blur-md px-10 py-4 text-lg font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:border-white/40 hover:bg-white/10 hover:shadow-xl active:scale-95"
        >
          Support Our Projects
        </a>
      </div>
    </div>

  </div>
</section>
    </main>
  );
}
