/*
 * @Author: alexthezhang228 110424337+alexthezhang228@users.noreply.github.com
 * @Date: 2023-03-30 23:25:34
 * @LastEditors: alexthezhang228 110424337+alexthezhang228@users.noreply.github.com
 * @LastEditTime: 2023-03-31 12:17:19
 * @FilePath: /backroads/myapp/src/App.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Tours from "./components/Tours";



function App() {
  return (
  <>
    <Navbar/>
    <Hero/>
    <About/>
    <Services/>
    <Tours/>
    <Footer/>
  </>
  );
}

export default App;
