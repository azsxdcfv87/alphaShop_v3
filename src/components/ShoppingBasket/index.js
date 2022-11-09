import { ReactComponent as Minus } from '../../setting/icons/minus.svg'
import { ReactComponent as Plus } from '../../setting/icons/plus.svg'
import Prd1 from '../../setting/images/product-1.jpg'
import Prd2 from '../../setting/images/product-2.jpg'

const ShoppingBasket = () => {
  return (
    <section class="cart-container col col-lg-5 col-sm-12">
      <h3 class="cart-title">購物籃</h3>

      <section class="product-list col col-12" data-total-price="0">
        <div class="product-container col col-12" data-count="0" data-price="3999">
          <img class="img-container" src={Prd1} alt="Prd2" />
          <div class="product-info">
            <div class="product-name">破壞補丁修身牛仔褲</div>
            <div class="product-control-container">
              <div class="product-control">
                <div class="product-action minus">
                  <Minus />
                </div>
                <span class="product-count"></span>
                <div class="product-action plus">
                  <Plus />
                </div>
              </div>
            </div>
            <div class="price"></div>
          </div>
        </div>
        <div class="product-container col col-12" data-count="0" data-price="1299">
          <img class="img-container" src={Prd2} alt="Prd2" />
          <div class="product-info">
            <div class="product-name">刷色直筒牛仔褲</div>
            <div class="product-control-container">
              <div class="product-control">
                <div class="product-action minus">
                  <Minus />
                </div>
                <span class="product-count"></span>
                <div class="product-action plus">
                  <Plus />
                </div>
              </div>
            </div>
            <div class="price"></div>
          </div>
        </div>
      </section>

      <section class="cart-info shipping col col-12">
        <div class="text">運費</div>
        <div class="price"></div>
      </section>
      <section class="cart-info total col col-12">
        <div class="text">小計</div>
        <div class="price"></div>
      </section>
    </section>)
}
export default ShoppingBasket;