import AuthForm from '../../components/AuthForm/AuthForm';
// import { UserSetuser } from '../../types/propTypes';
import styles from './authpage.module.css';

export default function AuthPage(): JSX.Element {
  return (
    <div className={styles.wrapper}>
      <AuthForm title='Войти' type='signin' />
    </div>
  );
}
