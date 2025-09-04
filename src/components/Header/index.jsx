import Footer from "@components/Footer";

const Header = () => {
  return (
    <header className="flex flex-col gap-2 py-12 items-center justify-center w-full h-auto bg-[var(--header-color)]">
      <h1 className="text-4xl font-normal tracking-wider text-[var(--title-color)]">
        voidspace
      </h1>
      <Footer />
    </header>
  );
};

export default Header;
