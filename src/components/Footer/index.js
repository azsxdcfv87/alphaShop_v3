import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../setting/icons/logo.svg'
import { ReactComponent as FB } from '../../setting/icons/facebook.svg'
import { ReactComponent as IG } from '../../setting/icons/instagram.svg'
import { ReactComponent as WhatsApp } from '../../setting/icons/whatsapp.svg'
const Footer = () => {
  return (<footer class="site-footer">
    <div class="footer-container">
      <div class="footer-logo-container">
        <div class="icon-logo">
          <Logo />
        </div>
      </div>
      <section class="footer-section">
        <h2 class="section-title">客戶服務</h2>
        <div class="section-content">
          <Link class="page-link" to="#">運送說明</Link>
          <Link class="page-link" to="#">退換貨相關</Link>
          <Link class="page-link" to="#">付款資訊</Link>
          <Link class="page-link" to="#">FAQ</Link>
        </div>
      </section>
      <section class="footer-section">
        <h2 class="section-title">關於我們</h2>
        <div class="section-content">
          <Link class="page-link" to="#">品牌故事</Link>
          <Link class="page-link" to="#">媒體聯繫</Link>
          <Link class="page-link" to="#">Press kit</Link>
        </div>
      </section>
      <section class="footer-section">
        <h2 class="section-title">資訊</h2>
        <div class="section-content">
          <Link class="page-link" to="#">隱私權政策</Link>
          <Link class="page-link" to="#">Cookie</Link>
          <Link class="page-link" to="#">GDPR</Link>
        </div>
      </section>
      <section class="footer-section">
        <h2 class="section-title">追蹤 ALPHA Shop</h2>
        <div class="section-content">
          <div class="tel-info">+886 02123-45678</div>
          <div class="social-icon-group">
            <span class="social-icon cursor-point">
              <FB />
            </span>
            <span class="social-icon cursor-point">
              <IG />
            </span>
            <span class="social-icon cursor-point">
              <WhatsApp />
            </span>
          </div>
        </div>
      </section>
    </div>
  </footer>)
}
export default Footer;