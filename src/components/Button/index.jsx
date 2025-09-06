export const Button = ({
  text,
  title,
  toggled,
  click,
  icon,
  invertIconColor,
}) => {
  return (
    <button
      role="button"
      onClick={click}
      title={title || text}
      className={`${
        toggled
          ? "bg-[var(--accent-color)] hover:bg-[var(--accent-color)]/75"
          : "border-[var(--action-accent-color)] hover:border-[var(--action-accent-color)]/75"
      } ${
        icon ? "px-6 w-fit" : "max-w-[90px] w-auto md:w-[90px]"
      } border-2 flex items-center justify-center h-[70px] md:h-[70px] overflow-clip rounded-4xl sm:text-xl md:text-2xl text-white cursor-pointer`}
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

export const ActionButton = ({ text, click, icon, invertIconColor }) => {
  return (
    <button
      role="button"
      onClick={click}
      className="flex flex-row justify-center items-center px-6 sm:px-12 w-fit h-[70px] rounded-4xl sm:text-xl md:text-2xl text-white cursor-pointer bg-[var(--action-accent-color)] hover:bg-[var(--action-accent-color)]/75 "
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
