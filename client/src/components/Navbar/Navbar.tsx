import { AxiosResponse } from "axios";
import axiosInstance, { setAccessToken } from "../../../axiosInstance";
import styles from "./navbar.module.css";
import { Link, NavigateFunction, useNavigate } from "react-router-dom";
// import { initUserState } from '../../initStates/initStates';
// import { AppContext } from '../../context/AppContext';
import { useAppSelector } from "../../redux/hooks";

export default function Navbar(): JSX.Element {
  const navigate: NavigateFunction = useNavigate();

  const { user } = useAppSelector((state) => state.userSlice);

  const logoutHandler = async (): Promise<void> => {
    const response: AxiosResponse = await axiosInstance.get(
      `${import.meta.env.VITE_API}/auth/logout`
    );
    if (response.status === 200) {
      // setUser(initUserState);
      setAccessToken("");
      navigate("/");
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        <Link to="/">На главную</Link>
      </div>
      <div className={styles.right}>
        {user?.username ? (
          <>
            <Link to="/">{user.username}</Link>
            <Link to="/" onClick={logoutHandler}>
              Выйти
            </Link>
          </>
        ) : (
          <>
            <Link to="/signin">Войти</Link>
            <Link to="/signup">Регистрация</Link>
          </>
        )}
      </div>
    </div>
  );
}
