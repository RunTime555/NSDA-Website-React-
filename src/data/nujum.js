export const episodes = [
  {
    id: 1,
    title: "Nujum-Code EP01 (Initial Season) - With Semer Nur",
    category: "Development",
    author: "Semer Nur",
    duration: "1:54:21",
    date: "2025-06-06",
    videoUrl: "https://www.youtube.com/watch?v=d742QEZIMkw",
    description: "Software Dev | Blockchain | Fintech"
  },
  {
    id: 2,
    title: "Nujum-Code EP02 (Initial Season) - With Mohammed Ibrahim",
    category: "Engineering",
    author: "Mohammed Ibrahim",
    duration: "1:47:49",
    date: "2025-10-06",
    videoUrl: "https://www.youtube.com/watch?v=vlg-XAYSwvM",
    description: "Full Stack Developer"
  },
  {
    id: 3,
    title: "Nujum-Code EP03 (Initial Season) - With Ali Weber",
    category: "Full Stack",
    author: "Ali Weber",
    duration: "1:45:51",
    date: "2025-10-06",
    videoUrl: "https://www.youtube.com/watch?v=wu2oWKUMjhc",
    description: "UI/UX developer | Full Stack Developer | Co-founder @ Evergreen Technology"
  },
  {
    id: 4,
    title: "Nujum-Code EP04 (Season One) - With Anwar Nasir",
    category: "Development",
    author: "Anwar Nasir",
    duration: "57:19",
    date: "2025-11-06",
    videoUrl: "https://www.youtube.com/watch?v=dFnta9toyvc",
    description: "Flutter Dev @ athena Labs | Mobile Dev @ Nova Tech"
  },
  {
    id: 5,
    title: "NUJUM-AL-CODE EP05 (Season One) - With Khalid Ebrahim",
    category: "Innovation",
    author: "Khalid Ebrahim",
    duration: "1:33:57",
    date: "2025-11-06",
    videoUrl: "https://www.youtube.com/watch?v=ltllWogkB6E",
    description: "Full Stack Developer | AI Driven Innovator"
  },
  {
    id: 6,
    title: "Nujum-Code Ep06 (Season Two) With Seid S.",
    category: "Architecture",
    author: "Seid Shemsu",
    duration: "1:20:40",
    date: "2026-02-06",
    videoUrl: "https://www.youtube.com/watch?v=nHjT8h-vJgA",
    description: "Android Engineer - 'kotlin java'"
  },
  {
    id: 7,
    title: "Nujum-Code Ep07 (Season Two) - With Abdulaziz Shewabu",
    category: "Development",
    author: "Abdulaziz Shewabu",
    duration: "1:16:26",
    date: "2026-02-06",
    videoUrl: "https://www.youtube.com/watch?v=JUqQigftd4U",
    description: "Full Stack Web Developer - 'The main part of software development is learning once you stop learning you will stop being a programmer'"
  },
  {
    id: 8,
    title: "Nujum-Code Ep08 (Season Two) - With Khalid Mohammed",
    category: "Security",
    author: "Khalid Mohammed",
    duration: "55:25",
    date: "2026-02-06",
    videoUrl: "https://www.youtube.com/watch?v=-0MC8oAlHZ0",
    description: "Software and Agent engineer - 'Until death, all defeat is psychological'"
  }
];

export const getLatestEpisode = (episodes) => {
  return episodes.reduce((latest, current) => {
    const latestDate = new Date(latest.date);
    const currentDate = new Date(current.date);

    if (currentDate > latestDate) return current;
    if (currentDate.getTime() === latestDate.getTime() && current.id > latest.id) {
      return current;
    }

    return latest;
  });
};