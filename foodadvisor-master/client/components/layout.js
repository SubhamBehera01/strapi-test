import delve from 'dlv';
import Footer from './global/Footer';
import Navbar from './global/Navbar';
import PreviewBanner from './global/PreviewBanner';
import Seo from './seo';

const Layout = ({ children, global, pageData, preview, type }) => {
  return (
    <div>
      <Seo seo={delve(pageData, 'attributes.seo')} />
      {preview && <PreviewBanner />}
      <Navbar {...global} pageData={pageData} type={type} />
      {children}
      <Footer {...global} pageData={pageData} />
      <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
          background-color: #f8f9fa;
          color: #212529;
        }
        a {
          color: #007bff;
          text-decoration: none;
        }
        a:hover {
          text-decoration: underline;
        }
      `}</style>
      <style jsx>{`
        .layout {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }
        main {
          flex: 1;
        }
      `}</style>
    </div>
  );
};

export default Layout;
