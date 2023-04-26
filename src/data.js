/*
 * @Author: alexthezhang228 110424337+alexthezhang228@users.noreply.github.com
 * @Date: 2023-03-31 12:07:00
 * @LastEditors: alexthezhang228 110424337+alexthezhang228@users.noreply.github.com
 * @LastEditTime: 2023-04-26 13:13:42
 * @FilePath: /backroads/myapp/src/data.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import tour1 from './images/tour-1.jpeg'
import tour2 from './images/tour-2.jpeg'
import tour3 from './images/tour-3.jpeg'
import tour4 from './images/tour-4.jpeg'
export const pageLinks=[
  {id:1,href:'#home',text:'home'},
  {id:2,href:'#about',text:'about'},
  {id:3,href:'#service',text:'service'},
  {id:4,href:'#tours',text:'tours'},
]


export const socialLinks=[
  {id:1,href:'https://www.twitter.com',icon:'fab fa-facebook'},
  {id:2,href:'https://www.twitter.com',icon:'fab fa-twitter'},
  {id:3,href:'https://www.twitter.com',icon:'fab fa-squarespace'}
]


export const servicesLink=[
  {id:1,icon:'fas fa-wallet fa-fw',title:'saving money',text:'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.'},
  {id:2,icon:'fas fa-tree fa-fw',title:'endless hiking',text:'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.'},
  {id:3,icon:'fas fa-socks fa-fw',title:'amazing comfort',text:'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.'},
]

export const tours=[
  {
    id:1,
    image:tour1,
    date:'august 1 2023', 
    title:'Tibet Adventure',
    text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.',
    country:'china',
    days:'6 days',
    price:'from $2100'
  },
  {
    id:2,
    image:tour2,
    date:'july 1 2023', 
    title:'best of java',
    text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.',
    country:'indonesia',
    days:'11 days',
    price:'from $1400'
  },
  {
    id:3,
    image:tour3,
    date:'september 1 2023', 
    title:'explore hong kong',
    text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.',
    country:'hongkong',
    days:'8 days',
    price:'from $5000'
  },
  {
    id:4,
    image:tour4,
    date:'October 1 2023', 
    title:'kenya highlights',
    text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.',
    country:'hongkong',
    days:'20 days',
    price:'from $3000'
  }
]