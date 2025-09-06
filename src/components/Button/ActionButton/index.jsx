const ActionButton = ({ text, click, icon, invertIconColor }) => {
  return (
    <button
      role="button"
      onClick={click}
      className="flex flex-row justify-center items-center px-12 w-fit h-[70px] rounded-4xl sm:text-xl md:text-2xl text-white cursor-pointer bg-[var(--action-accent-color)] hover:bg-[var(--action-accent-color)]/75 "
      title={text}
    >
      {icon ? (
        <img
          src={icon}
          className={`w-[40px] h-[40px] ${invertIconColor ? "invert" : ""}`}
          alt={text}
        />
      ) : (
        text
      )}
    </button>
  );
};

export default ActionButton;
