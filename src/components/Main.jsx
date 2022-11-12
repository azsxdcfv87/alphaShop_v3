import StepContainer from './Steps/StepContainer.jsx';
import CartContainer from './Cart/CartContainer.jsx';
import styles from './base.module.scss';


function Main() {
  return (
    <div className="Main">
      <main className={styles.siteMain}>
        <div className={styles.mainContainer}>
          <StepContainer />
          <CartContainer />
        </div>
      </main>
    </div>
  );
}

export default Main;