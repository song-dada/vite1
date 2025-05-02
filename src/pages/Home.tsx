// import React from 'react' // ts 에서는 알아서 해주기 때문에 없어도 됨
import Section1 from "./home/Section1";
import Section2 from "./home/Section2";
import Section3 from "./home/Section3";

const Home = () => {
  return (
    <div className="home">
        <section><Section1 /></section>
        <section><Section2 /></section>
        <section><Section3 /></section>
    </div>
  )
}

export default Home