import "./navbar.module.css";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { Tabs } from "@radix-ui/themes";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { login, register } from "../../redux/slices/authSlice";
import { logoutUser } from "../../redux/thunkActions";

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
                onClick={() => navigate("/account")}
              >
                Статистика
              </Tabs.Trigger>
              <Tabs.Trigger value="logout" onClick={logoutHandler}>
                Выход
              </Tabs.Trigger>
            </>
          ) : (
            <>
              <Tabs.Trigger value="login" onClick={() => dispatch(login())}>
                Авторизация
              </Tabs.Trigger>
              <Tabs.Trigger
                value="register"
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
