import Address from "./Address";
import Shipping from "./Shipping";
import CreditCard from "./CreditCard";
const Form = ()=>{
  return (
    <section class="form-container col col-12">
      {/* <!-- address phase --> */}
      <Address/>
      {/* <!-- shipping phase --> */}
      <Shipping/>

      {/* <!-- credit-card phase --> */}
      <CreditCard/>
    </section>
  )
}
export default Form;