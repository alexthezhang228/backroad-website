/*
 * @Author: alexthezhang228 110424337+alexthezhang228@users.noreply.github.com
 * @Date: 2023-03-31 11:20:45
 * @LastEditors: alexthezhang228 110424337+alexthezhang228@users.noreply.github.com
 * @LastEditTime: 2023-04-26 13:41:07
 * @FilePath: /backroads/myapp/src/components/Footer.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { pageLinks,socialLinks } from "../data"

const Footer=()=>{
  return (
    <footer className="section footer">
    <ul className="footer-links">
      {pageLinks.map((page)=>{
        const {id,href,text}=page
        return (
          <li key={id}><a href={href} className="footer-link">{text}</a></li>
        )
      })}
    </ul>
    <ul className="footer-icons">
      {socialLinks.map((social)=>{
        const {id,href,icon}=social
        return (
          <li>
            <a href={href} target="_blank" className="footer-icon"
          ><i className={icon}></i></a>
          </li>
        )
      })}   
    </ul>
    <p className="copyright">
      copyright &copy; Backroads travel tours company
      <span id="date">{new Date().getFullYear()}</span> all rights reserved
    </p>
    </footer>
  )
}

export default Footer