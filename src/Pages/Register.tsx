import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import Page5 from './Page5'

const Register = ()=>{

    const x = JSON.parse(localStorage.getItem("page")!)
    console.log("register", x);
    
    return(
    <div>
        {
        x === 1 ? (<Page1/>) : x === 2 ? (<Page2/>) : x === 3 ? (<Page3/>) : x === 4 ? (<Page4/>) : x === 5 ? (<Page5/>) : null
        }
        {/* <Page1/> */}
    </div>
    )
}

export default Register