import { ChangeEvent, FormEvent, useState } from "react";
import styles from "./authform.module.css";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { initAuthState } from "../../redux/initStates/initStates";
import { IAuth } from "../../redux/types/stateTypes";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { authUser } from "../../redux/thunkActions";
import * as Form from "@radix-ui/react-form";

export default function AuthForm(): JSX.Element {
  const [inputs, setInputs] = useState<IAuth>(initAuthState);

  console.log(inputs);
  

  const { authStatus } = useAppSelector((state) => state.authSlice);

  const dispatch = useAppDispatch();

  const navigate: NavigateFunction = useNavigate();

  const changeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    setInputs(
      (prev: IAuth): IAuth => ({ ...prev, [e.target.name]: e.target.value })
    );
  };

  const submitHandler = async (
    e: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    try {
      dispatch(authUser({ authStatus, inputs }));
      setInputs(initAuthState);
      navigate("/game");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form.Root onSubmit={submitHandler} className={styles.Root}>
      {authStatus === "login" ? <h2>Авторизация</h2> : (<>
        <h2>Регистрация</h2>
        <Form.Field className={styles.Field} name="name">
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "space-between",
            }}
          >
            <Form.Message className={styles.Message} match="valueMissing">
              Введите ваше имя
            </Form.Message>
          </div>
          <Form.Control asChild>
            <input
              className={styles.Input}
              onChange={changeHandler}
              type="text"
              name="name"
              value={inputs?.name}
              placeholder="Ваше имя"
              required
            />
          </Form.Control>
        </Form.Field>
        </>)}
      <>
        <Form.Field className={styles.Field} name="email">
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "space-between",
            }}
          >
            <Form.Message className={styles.Message} match="valueMissing">
              Введите ваш email
            </Form.Message>
            <Form.Message className={styles.Message} match="typeMismatch">
              Укажите корректный email
            </Form.Message>
          </div>
          <Form.Control asChild>
            <input
              className={styles.Input}
              onChange={changeHandler}
              type="email"
              name="email"
              value={inputs?.email}
              placeholder="Электронная почта"
              required
            />
          </Form.Control>
        </Form.Field>
        <Form.Field className={styles.Field} name="password">
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "space-between",
            }}
          >
            <Form.Message className={styles.Message} match="valueMissing">
              Введите ваш пароль
            </Form.Message>
            <Form.Message className={styles.Message} match="typeMismatch">
              Пожалуйста корректный пароль
            </Form.Message>
          </div>
          <Form.Control asChild>
            <input
              className={styles.Input}
              onChange={changeHandler}
              type="password"
              name="password"
              value={inputs?.password}
              placeholder="Пароль"
              required
            />
          </Form.Control>
        </Form.Field>
      </>

      <Form.Submit asChild>
        {authStatus === "login" ? (
          <button className={styles.Button}>Войти</button>
        ) : (
          <button className={styles.Button}>Зарегистрироваться</button>
        )}
      </Form.Submit>
    </Form.Root>
  );
}
