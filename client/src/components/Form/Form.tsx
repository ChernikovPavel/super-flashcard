import { ChangeEvent, FormEvent, memo, useContext, useState } from 'react';
import styles from './Form.module.css';
import { Input, Button } from '@chakra-ui/react';
import { initInputsState } from '../../initStates/initStates';
import { IInputs } from '../../types/stateTypes';
import { AppContext } from '../../context/AppContext';
import { useAppDispatch } from '../../redux/hooks';
import { addEntrie } from '../../redux/thunkActions';

// * HOC - (компонент высшего порядка)

export default memo(function Form(): JSX.Element {
  console.log('Form')

  const { user } = useContext(AppContext)

  const [inputs, setInputs] = useState<IInputs>(initInputsState);

  const changeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    setInputs((prev: IInputs): IInputs => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const dispatch = useAppDispatch()

  const submitHandler = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    dispatch(addEntrie(inputs))
    setInputs(initInputsState)
  };

  return (
    <form onSubmit={submitHandler} className={styles.wrapper}>
      <h3 className={styles.head}>Добавь своего кита:</h3>
      <div className={styles.inputs}>
        <Input
          onChange={changeHandler}
          borderColor='#3f3e3e'
          name='name'
          value={inputs.name}
          placeholder='Имя'
        />
        <Input
          onChange={changeHandler}
          borderColor='#3f3e3e'
          name='description'
          value={inputs.description}
          placeholder='Описание'
        />
      </div>
      {user.username ? (
      <div className={styles.btns}>
        <Button type='submit' colorScheme='blue'>
          Создать
        </Button>
      </div>
      ) : (
        <h3 style={{color: 'red'}}>Пожалуйста, авторизуйтесь!</h3>
      )}
    </form>
  );
})
