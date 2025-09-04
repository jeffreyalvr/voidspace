import { useState } from "react";

import ActionButton from "@/components/Button/ActionButton";

import icon_start from "@assets/icons/start.svg";
import icon_pause from "@assets/icons/pause.svg";
import icon_restart from "@assets/icons/restart.svg";
import icon_stop from "@assets/icons/stop.svg";

const Zen = () => {
  // TEMPORARY: placeholder
  const focusTime = 5;

  const [paused, setPaused] = useState(false);

  const handlePause = () => {
    setPaused(!paused);
  };

  return (
    <section className="flex flex-col gap-8 p-6 md:p-4 w-full sm:w-fit h-auto border-black">
      <div className="flex flex-row gap-4 items-center justify-center">
        <h2 className="text-2xl">Focando</h2>
        <span className="font-light text-[var(--fg-color)] px-6 py-2 rounded-4xl border-2 border-[var(--fg-color)]">
          {focusTime} min
        </span>
      </div>
      {/* TEMPORARY: placeholder */}
      <div className="text-9xl tracking-wider text-white text-center">
        00:00
      </div>
      <div className="flex flex-row gap-4 pt-4 items-center justify-center">
        {paused ? (
          <ActionButton text="Retomar" icon={icon_start} click={handlePause} />
        ) : (
          <ActionButton text="Pausar" icon={icon_pause} click={handlePause} />
        )}
        <ActionButton text="Parar" icon={icon_stop} />
        <ActionButton text="Reiniciar" icon={icon_restart} />
      </div>
    </section>
  );
};

export default Zen;
