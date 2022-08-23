import Header from './header'
import Footer from './footer'

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout:React.FC<LayoutProps> = (props) => {
  return (
    <>
      <Header />
      <main>
        {props.children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
