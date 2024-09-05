import { ChangeEvent, FormEvent, useState } from "react";
import styles from "./authform.module.css";
import { NavigateFunction, useNavigate } from "react-router-dom";
// import { AuthFormProps } from '../../types/propTypes';
// import { initAuthState } from '../../initStates/initStates';
// import { IAuth } from '../../types/stateTypes';
// import { useAppDispatch } from '../../redux/hooks';
// import { authUser } from '../../redux/thunkActions';

export default function AuthForm() {
  return <div>AuthForm</div>;
}

// export default function AuthForm({ title, type = 'signin'}: AuthFormProps): JSX.Element {
//   const [inputs, setInputs] = useState<IAuth>(initAuthState);
//   const navigate: NavigateFunction = useNavigate();

//   const changeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
//     setInputs((prev: IAuth): IAuth => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const dispatch = useAppDispatch()

//   const submitHandler = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
//     e.preventDefault();
//     try {
//       console.log(type, inputs)
//       dispatch(authUser({ type, inputs }))
//       navigate('/');
//     } catch (error) {
//       console.log(error)
//     }
//   };

//   return (
//     <form onSubmit={submitHandler} className={styles.wrapper}>
//       <h3 className={styles.head}>{title}</h3>
//       <div className={styles.inputs}>
//         {type === 'signin' && (
//           <>
//             <Input
//               onChange={changeHandler}
//               borderColor='#3f3e3e'
//               type='email'
//               name='email'
//               value={inputs?.email}
//               placeholder='Эл.почта'
//             />
//             <Input
//               onChange={changeHandler}
//               borderColor='#3f3e3e'
//               type='password'
//               name='password'
//               value={inputs?.password}
//               placeholder='Пароль'
//             />
//           </>
//         )}
//         {type === 'signup' && (
//           <>
//             <Input
//               onChange={changeHandler}
//               borderColor='#3f3e3e'
//               name='username'
//               value={inputs?.username}
//               placeholder='Имя пользователя'
//             />
//             <Input
//               onChange={changeHandler}
//               borderColor='#3f3e3e'
//               type='email'
//               name='email'
//               value={inputs?.email}
//               placeholder='Эл.почта'
//             />
//             <Input
//               onChange={changeHandler}
//               borderColor='#3f3e3e'
//               type='password'
//               name='password'
//               value={inputs?.password}
//               placeholder='Пароль'
//             />
//           </>
//         )}
//       </div>
//       <div className={styles.btns}>
//         {type === 'signin' && (
//           <Button type='submit' colorScheme='blue'>
//             Вход
//           </Button>
//         )}
//         {type === 'signup' && (
//           <Button type='submit' colorScheme='blue'>
//             Регистрация
//           </Button>
//         )}
//       </div>
//     </form>
//   );
// }
