import './StepOne.scss'

function Infomaction ({ divname, title, holder }) {
  return (
    <div className={divname}>
      <label>{title}</label>
      <input type='text' placeholder={holder} />
    </div>
  )
}

function StepOne ({ step }) {
  if (step !== 1) {
    return null
  }
  else {
    return (
      <div className='stepOne'>
        <h2 className='partTitle'>寄送地址</h2>
        <div className='addressDetail'>
          <div className='gender'><label>稱謂</label>
            <div className='selectWrapper'>
              <select id='a-type' required>
                <option value='man'>先生</option>
                <option value='woman'>小姐</option>
                <option value='other'>其他</option>
              </select>
            </div>
          </div>

          <Infomaction
            divname='realName'
            title='姓名'
            holder='請輸入姓名'
          />

          <Infomaction
            divname='mobile'
            title='電話'
            holder='請輸入行動電話'
          />

          <Infomaction
            divname='email'
            title='Email'
            holder='請輸入電子郵件'
          />

          <div className='county'><label>縣市</label>
            <div className='selectWrapper'>
              <select id='aType'>
                <option value={'default'} disabled>請選擇縣市</option>
                <option value={'taipei'}>台北市</option>
                <option value={'taichung'}>台中市</option>
                <option value={'kaohsiung'}>高雄市</option>
              </select>
            </div>
          </div>

          <Infomaction
            divname='address'
            title='地址'
            holder='請輸入地址'
          />
        </div>

      </div>
    )
  }
}

export default StepOne;