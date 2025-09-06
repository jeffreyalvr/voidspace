const Button = ({ text, toggled, action, click }) => {
  return (
    <button
      role="button"
      onClick={click}
      className={`${
        toggled
          ? "bg-[var(--action-accent-color)] hover:bg-[var(--action-accent-color)]/75"
          : "bg-[var(--accent-color)] hover:bg-[var(--accent-color)]/75"
      } max-w-[90px] w-auto h-[60px] md:w-[90px] md:h-[70px] overflow-clip rounded-4xl sm:text-xl md:text-2xl text-white cursor-pointer`}
    >
      {text}
    </button>
  );
};

export default Button;
