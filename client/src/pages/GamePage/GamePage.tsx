import React from 'react';
import style from './gamepage.module.css';
import * as Separator from '@radix-ui/react-separator';
export default function GamePage(): JSX.Element {
  const Mock = (): JSX.Element => (
    <div>
      <div className={style.flex}>
        <span>боковая панель</span>
      </div>
      <Separator.Root
        className={style.separator}
        decorative
        orientation="horizontal"
      />
    </div>
  );

  const Mock2 = (): JSX.Element => (
    <div className={style.flex}>
      <button>100</button>
      <button>200</button>
      <button>300</button>
      <button>400</button>
      <button>500</button>
    </div>
  );

  const arr = [];
  const arr2 = [];
  for (let i = 0; i < 5; i += 1) {
    arr.push(Mock());
    arr2.push(Mock2());
  }
  return (
    <div className={style.field}>
      <div className={style.sidepanel}>{arr}</div>
      <div className={style.mainpanel}>{arr2}</div>
    </div>
  );
}
