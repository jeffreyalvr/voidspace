import useFocusStore from "@store/useFocusStore";

import { Statuses } from "@constants";

import Button from "@components/Button";
import ActionButton from "@components/Button/ActionButton";

const TimeSelector = () => {
  const {
    selectableValues,
    selectedFocusTime,
    setSelectedFocusTime,
    startTimer,
  } = useFocusStore();

  const handleFocusTime = (time) => {
    setSelectedFocusTime(time);
  };

  return (
    <section className="flex flex-col gap-6 p-6 md:p-4 w-full md:w-fit h-auto border-black">
      <div className="flex flex-row gap-4 items-center">
        <h2 className="text-2xl">Tempo de foco</h2>
        <span className="font-light text-[var(--fg-color)]">
          /{" "}
          {selectedFocusTime >= 60
            ? `${selectedFocusTime / 60} h`
            : `${selectedFocusTime} min`}
        </span>
      </div>
      <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-2 w-full">
        {selectableValues.map((time, i) => (
          <Button
            key={i}
            text={time}
            toggled={selectedFocusTime === time}
            click={() => handleFocusTime(time)}
          />
        ))}
      </div>
      <div className="flex flex-row gap-4 pt-4 items-center justify-center">
        <ActionButton text="Iniciar" click={() => startTimer()} />
      </div>
    </section>
  );
};

export default TimeSelector;
