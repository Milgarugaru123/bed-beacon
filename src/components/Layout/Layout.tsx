import Header from './Header';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      <main className=" flex flex-col justify-center items-center">
        {children}
      </main>
    </div>
  );
};

export default Layout;
