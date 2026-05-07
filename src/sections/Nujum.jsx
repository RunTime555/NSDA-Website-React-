
import { useState } from "react";
import SectionWrapper from "../components/common/SectionWrapper";
import { episodes } from "../data/nujum";
import { getLatestEpisode } from "../data/nujum";
import EpisodeSlider from "../components/common/EpisodeSlider";
import { Play } from "lucide-react";



const Nujum = () => {
  const [selected, setSelected] = useState(null);
  const [showAll, setShowAll] = useState(false);

const latestEpisode = getLatestEpisode(episodes);
  // YouTube Video ID extractor
  const getVideoId = (url) => {
    if (!url) return null;

    const regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    
    return (match && match[2].length === 11) ? match[2] : null;
  };

  
 const handleWatchLatest = () => {
  if (latestEpisode) {
    setSelected(latestEpisode);
  }
};
const featuredVideoId = getVideoId(latestEpisode?.videoUrl);

  return (
    <>
     
    <SectionWrapper id="nujum" className="relative overflow-hidden bg-surface">
        
        {/* HERO SECTION */}
        <div className="relative pt-32 pb-24">
          
           <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-6">
             <div className="grid lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Content */}
            <div className="lg:col-span-7">
                <span className="text-secondary font-bold text-[10px] uppercase tracking-[0.3em] mb-6 block">
                
                  THE FLAGSHIP SERIES
                </span>

               <h1 className="font-headline text-5xl md:text-7xl font-bold text-primary leading-[1.1] mb-8 tracking-tight">
                  Nujum al-Code:<br />
                 <span className="text-secondary">Guiding Lights</span><br />
                  in the Digital Realm
                </h1>

                <p className="font-body text-lg text-primary/70 max-w-lg leading-relaxed mb-10">
                  Our flagship series featuring deep technical dives with industry pioneers,
                  focusing on both technical mastery and spiritual growth.
                </p>

                <div className="flex items-center gap-6">
                   <button
                onClick={handleWatchLatest}
                className="bg-primary text-surface px-10 py-4 rounded-full font-headline font-bold flex items-center gap-3 hover:bg-primary/90 transition-all shadow-xl active:scale-95 text-sm"
              >
               
                   <span className="material-symbols-outlined text-xl">
                  play_circle
                </span>

                Watch Latest
                  </button>
                
                </div>
              </div>

             <div className="lg:col-span-5">
  <div
    onClick={() => latestEpisode && setSelected(latestEpisode)}
    className="relative rounded-[2.5rem] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.25)] group cursor-pointer"
  >
    {featuredVideoId ? (
      <img
  src={`https://img.youtube.com/vi/${featuredVideoId}/maxresdefault.jpg`}
  onError={(e) => {
    if (e.target.src.includes("maxresdefault")) {
      e.target.src = `https://img.youtube.com/vi/${featuredVideoId}/hqdefault.jpg`;
    } else if (e.target.src.includes("hqdefault")) {
      e.target.src = `https://img.youtube.com/vi/${featuredVideoId}/mqdefault.jpg`;
    }
  }}
  className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-110"
  alt={latestEpisode?.title || "Latest Episode"}
/>
    ) : (
      <div className="w-full aspect-video bg-gray-200 flex items-center justify-center">
        <span className="text-gray-500">Thumbnail unavailable</span>
      </div>
    )}
             
         <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
  
  {/* TOP BADGE & EPISODE INFO */}

 
<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
  <div className="w-10 h-10 md:w-12 md:h-12 bg-[#C5A059] rounded-full flex items-center justify-center shadow-xl transition-all duration-500 transform group-hover:scale-110 pointer-events-auto relative">
    
    {/* PLAY ICON */}
    <svg 
      className="w-4 h-4 md:w-5 md:h-5 text-white fill-current ml-0.5" 
      viewBox="0 0 24 24"
    >
      <path d="M8 5v14l11-7z" />
    </svg>
    
    {/* MINIMAL GLOW EFFECT */}
    <div className="absolute inset-0 rounded-full bg-[#C5A059] animate-ping opacity-10 group-hover:opacity-20" />
    
  </div>
</div>
  <div className="flex items-center gap-3 mb-2">
    <span className="bg-[#C5A059] text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">
      Now Playing
    </span>


    <span className="text-[10px] font-bold tracking-[0.2em] text-white/90 uppercase">
      {latestEpisode?.id}
    </span>
  </div>
  

  {/* TITLE */}
  <h3 className="text-xl md:text-2xl font-bold leading-tight text-white mb-2 drop-shadow-lg">
    {latestEpisode?.title || "Untitled Episode"}
  </h3>

  <div className="flex items-center gap-2 text-[11px] font-medium text-white/70 uppercase tracking-widest">
    
    <span>{latestEpisode?.author}</span>
    <span className="opacity-40">•</span>
    <span>{latestEpisode?.duration}</span>
  </div>

</div></div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="max-w-7xl mx-auto px-4 mb-6">
        <div className="h-[1px] w-full bg-primary/10"></div>
       
      </div>

        {/* Episode Archive */}
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-left mb-12">
            <h2 className="font-headline text-4xl font-bold text-primary">
          Episode Archive
        </h2>
            <p className="font-body text-lg text-primary/70 max-w-lg leading-relaxed mb-10">
              Browse our library of technical discourse and digital philosophy, where faith meets the cutting edge.
            </p>
          </div>

          {!showAll ? (
            <EpisodeSlider episodes={episodes} onCardClick={setSelected} />
          ) : (
            <div className="grid md:grid-cols-3 gap-10 pb-10">
              {episodes.map((ep) => {
                const videoId = getVideoId(ep.videoUrl);
                const isActive = selected?.id === ep.id;

                return (
                  <div
                     key={ep.id}
                  onClick={() => setSelected(ep)}
                  className="group bg-surface p-5 rounded-[2.5rem] shadow border border-primary/5"
                >
                    {/* Image */}
                    <div className="aspect-video overflow-hidden rounded-2xl mb-6 relative">
                      {videoId ? (
                      <img
  src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
  onError={(e) => {
    e.currentTarget.onerror = null;
    e.currentTarget.src = `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;
  }}
  className={`w-full h-full object-cover transition-all duration-500
    ${isActive ? "brightness-110 contrast-105" : "opacity-80 group-hover:opacity-100"}`}
  alt={ep.title}
/>
                      ) : (
                        <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                          <span className="text-gray-400 text-sm">No thumbnail</span>
                        </div>
                      )}

                      <div className="absolute top-3 right-3 bg-black/60 text-white text-[10px] font-bold px-2 py-1 rounded-md">
                        {ep.duration}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="text-left px-2">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-[10px] text-[#9a7e4d] font-bold uppercase tracking-widest">
                          {ep.category}
                        </span>
                      </div>

                      <h4
                        className={`text-xl font-bold leading-tight line-clamp-2 transition-colors duration-300
                          ${isActive ? "text-[#9a7e4d]" : "text-[#0a192f] group-hover:text-[#9a7e4d]"}`}
                      >
                        {ep.title}
                      </h4>

                      <p className="text-xs text-gray-400 mt-3 font-light line-clamp-2">
                        {ep.description}
                      </p>

                      {/* Author */}
                      <div className="mt-4 flex items-center gap-2">
                       
                        <span className="text-[10px] text-gray-500 font-medium">
                          {ep.author}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Toggle Button */}
          <div className="mt-12 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 text-[#0a192f] font-bold text-xs hover:gap-4 transition-all"
            >
              {showAll ? "View Less" : "View All Episodes"}
              <span className="material-symbols-outlined !text-sm">
                {showAll ? "arrow_upward" : "arrow_forward"}
              </span>
            </button>
          </div>
        </div>

       {/* Stay in the Light Section */}
<div className="mt-20 max-w-8xl mx-auto px-6 pb-20">
 

  <div className="bg-primary rounded-[2.5rem] py-20 px-16 text-surface max-w-6xl mx-auto overflow-hidden relative">
    
    <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
     

      {/* LEFT TEXT */}
      <div className="max-w-md text-left">
        <h2 className="font-headline text-3xl font-bold mb-3 tracking-tight">
       
          Join the Telegram Lightstream
        </h2>

        <p className="font-body text-surface/70 text-sm leading-relaxed">
          
          Connect instantly with the Nujum community for updates, discussions, and new episodes.
        </p>
      </div>

      

         {/* RIGHT TELEGRAM BOX */}
<div className="w-full lg:max-w-md">


  <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between bg-surface/10 p-2 rounded-xl border border-surface/20 backdrop-blur-sm gap-3 sm:gap-2">

    <span className="flex-1 px-4 py-3 text-sm text-surface/60 font-body select-none text-left">
      NSDA community
    </span>

    {/* Telegram button */}
    <a
      href="https://t.me/nsda_community"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-secondary text-primary px-8 py-3 rounded-lg font-headline font-bold text-sm hover:opacity-90 transition-all active:scale-95 flex items-center justify-center gap-2 shadow-lg whitespace-nowrap"
    >
      <span className="material-symbols-outlined text-sm">
        send
      </span>
      Join Us
    </a>
        </div>

        <p className="text-[8px] text-surface/50 mt-3 uppercase tracking-[0.2em] text-center lg:text-left">
          CONNECT INSTANTLY VIA TELEGRAM
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Video Modal */}
        {selected && (
          <div 
            className="fixed inset-0 bg-[#0a192f]/95 z-[100] flex items-center justify-center p-4 backdrop-blur-md" 
            onClick={() => setSelected(null)}
          >
            <div 
              className="bg-white rounded-[3rem] max-w-5xl w-full overflow-hidden shadow-2xl" 
              onClick={e => e.stopPropagation()}
            >
              <div className="aspect-video bg-black">
                {getVideoId(selected.videoUrl) ? (
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src={`https://www.youtube.com/embed/${getVideoId(selected.videoUrl)}?autoplay=1&rel=0`} 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-white">
                    Video unavailable
                  </div>
                )}
              </div>

              <div className="p-10 flex justify-between items-start">
                <div>
                  <h2 className="text-2xl font-bold text-[#0a192f]">{selected.title}</h2>
                  <p className="text-sm text-gray-500 mt-1">
                    {selected.author} • {selected.duration}
                  </p>
                </div>
                <button 
                  onClick={() => setSelected(null)} 
                  className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                >
                  <span className="material-symbols-outlined text-gray-600">close</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </SectionWrapper>

    
    </>
  );
};

export default Nujum;
