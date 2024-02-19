import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './Card';
const Api = () => {
    const [state, setState] = useState([]);

    useEffect(() => {
        axios.get("https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts").then((response) => {
            setState(response.data);

        })
    }, [])

    return (
        <>
            <div className='container'>
                {
                    state.map((value, index) => {
                        let newdate = new Date(value.date);
                        newdate = newdate.toLocaleString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric'
                        });
                        return (
                            <Card key={value.id}
                                title={value.title}
                                authorname={value.author.name}
                                role={value.author.role}
                                date={newdate}
                                content={value.content}
                                src={value.thumbnail.large}
                            />
                        )

                    })
                }





            </div>
        </>
    )
}

export default Api
