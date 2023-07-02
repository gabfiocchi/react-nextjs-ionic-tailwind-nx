import styles from './index.module.scss';
import { Button } from '@ui';

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.scss file.
   */
  return (
    <div className={styles.page}>
      <div className="wrapper">
        <div className="container">
          <div id="welcome">
            <Button>Hello!</Button>
            <h1>
              <span> Hello there, </span>
              Welcome website 👋
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
