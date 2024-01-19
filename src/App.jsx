
import Footer from './component/Footer';
import Header from './component/Header';
import Hero from './component/Hero';
import ContactForm from './component/ContactForm';
import ConditionalRendering from './component/ConditionalRendering';
import FunctionConditionalRendering from './component/FunctionConditionalRendering';
// import ternaryOperationConditional from './component/ternaryOperationConditional';
import ChildElement from './component/ChildElement';




const App = () => {


  let status = true;

  let marks=90;

  // for loop inside;
  const city = ['Dhaka', 'LONDON', 'Delhi', 'Kolkata']


  return (
    <div>
      {/* <h1>I am Learning react</h1>
      <input placeholder="My Name" />
      <button>Submit</button> */}
      <Header></Header>
      <Hero></Hero>
      <h1>{2+2}</h1> 
      <ContactForm></ContactForm>
      <Footer></Footer>
      <button style={{color:'red'}} onClick={() => alert("Hello")}>Alert Warning</button>


      
      {
        marks>80
        ?
        <h1>Brilliant Result</h1>
        :
        <h1>Avarage Result</h1>
      }

      
      <h1 style={{color: 'green'}}>immediate Inbox function</h1>
        {(()=>{
        if(marks>80 && marks<100)
        {
          return <h1>A+</h1>
        }
        else if(marks>70 && marks<80)
        {
          return <h1>A</h1>
        }
        else if(marks>60 && marks<70)
        {
          return <h1>A-</h1>
        }

        })()}


        <h1 style={{color: 'green'}}>Loop Inside</h1>;
        <ul>
          {
            city.map((item,i)=>{

              return <li key={i.toString()}>{item}</li>

            })
          }
        </ul>
        
        <h1 style={{color: 'green'}}>CONDITIONAL RENDERING</h1>
        <ConditionalRendering />
      

        <h1 style={{color: 'green'}}>CONDITIONAL RENDERING With Funtion</h1>
        <FunctionConditionalRendering></FunctionConditionalRendering>

        <h1 style={{color: 'green'}}>conditional rendering using ternary Operator</h1>
        {status?
            <button>Logout</button>
            :
            <button>Login</button>}


        <h1 style={{color: 'green'}}>CONDITIONAL RENDERING With and condition</h1>
          {status && <button>Logout</button>}
          {/* this means if the status is only true than the button will show up */}


        <h1 style={{color: 'green'}}>pushing element from parent to child</h1>
        <ChildElement title="Learn React" des="In details How to pass props"/>

      </div>
  );

}


export default App;