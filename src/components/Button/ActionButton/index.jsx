const ActionButton = ({ text, click }) => {
  return (
    <button
      role="button"
      onClick={() => click(text)}
      className="bg-[var(--action-accent-color)] hover:bg-[var(--action-accent-color)]/75 w-auto h-[60px] md:h-[80px] px-8 rounded-4xl sm:text-xl md:text-2xl text-white cursor-pointer"
    >
      {text}
    </button>
  );
};

export default ActionButton;
