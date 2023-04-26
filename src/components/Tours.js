/*
 * @Author: alexthezhang228 110424337+alexthezhang228@users.noreply.github.com
 * @Date: 2023-03-31 11:25:23
 * @LastEditors: alexthezhang228 110424337+alexthezhang228@users.noreply.github.com
 * @LastEditTime: 2023-04-26 14:25:54
 * @FilePath: /backroads/myapp/src/components/Tours.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Title from "./Title"
import {tours} from '../data'
const Tours=()=>{
  return (
    <section className="section" id="tours">
      <Title title='featured' subTitle='tours'></Title>
      <div className="section-center featured-center">
        {tours.map(tour=>{
          const {id,image,date,title,text,country,days,price}=tour
          return (
            <article className="tour-card" key={id}>
              <div className="tour-img-container">
              <img src={image} className="tour-img" alt="" />
              <p className="tour-date">{date}</p>
              </div>
              <div className="tour-info">
                <h4>{title}</h4>
                <p>
                {text}
                </p>
                <div className="tour-footer">
                  <p>
                    <span><i className="fas fa-map"></i></span> {country}
                  </p>
                  <p>{days}</p>
                  <p>{price}</p>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Tours