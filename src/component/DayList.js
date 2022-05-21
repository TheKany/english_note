// 날짜 분류 컴포넌트
// import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";


const DayList = () => {

    const days = useFetch("http://localhost:3001/days")

    // 로딩중
    if(days.length === 0) {
        return <span>Loading...</span> 
    }

    //useFetch() 만들기 전
    // const [days, setDays] = useState([]);

    // // useEffect(() => {
    // //     fetch('http://localhost:3001/days')
    // //     .then(res => {
    // //         return res.json()
    // //     })
    // //     .then(data => {
    // //         setDays(data);
    // //     })
    // // }, []);
    // // // [] : 의존성 배열

    return(
            <ul className="list_day">
            {days.map(day =>
                (<li key={day.id}>
                    <Link to={`/day/${day.day}`}>Day {day.day}</Link>
                </li>
                ))}
        </ul>
    );
};

export default DayList;