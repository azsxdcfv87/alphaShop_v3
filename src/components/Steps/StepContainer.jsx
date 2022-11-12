import StepOneWrapper from './StepOne.jsx';
import StepProgress from './StepProgress.jsx';

import styles from '../base.module.scss';


function StepContainer() {
  return (
    <div className={styles.stepFormContainer}>
      <StepProgress />
      <StepOneWrapper />
      {/* not work */}
      {/* <StepTwo />
      <StepThree /> */}
    </div>
  );
}

export default StepContainer;