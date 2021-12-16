import Navbar from './component/Navbar';
import About from './component/About';

// import TextForm from './component/TextForm';  

function App() {
  return (
    <>
 <Navbar title="Demo"/>
 <div className="container">
 {/* <TextForm heading="Enter The Text"/> */}       
<About></About>
 </div>
 
    </>
  );
}

export default App;
