import { ReactComponent as RightArrow } from '../../../setting/icons/right-arrow.svg'
import { ReactComponent as LeftArrow } from '../../../setting/icons/left-arrow.svg'

const ProgressButtom = () => {
  return (
    <section class="progress-control-container col col-lg-6 col-sm-12">
      <section class="button-group col col-12" data-phase="address">
        <button class="next">
          下一步
          <div class="cursor-point">
            <RightArrow />
          </div>
        </button>
      </section>
      <section class="button-group col col-12" data-phase="shipping">
        <button class="prev">
          <div class="cursor-point">
            <LeftArrow />
          </div>
          上一步
        </button>
        <button class="next">
          下一步
          <div class="cursor-point">
            <RightArrow />
          </div>
        </button>
      </section>
      <section class="button-group col col-12" data-phase="credit-card">
        <button class="prev">
          <div class="cursor-point">
            <LeftArrow />
          </div>
          上一步
        </button>
        <button class="next">
          確認下單
        </button>
      </section>
    </section>
  )
}
export default ProgressButtom;