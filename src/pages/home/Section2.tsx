import { useEffect, useRef, useState } from 'react';
import '../../assets/sass/section2.scss';



const Section2 = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightTopRef = useRef<HTMLDivElement>(null);
  const rightBottomRef = useRef<HTMLDivElement>(null);

  const [count1, setCount1] = useState<number>(0);
  const [count2, setCount2] = useState<number>(100);
  const [animationTrue , setAnimationTrue] = useState<boolean>(false);
  // useEffect는 참 값일때 실행하게 할 수 있다.

  // ob..서버? 내가 뷰포트에 들어왔는지 아닌지 감지하는 서버 
  useEffect(() => {
    const myObServer = new IntersectionObserver(
      // 어디에 들어오면 뭔가를 실행해라 로 함수를 통해 구현가능
      ([entry]) => { // entry으로 값을 넘겨 줌 entry가 관용적.
        if (entry.isIntersecting && !animationTrue) {
          leftRef.current?.classList.add('active')
          setTimeout(() => {
            rightTopRef.current?.classList.add('active')
          }, 500)
          setTimeout(() => {
            rightBottomRef.current?.classList.add('active');
            upDateCount();
          }, 2000)
          setAnimationTrue(true)
        }
      },
      { threshold: 0.5 } //0.5% 에 들어오면 위에 함수를 실행.
    )

    if (sectionRef.current) {
      myObServer.observe(sectionRef.current);
    }

    return ()=> myObServer.disconnect();
  }, [ animationTrue ])

  const upDateCount = () => {
    let num1 = 0;
    let num2 = 1000;
    const timer1 = setInterval(() => {
      num1 += 3;
      setCount1(num1);
      if (num1 > 100) { clearInterval(timer1) }
    }, 50)
    const timer2 = setInterval(() => {
      num2 += 127;
      setCount2(num2);
      if (num2 > 10000) { clearInterval(timer2) }
    }, 50)
  }
  return (
    <section className="section2" ref={sectionRef}>
      <div className="left" ref={leftRef}>
        <h1>Out Sroty</h1>
      </div>
      <div className="right">
        <div className="top" ref={rightTopRef}>
          <h3>우리의 삶이 건강해지고 당신의 비즈니스가 더 성장하는 스토리</h3>
          <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos vero rerum hic molestias atque iure, facilis corrupti dicta molestiae? Voluptate, similique ad enim repellendus voluptas qui maiores ut modi alias!</h4>
        </div>
        <div className="bottom" ref={rightBottomRef}>
          <span className="count-text"> <span>{count1.toLocaleString()}</span>만식 </span>
          <span className="count-text"> <span>{count2.toLocaleString()}</span>개 </span>
        </div>
      </div>
    </section>

  )
}

export default Section2