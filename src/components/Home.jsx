import { locations } from "#constants";
import useLocationStore from "#store/location";
import useWindowStore from "#store/window";
import { useGSAP } from "@gsap/react";
import clsx from "clsx";
import { Draggable } from "gsap/Draggable";
import React from "react";

const projects = locations.work?.children ?? [];

const Home = () => {
  const { setActiveLocation } = useLocationStore();
  const { openWindow } = useWindowStore();
  const handleOpenProjectFolder = (project) => {
    setActiveLocation(project);
    openWindow('finder', project);
  };
  useGSAP(() => {
    Draggable.create(".folder");
  }, []);

  return (
    <section id="home">
      <ul>
        {projects.map((project) => (
          <li
            key={project.id}
            className={clsx("group folder", project.windowPosition)}
            onClick={() => handleOpenProjectFolder(project)}
          >
            <img src="/images/folder.png" alt={project.name} className="w-10 h-10"/>
            <p className="text-xs">{project.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Home;
