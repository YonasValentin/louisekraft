import NavBar from '../navbar/NavBar';

function Layout({ children }) {
  return (
    <main className='layout'>
      <div className='layout__container'>
        <NavBar />
        {children}
      </div>
    </main>
  );
}

export default Layout;
