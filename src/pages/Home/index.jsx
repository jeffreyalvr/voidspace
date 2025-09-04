import { useState } from "react";

import Button from "@/components/Header/Button";
import ActionButton from "@/components/Header/Button/ActionButton";

const Home = () => {
  const [focusTime, setFocusTime] = useState(5);

  const selectableTimes = [5, 10, 15, 25, 30, 45, 60, 90, 120, 180, 240, 300];

  const handleFocusTime = (time) => {
    if (time < 5 || time > 300) return;
    setFocusTime(time);
  };

  return (
    <section className="flex flex-col gap-6 p-6 md:p-4 w-full sm:w-fit h-auto border-black">
      <div className="flex flex-row gap-4 items-center">
        <h2 className="text-2xl">Tempo de foco</h2>
        <span className="font-light text-[var(--fg-color)]">
          / {focusTime >= 60 ? `${focusTime / 60} h` : `${focusTime} min`}
        </span>
      </div>
      <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-2 w-full">
        {selectableTimes.map((time, i) => (
          <Button
            key={i}
            text={time}
            toggled={focusTime}
            click={handleFocusTime}
          />
        ))}
      </div>
      <div className="flex flex-row gap-4 pt-4 items-center justify-center">
        <ActionButton text="Iniciar" />
      </div>
    </section>
  );
};

export default Home;
