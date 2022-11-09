import { Link } from 'react-router-dom'
import { ReactComponent as Toggle } from '../../setting/icons/toggle.svg'
import { ReactComponent as Logo } from '../../setting/icons/logo.svg'
import { ReactComponent as Search } from '../../setting/icons/search.svg'
import { ReactComponent as Cart } from '../../setting/icons/cart.svg'
import { ReactComponent as Sun } from '../../setting/icons/sun.svg'
import { ReactComponent as Moon } from '../../setting/icons/moon.svg'

const Header = () => {
  return (
    <header class="site-header">
      <div class="header-container mx-auto">
        {/* <!-- navbar-toggle --> */}
        <input id="navbar-toggle" class="navbar-toggle" type="checkbox" />
        <label for="navbar-toggle" class="burger-container">
          <div class="icon-toggle cursor-point">
            <Toggle />
          </div>
        </label>

        {/* <!-- navbar-menu --> */}
        <nav class="navbar-menu">
          <ul class="nav-list site-menu-list mr-auto">
            <li class="nav-item">
              <Link class="nav-link" to="#">男款</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="#">女款</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="#">最新消息</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="#">客製商品</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="#">聯絡我們</Link>
            </li>
          </ul>
          <ul class="nav-list site-action-list">
            {/* <!-- search --> */}
            <li class="nav-item">
              <div class="nav-icon cursor-point">
                <Search />
              </div>
            </li>
            {/* <!-- cart --> */}
            <li class="nav-item">
              <div class="nav-icon cursor-point">
                <Cart />
              </div>
            </li>
            <li id="theme-toggle" class="nav-item">
              {/* <!-- moon --> */}
              <div class="nav-icon cursor-point ">
                <Moon />
              </div>
              {/* <!-- sun --> */}
              {/* <div class="nav-icon cursor-point hidden">
                <Sun/>
              </div> */}
            </li>
          </ul>
        </nav>

        {/* <!-- logo --> */}
        <Link class="header-logo-container" to="#">
          <div class="icon-logo cursor-point">
            <Logo />
          </div>
        </Link>
      </div>
    </header>)
}
export default Header;