/*
 * @Author: alexthezhang228 110424337+alexthezhang228@users.noreply.github.com
 * @Date: 2023-03-31 11:24:27
 * @LastEditors: alexthezhang228 110424337+alexthezhang228@users.noreply.github.com
 * @LastEditTime: 2023-04-26 13:46:16
 * @FilePath: /backroads/myapp/src/components/Services.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Title from "./Title"
import {servicesLink} from '../data'
const Services=()=>{
  return (
    <section className="section services" id="service">
      <Title title='our' subTitle='services'></Title>
      <div className="section-center services-center">
        {servicesLink.map((service)=>{
          const {id,icon,title,text}=service
          return (
          <article className="service" key={id}>
            <span className="service-icon"><i className={icon}></i></span>
            <div className="service-info">
              <h4 className="service-title">{title}</h4>
              <p className="service-text">
               {text}
              </p>
            </div>
          </article>
          )
        })}
      </div>
    </section>
  )
}

export default Services