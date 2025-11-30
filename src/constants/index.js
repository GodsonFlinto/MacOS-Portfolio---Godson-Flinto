const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Certificates", // was "Safari"
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery", // was "Photos"
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive", // was "Trash"
    icon: "trash.png",
    canOpen: false,
  },
];

const blogPosts = [
  {
    id: 1,
    date: "Jul-Oct, 2024",
    title: "NPTEL Certification : Internet of Things",
    image: "/images/iot.jpg",
    link: "/images/iot.jpg",
  },
  {
    id: 2,
    date: "Jul-Oct, 2023",
    title: "NPTEL Certification : Problem Solving Through Programming in C",
    image: "/images/cpro.jpg",
    link: "/images/cpro.jpg",
  },
  {
    id: 3,
    date: "Jan-Apr, 2024",
    title: "NPTEL Certification : The Joy of Computing using Python",
    image: "/images/python.jpg",
    link: "/images/python.jpg",
  },
];

const techStack = [
  {
    category: "Frontend",
    items: ["React.js"],
  },
  {
    category: "Styling",
    items: ["Tailwind CSS", "CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express"],
  },
  {
    category: "Database",
    items: ["MongoDB", "MySQL"],
  },
  {
    category: "Dev Tools",
    items: ["Git", "GitHub"],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/GodsonFlinto",
  },
  {
    id: 2,
    text: "Whatsapp",
    icon: "/icons/whatsapp.svg",
    bg: "#4bcb63",
    link: "https://wa.me/918072017039",
  },
  {
    id: 3,
    text: "Instagram",
    icon: "/icons/instagram.svg",
    bg: "#ff866b",
    link: "https://www.instagram.com/godsonflinto3/",
  },
  {
    id: 4,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/in/godson-flinto-j-516867267/",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  // {
  //   id: 2,
  //   icon: "/icons/gicon2.svg",
  //   title: "Memories",
  // },
  // {
  //   id: 3,
  //   icon: "/icons/file.svg",
  //   title: "Places",
  // },
  // {
  //   id: 4,
  //   icon: "/icons/gicon4.svg",
  //   title: "People",
  // },
  // {
  //   id: 5,
  //   icon: "/icons/gicon5.svg",
  //   title: "Favorites",
  // },
];

const gallery = [
  {
    id: 1,
    img: "/images/cricket.jpg",
  },
  {
    id: 3,
    img: "/images/roborg.jpg",
  },
  {
    id: 2,
    img: "/images/team.jpg",
  },
  {
    id: 4,
    img: "/images/car.jpg",
  },
];

export {
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  techStack,
  socials,
  photosLinks,
  gallery,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1
    {
      id: 5,
      name: "GF Cart - Ecommerce Platform",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5", // icon position inside Finder
      windowPosition: "top-[5vh] left-5", // optional: Finder window position
      children: [
        {
          id: 1,
          name: "GF-Cart.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "GF-Cart is a full-featured e-commerce web application built using the MERN stack (MongoDB, Express.js, React, Node.js).",
            "Users can browse products, add them to the cart, and securely place orders with a seamless and responsive interface.",
            "The application also includes an admin panel for managing inventory, tracking sales, and handling orders efficiently.",
            "It ensures a smooth shopping experience with fast performance, real-time updates, and a modern UI design.",
          ],
        },
        {
          id: 2,
          name: "GF-Cart Demo",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://portfolio-godson.vercel.app/",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "GF-Cart.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project-1.png",
        },
      ],
    },

    // ▶ Project 2
    {
      id: 6,
      name: "Playly - Music Player",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 right-80",
      windowPosition: "top-[20vh] left-7",
      children: [
        {
          id: 1,
          name: "Playly.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "Playly is an interactive web-based music player built with React.js, designed for smooth and engaging music playback.",
            "Users can play, pause, skip tracks, and manage playlists of their favorite songs with ease.",
            "The interface updates dynamically in real-time and is fully responsive across devices, providing a modern and intuitive user experience.",
            "It leverages React hooks for state management and seamless control over music playback.",
          ],
        },
        {
          id: 2,
          name: "Playly Demo",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://portfolio-godson.vercel.app/",
          position: "top-20 left-20",
        },
        {
          id: 4,
          name: "Playly.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: "/images/project-2.png",
        },
      ],
    },

    // ▶ Project 3
    {
      id: 7,
      name: "Contact Management System",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-80",
      windowPosition: "top-[33vh] left-7",
      children: [
        {
          id: 1,
          name: "Contact Management System.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "The Contact Management System is a MERN-based application that allows users to store, manage, and organize contacts efficiently.",
            "It provides full CRUD (Create, Read, Update, Delete) functionality and secure authentication for user data protection.",
            "Users can categorize contacts, edit information, and manage their personal and professional contacts seamlessly.",
            "The app features a clean and intuitive interface, responsive design, and RESTful APIs for smooth client-server communication.",
          ],
        },
        {
          id: 2,
          name: "Contact Management System Demo",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://portfolio-godson.vercel.app/",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "Contact Management System.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project-3.png",
        },
      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "me.png",
      icon: "/images/gods.jpg",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/gods.jpg",
    },
    {
      id: 2,
      name: "casual-me.png",
      icon: "/images/flinto.jpg",
      kind: "file",
      fileType: "img",
      position: "top-28 right-72",
      imageUrl: "/images/flinto.jpg",
    },
    {
      id: 3,
      name: "trophy.png",
      icon: "/images/trophy.jpg",
      kind: "file",
      fileType: "img",
      position: "top-52 left-80",
      imageUrl: "/images/trophy.jpg",
    },
    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "Meet the Developer Behind the Code",
      image: "/images/godson.jpg",
      description: [
        "Hey! I’m Adrian 👋, a web developer who enjoys building sleek, interactive websites that actually work well.",
        "I specialize in JavaScript, React and I love making things feel smooth, fast, and just a little bit delightful.",
        // "I’m big on clean UI, good UX, and writing code that doesn’t need a search party to debug.",
        // "Outside of dev work, you'll find me tweaking layouts at 2AM, sipping overpriced coffee, or impulse-buying gadgets I absolutely convinced myself I needed 😅",
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      // you can add `href` if you want to open a hosted resume
      // href: "/your/resume/path.pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/trash-1.png",
    },
    {
      id: 2,
      name: "trash2.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: "/images/trash-2.png",
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };
