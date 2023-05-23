import Navigation from "../navigation/navigation";

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <Navigation />
      </header>

      <main>{children}</main>

      <footer>Pokédex créé en ReactJS par Romain et Damien</footer>
    </>
  );
};

export default Layout;
