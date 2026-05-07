import React, { useState } from "react";

const EpisodeSlider = ({ episodes, onCardClick }) => {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 3;

  
  const getVideoId = (url) => {
    if (!url) return "";
    const regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : "";
  };

  const nextSlide = () => {
    if (startIndex + itemsPerPage < episodes.length) {
      setStartIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (startIndex > 0) {
      setStartIndex((prev) => prev - 1);
    }
  };

  const visibleEpisodes = episodes.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className="flex flex-col items-center w-full py-10 bg-surface">
      
      {/* SLIDER CONTAINER */}
      <div className="flex items-center gap-6 w-full max-w-7xl px-4">

        {/* LEFT NAVIGATION BUTTON */}
        <button
          onClick={prevSlide}
          disabled={startIndex === 0}
          className={`w-12 h-12 rounded-full border border-primary/10 transition flex items-center justify-center text-primary 
            ${startIndex === 0 ? 'opacity-20 cursor-not-allowed' : 'bg-surface hover:bg-primary/5 shadow-sm'}`}
        >
          ‹
        </button>

        {/* CARDS DISPLAY AREA */}
        <div className="flex flex-1 gap-6 justify-center">
          {visibleEpisodes.map((ep) => {
            const videoId = getVideoId(ep.videoUrl);

            return (
              <div
                key={ep.id}
                onClick={() => onCardClick(ep)}
                className="w-full sm:w-1/3 bg-surface rounded-[2rem] overflow-hidden border border-primary/20 shadow-[0_8px_30px_rgba(1,52,99,0.08)] hover:shadow-[0_20px_50px_rgba(1,52,99,0.12)] transition-all duration-500 cursor-pointer group"
              >
                {/* VIDEO THUMBNAIL */}
                <div className="aspect-video relative overflow-hidden bg-black/5">
                  <img
                    src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                    alt={ep.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-110 group-hover:contrast-105"
                  />
                  <div className="absolute bottom-3 right-3 bg-black/60 text-white text-[10px] px-2 py-1 rounded-md font-mono">
                    {ep.duration}
                  </div>
                </div>

                {/* EPISODE DETAILS */}
                <div className="p-5 text-left">
                  <span className="text-secondary font-bold text-[10px] uppercase tracking-widest text-[#C5A059]">
                    {ep.category}
                  </span>
                  
                  <h3 className="text-primary font-headline font-bold text-lg mt-2 line-clamp-2 leading-snug">
                    {ep.title}
                  </h3>

                  {/* AUTHOR INFO */}
                  <div className="flex items-center gap-2 mt-4">
                  
                    <span className="text-xs text-primary/60 font-medium">
                      {ep.author}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* RIGHT NAVIGATION BUTTON */}
        <button
          onClick={nextSlide}
          disabled={startIndex + itemsPerPage >= episodes.length}
          className={`w-12 h-12 rounded-full border border-primary/10 transition flex items-center justify-center text-primary 
            ${startIndex + itemsPerPage >= episodes.length ? 'opacity-20 cursor-not-allowed' : 'bg-surface hover:bg-primary/5 shadow-sm'}`}
        >
          ›
        </button>
      </div>

      {/* PROGRESS INDICATOR (DOTS) */}
      <div className="flex gap-2 mt-8">
        {episodes.map((_, i) => (
          <div
            key={i}
            className={`h-1 rounded-full transition-all duration-300 ${
              i >= startIndex && i < startIndex + itemsPerPage
                ? "w-8 bg-primary opacity-100"
                : "w-2 bg-primary opacity-20"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default EpisodeSlider;