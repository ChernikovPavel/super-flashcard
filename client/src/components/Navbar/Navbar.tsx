import "./navbar.module.css";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { Tabs } from "@radix-ui/themes";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { login, register } from "../../redux/slices/authSlice";
import { logoutUser } from "../../redux/thunkActions";
import styles from "./navbar.module.css";

export default function Navbar(): JSX.Element {
  const navigate: NavigateFunction = useNavigate();

  const { user } = useAppSelector((state) => state.userSlice);

  const dispatch = useAppDispatch();

  const logoutHandler = async (): Promise<void> => {
    dispatch(logoutUser());
    navigate("/");
  };

  return (
    <>
      <Tabs.Root defaultValue="login">
        <Tabs.List>
          {user?.email ? (
            <>
              <Tabs.Trigger
                value="account"
                className={styles.button}
                onClick={() => navigate("/account")}
              >
                Статистика
              </Tabs.Trigger>
              <Tabs.Trigger
                value="logout"
                className={styles.button}
                onClick={logoutHandler}
              >
                Выход
              </Tabs.Trigger>

              <Tabs.Trigger
                value="game"
                className={styles.button}
                onClick={() => navigate("/game")}
              >
                игра
              </Tabs.Trigger>
            </>
          ) : (
            <>
              <Tabs.Trigger
                value="login"
                className={styles.button}
                onClick={() => dispatch(login())}
              >
                Авторизация
              </Tabs.Trigger>
              <Tabs.Trigger
                value="register"
                className={styles.button}
                onClick={() => dispatch(register())}
              >
                Регистрация
              </Tabs.Trigger>
            </>
          )}
        </Tabs.List>
      </Tabs.Root>
    </>
  );
}
