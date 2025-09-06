import { useEffect } from "react";

import useFocusStore from "@store/useFocusStore";

import { Statuses } from "@constants";
import { displayTimeFormat } from "@utils/displayTimeFormat";

import { ActionButton } from "@components/Button";

import icon_start from "@assets/icons/start.svg";
import icon_pause from "@assets/icons/pause.svg";
import icon_restart from "@assets/icons/restart.svg";
import icon_stop from "@assets/icons/stop.svg";
import { use } from "react";

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

  useEffect(() => {
    if (focusStatus === Statuses.STOPPED || focusStatus === Statuses.UNSET) {
      document.title = "voidspace";
    } else if (focusStatus === Statuses.RUNNING) {
      document.title = `voidspace - ${displayTimeFormat(remainingTime)}`;
    } else if (focusStatus === Statuses.PAUSED) {
      document.title = "voidspace - (Pausado)";
    }
  }, [focusStatus, remainingTime]);

  const handleShowTimeSelector = () => {
    setFocusStatus(Statuses.UNSET);
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
