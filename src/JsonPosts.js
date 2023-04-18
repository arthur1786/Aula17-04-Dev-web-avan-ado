import { useState, useEffect } from "react";

export default function JsonPosts() {
    const [data, setData] = useState('');

    const options = {
        method: 'Get',
        headers: {
            'X-RapidAPI-Key': 'dc2f0e6b0cmsh0fd7c1b0b68bac9p157971jsnbbb7ee17d364',
            'X-RapidAPI-Host': 'moviesminidatabase.p.rapidapi.com'
        }
    };

    useEffect(() => {
        fetch('https://moviesminidatabase.p.rapidapi.com/movie/order/byPopularity/', options)
            .then(response => response.json())
            .then(data => setData(data))
            .catch(err => console.log(err));
    }, []);

    return (
        <div>
            <p>Dados:{data.results.map(result => <div>{result.title}</div>)}</p>
        </div>
    );
}