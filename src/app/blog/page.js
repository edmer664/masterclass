import React from 'react'
import data from "@/data/data.json"


async function getData() {
    console.log(typeof data);
    await new Promise(resolve => setTimeout(resolve, 3000));
    return data;
}


export default async function BlogPage() {

    const data = await getData();


    return (
        <>
            {
                data && data.map(entry => (
                    <>
                        {entry.title} <br />
                    </>
                ))
            }
        </>
    )
}
