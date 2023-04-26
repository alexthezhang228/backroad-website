/*
 * @Author: alexthezhang228 110424337+alexthezhang228@users.noreply.github.com
 * @Date: 2023-03-31 11:13:23
 * @LastEditors: alexthezhang228 110424337+alexthezhang228@users.noreply.github.com
 * @LastEditTime: 2023-04-26 14:01:29
 * @FilePath: /backroads/myapp/src/components/Navbar.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import logo from '../images/logo.svg'
import {pageLinks,socialLinks} from '../data'
const Navbar=()=>{
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        {/* <!-- left this comment on purpose --> */}
        <ul className="nav-links" id="nav-links">
          {pageLinks.map((page)=>{
            return (
              <li>
                <a key={page.id} href={page.href} className="nav-link"> {page.text} </a>
              </li>
            )
          })}
          
        </ul>

        <ul className="nav-icons">
          {socialLinks.map((link)=>{
            const {id,href,icon}=link
            return(
              <li key={id}> 
                <a href={href} target="_blank" className="nav-icon" >
                  <i className={icon}></i>
                </a>
              </li>
            )
          })} 
        </ul>

        
      </div>
    </nav>
  )
}
export default Navbar