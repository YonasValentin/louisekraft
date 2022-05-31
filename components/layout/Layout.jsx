import NavBar from '../navbar/NavBar';

function Layout({ children }) {
  return (
    <main>
      <NavBar />
      {children}
    </main>
  );
}

export default Layout;
