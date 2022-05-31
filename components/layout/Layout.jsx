import NavBar from '../navbar/NavBar';

function Layout({ children }) {
  return (
    <main className='layout'>
      <NavBar />
      {children}
    </main>
  );
}

export default Layout;
