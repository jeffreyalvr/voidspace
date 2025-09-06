import { useEffect } from "react";

import useFocusStore from "@store/useFocusStore";

import { Statuses } from "@constants";

import ActionButton from "@components/Button/ActionButton";

import icon_start from "@assets/icons/start.svg";
import icon_pause from "@assets/icons/pause.svg";
import icon_restart from "@assets/icons/restart.svg";
import icon_stop from "@assets/icons/stop.svg";

const Zen = () => {
  const {
    selectedFocusTime,
    focusStatus,
    setFocusStatus,
    remainingTime,
    stopTimer,
    resetTimer,
    tick,
  } = useFocusStore();

  useEffect(() => {
    const interval = setInterval(() => {
      tick();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleShowTimeSelector = () => {
    setFocusStatus(Statuses.UNSET);
  };

  const displayTimeFormat = (totalSeconds) => {
    if (isNaN(totalSeconds) || totalSeconds < 0) totalSeconds = 0;

    const hrs = Math.floor(totalSeconds / 3600);
    const mins = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;

    const paddedHrs = String(hrs).padStart(2, "0");
    const paddedMins = String(mins).padStart(2, "0");
    const paddedSecs = String(secs).padStart(2, "0");

    return hrs > 0
      ? `${paddedHrs}:${paddedMins}:${paddedSecs}` // HH:MM:SS
      : `${paddedMins}:${paddedSecs}`; // MM:SS
  };

  return (
    <section className="flex flex-col gap-8 p-6 md:p-4 w-full sm:w-fit h-auto border-black">
      <div className="h-fit flex flex-row gap-4 items-center justify-center">
        {focusStatus === Statuses.RUNNING && (
          <h2 className="text-2xl text-white">Focando</h2>
        )}
        {focusStatus === Statuses.PAUSED && (
          <h2 className="text-2xl text-[var(--red-color)]">Pausado</h2>
        )}
        {focusStatus === Statuses.STOPPED && (
          <h2 className="text-2xl text-[var(--green-color)]">FINALIZADO</h2>
        )}
        <span className="font-light text-[var(--fg-color)] px-6 py-2 rounded-4xl border-2 border-[var(--fg-color)]">
          {selectedFocusTime >= 60
            ? `${selectedFocusTime / 60} h`
            : `${selectedFocusTime} min`}
        </span>
      </div>
      <div
        className={`text-7xl sm:text-8xl md:text-9xl tracking-wider text-center
            ${focusStatus === Statuses.RUNNING && "text-white"}
            ${focusStatus === Statuses.PAUSED && "text-[var(--red-color)]"}
            ${focusStatus === Statuses.STOPPED && "text-[var(--green-color)]"}
        `}
      >
        {displayTimeFormat(remainingTime)}
      </div>
      <div className="flex flex-row gap-4 pt-4 items-center justify-center">
        {focusStatus === Statuses.RUNNING && (
          <ActionButton
            text="Pausar"
            icon={icon_pause}
            invertIconColor
            click={() => setFocusStatus(Statuses.PAUSED)}
          />
        )}
        {focusStatus === Statuses.PAUSED && (
          <ActionButton
            text="Retomar"
            icon={icon_start}
            invertIconColor
            click={() => setFocusStatus(Statuses.RUNNING)}
          />
        )}
        {focusStatus !== Statuses.STOPPED && (
          <ActionButton
            text="Parar"
            icon={icon_stop}
            invertIconColor
            click={stopTimer}
          />
        )}
        <ActionButton
          text="Reiniciar"
          icon={icon_restart}
          invertIconColor
          click={resetTimer}
        />
        {focusStatus === Statuses.STOPPED && (
          <ActionButton text="Nova tarefa" click={handleShowTimeSelector} />
        )}
      </div>
    </section>
  );
};

export default Zen;
