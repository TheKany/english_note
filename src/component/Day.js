// 특정 날짜를 클릭했을 때 해당 단어들이 나오는 컴포넌트

// import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import Word from "./Word";
import useFetch from "../hooks/useFetch";

const Day = () => {
    //dummy.words
    const {day} = useParams();
    const words = useFetch(`http://localhost:3001/words?day=${day}`);

    //useFetch() 만들기 전
    // const [words, setWords] = useState([]);

    // useEffect(() => {
    //     fetch(`http://localhost:3001/words?day=${day}`)
    //     .then(res => {
    //         return res.json();
    //     })
    //     .then(data => {
    //         setWords(data);
    //     })
    // },[day]);

     return(
        <>
        <h2>Day {day}</h2>
        {/* 로딩중 */}
        {words.length === 0 && <span>Loading...</span>}
        <table>
            <tbody>
                {words.map(word => (
                    <Word word={word} key={word.id}/>
                ))}
            </tbody>
        </table>
        </>
    );
};

export default Day;