const Footer = () => {
  return (
    <footer>
      <span className="text-center w-full inline-block text-lg sm:text-xl text-[var(--fg-color)]">
        feito por{" "}
        <a
          href="https://jeffreyalvr.dev"
          target="_blank"
          rel="noopener noreferrer"
          title="Clique para abrir o meu GitHub"
          className="text-[var(--accent-color)] underline hover:text-[var(--action-accent-color)]"
        >
          @jeffreyalvr
        </a>
      </span>
    </footer>
  );
};

export default Footer;
