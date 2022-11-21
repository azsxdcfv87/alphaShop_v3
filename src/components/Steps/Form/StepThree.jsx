import './StepThree.scss'
import { useContext } from 'react'
import { StepThreeContext } from '../../MainContext.js'

function PayInfo({ divname, title, holder, inputValue, onChange}){
  return(
    <div className={divname}>
      <label>{title}</label>
      <input
        type='text'
        placeholder={holder}
        value={inputValue}
        onChange={onChange} 
      />
    </div>
  )
}

function StepThree () {
  const { step, stepThreeData, setStepThreeData} = useContext(StepThreeContext)

  if(step !== 3) {
    return null
  }
  else {
    return (
      <div className='stepThree'>
        <h2 className='partTitle'>付款資訊</h2>
        <div className='paymentInfo'>

          <PayInfo
            divname='cardName'
            title='持卡人姓名'
            holder='John Doe'
            inputValue={stepThreeData.cardName}
            onChange={e => setStepThreeData({
              ...stepThreeData,
              cardName: e.target.value
            })}
          />

          <PayInfo
            divname='cardId'
            title='卡號'
            holder='1111 2222 3333 4444'
            inputValue={stepThreeData.cardId}
            onChange={e => setStepThreeData({
              ...stepThreeData,
              cardId: e.target.value
            })}
          />

          <PayInfo
            divname='cardDateLine'
            title='有效期限'
            holder='MM/YY'
            inputValue={stepThreeData.cardDateLine}
            onChange={e => setStepThreeData({
              ...stepThreeData,
              cardDateLine: e.target.value
            })}
          />

          <PayInfo
            divname='cardCvc'
            title='CVC/CCV'
            holder='123'
            inputValue={stepThreeData.cardCvc}
            onChange={e => setStepThreeData({
              ...stepThreeData,
              cardCvc: e.target.value
            })}
          />
        </div>
      </div>
    )
  }
}

export default StepThree;