import StepOne from './StepOne.jsx';
import StepTwo from './StepTwo.jsx';
import StepThree from './StepThree.jsx';
import StepProgress from '../StepProgress.jsx';

import styles from '../../base.module.scss';
// function StepContainer() {
//   return (
//     <div className={styles.stepFormContainer}>
//       <StepProgress />
//       <StepOne />
//       <StepTwo />
//       <StepThree />
//     </div>
//   );
// }

// export default StepContainer;

const StepContainer = ({ currentStep }) => {
  return (
    <div>
      {/* register-form */}
      <section className={styles.stepFormContainer}>
        {currentStep === 1 && <StepOne />}
        {currentStep === 2 && <StepTwo />}
        {currentStep === 3 && <StepThree />}
      </section>
    </div>
  )
}

export default StepContainer