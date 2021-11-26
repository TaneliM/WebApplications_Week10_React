import {useEffect, useState} from "react"

const About = () => {
    const [data, setData] = useState([""]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(json => setData(Array.from(json)))
    }, []);

    return (
        <div>
            <h2>About</h2>
            <ul>
            {data.map((listItem) => (
                <li key={listItem.id}>
                    {listItem.title}
                </li>
            ))}
            </ul>
        </div>
    )
}

export default About;