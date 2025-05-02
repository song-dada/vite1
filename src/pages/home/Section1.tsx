import { useEffect, useState } from 'react'
import '../../assets/sass/section1.scss';

const Section1 = () => {
    const [textActive, setTextActive] = useState(false);
    const [showCicle, setShowCicle] = useState(false);
    const [bgIdx, setBgIdx] = useState(0);
    const bgImgs = ['img/img1.jpg', 'img/img2.jpg', 'img/img3.jpg'];
    useEffect(() => {
        const timer = setTimeout(() => setTextActive(true), 1000);
        return () => clearTimeout(timer);
    }, [])
    const showEvent = () => {
        setShowCicle(true);
        setTimeout(() => {
            setBgIdx((prevIndex) => (prevIndex + 1) % bgImgs.length)
        }, 500)
        setTimeout(() => {
            setShowCicle(false);
        }, 500)
    }
    return (
        <div className="section1">
            {
                bgImgs.map((item, idx) => (
                    <img key={idx} src={item} alt={`img-${idx}`} className={`img-bg ${(bgIdx === idx ? 'bg-on' : '')}`} />
                ))
            }
            <div className={`text-box ${textActive ? 'text-on' : ''}`}>
                <h1>환영합니다.</h1>
                <button onClick={showEvent}>다음 이미지</button>
            </div>

            {
                showCicle && <div className="big-circle" />
            }
        </div>
    )
}

export default Section1