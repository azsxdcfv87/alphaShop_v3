import Progress from "./Progress";
import Form from "./Form";
import ProgressButtom from "./ProgressButtom";
const Step = () => {
  return (
    <>
      <section class="register-container col col-lg-6 col-sm-12" data-phase="1" data-total-price="0">
        {/* <!-- register-title --> */}
        <h2 class="register-title col col-12">結帳</h2>

        {/* <!-- register-progress --> */}
        <Progress />

        {/* <!-- register-form --> */}
        <Form />
      </section>
      {/* <!-- progress-control --> */}
      <ProgressButtom />
    </>
  )
}
export default Step;