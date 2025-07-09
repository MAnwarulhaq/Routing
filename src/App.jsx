import Routing from "./Routing/Routing";
import PrefixRoute from "./RoutePrefix/PrefixRoute";

function App() {
  return (
    
      <div>
        {/* <Routing /> */}
        <PrefixRoute />
      </div>
    
  );
}

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#1e1e2f',
    padding: '10px 20px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
  },
  logo: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: '20px',
  },
  links: {
    display: 'flex',
    gap: '15px',
  },
  link: {
    color: '#ffffff',
    textDecoration: 'none',
    padding: '8px 12px',
    borderRadius: '6px',
    transition: '0.3s',
  },
  pageContainer: {
    padding: '20px',
  },
};

styles.link[':hover'] = {
  backgroundColor: '#3b3b5c',
};

export default App;
