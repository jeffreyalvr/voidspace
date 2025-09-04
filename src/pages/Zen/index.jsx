import ActionButton from "@/components/Button/ActionButton";

const Zen = () => {
  // TEMPORARY: placeholder
  const focusTime = 5;

  return (
    <section className="flex flex-col gap-4 p-6 md:p-4 w-full sm:w-fit h-auto border-black">
      <div className="flex flex-row gap-4 items-center">
        <h2 className="text-2xl">Em foco</h2>
        <span className="font-light text-[var(--fg-color)]">
          / {focusTime} min
        </span>
      </div>
      {/* TEMPORARY: placeholder */}
      <div className="text-9xl tracking-wider">00:00</div>
      <div className="flex flex-row gap-4 pt-4 items-center justify-center">
        <ActionButton text="Pausar" />
        <ActionButton text="Parar" />
      </div>
    </section>
  );
};

export default Zen;
