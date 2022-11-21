import './StepTwo.scss'

/* 相關資料格式合併 */
function ShippingMethod({ inputVaule, tagTitle, tagDescription, tagCosts}) {
  return (
    <div className='formRow'>
      <input name='ta-method' type='radio' value={inputVaule} />
      <p className='tagTitle'>{tagTitle}</p>
      <p className='tagDescription'>{tagDescription}</p>
      <p className='tagCosts'>{tagCosts}</p>
    </div>
  )
}

function StepTwo({ step }) {
  if(step !== 2) {
    return null
  }
  else {
    return (
      <div className='stepTwo'>
        <h2 className='partTitle'>運送方式</h2>
        <div className='shippingMethod'>
          <ShippingMethod
            inputVaule='free'
            tagTitle='標準運送'
            tagDescription='約3~7個工作天'
            tagCosts='免費'
          />

          <ShippingMethod
            inputVaule='cost'
            tagTitle='DHL貨運'
            tagDescription='48小時內送達'
            tagCosts='500'
          />
        </div>
      </div>
    )
  }
}

export default StepTwo;
