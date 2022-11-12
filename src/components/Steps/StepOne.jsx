import React from 'react';
import styles from './StepOne.module.scss';
import '../base.module.scss';
import {Area} from './Area.jsx';

export function SelectBox({children}) {
  return (
    <div className={styles.selectContainer}>
      <select>
        {children}
      </select>
    </div>
  );
}


export function InputGroup({global, labelTitle, children}) {
  return (
    <div className={styles.inputGroup + global}>
      <label className={styles.inputLabel}>{labelTitle}</label>
      {children}
    </div>
  );
}


function StepOne() {
  return (
    <section className={styles.formBody}>
      <div className="col col-12">
        <InputGroup global=" input-w-2" labelTitle="稱謂">
          <SelectBox>
            <option value="mr">先生</option>
            <option value="ms">女士</option>
            <option value="mx">不明</option>
          </SelectBox>
        </InputGroup>
        <InputGroup global=" input-w-4" labelTitle="姓名">
          <input type="text" placeholder="請輸入姓名"/>
        </InputGroup>
      </div>
      <div className="col col-12">
        <InputGroup global=" input-w-3" labelTitle="電話">
          <input type="tel" placeholder="請輸入行動電話"/>
        </InputGroup>
        <InputGroup global=" input-w-3" labelTitle="Email">
          <input type="email" placeholder="請輸入電子郵件"/>
        </InputGroup>
      </div>
      <div className="col col-12">
        <InputGroup global=" input-w-2" labelTitle="縣市">
          <SelectBox>
            <option value="">請選擇縣市</option>
            {Area.map(destrict => 
              <option value={destrict.value} key={destrict.value}>{destrict.name}</option>
            )}     
          </SelectBox>
        </InputGroup>
        <InputGroup global=" input-w-4" labelTitle="地址">
          <input type="text" placeholder="請輸入地址"/>
        </InputGroup>
      </div>

    </section>
  );
}

//導出 StepOne 表單
function StepOneWrapper() {
  return (
    <form className={styles.formContainer + " col col-12"}>
      <h3 className={styles.formTitle}>寄送地址</h3>
      <StepOne />
    </form>
  );
}

export default StepOneWrapper;