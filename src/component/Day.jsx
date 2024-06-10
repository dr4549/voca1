import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import Word from "./Word";
import useFetch from "../hooks/useFetch";

export default function Day() {
    const a = useParams();
    const day = a.day;
    const words = useFetch(`http://localhost:3001/words?day=${day}`);
    // const [words, setWords] = useState([]);

    // useEffect(() => {
    //     fetch(`http://localhost:3001/words?day=${day}`)
    //         .then((res) => {
    //             return res.json();
    //         })
    //         .then((data) => {
    //             setWords(data);
    //         });
    // }, [day]);

    return (
        <>
            <h2>Day {day}</h2>
            {words.length === 0 && <span>Loading...</span>}
            <table>
                <tbody>
                    {words.map((word) => (
                        <Word word={word} key={word.id} />
                    ))}
                </tbody>
            </table>
        </>
    );
}
