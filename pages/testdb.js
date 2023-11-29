import axios from "axios"
import {useEffect, useState} from "react"

// peticion a la API

export async function getServerSideProps() {
    const res = await axios.get("http://localhost:3000/api/basededatos")
    const data = await res.data
    return {
        props:{
            data
        }
    }
}

export default function testdb({data}) {
    console.log(data)
    return (
        <>
        <main className="h-screen w-screen bg-gray-500">
        <h1 className="text-4xl text-center text-white">Hola testDB</h1>
        
        {data[0].correo}
        


        </main>
{ /*aqui empieza clase del 21 de nov */}

        Console.log(loading)
        Return(
            { /* formulario */}
            <div>

                
            </div>


        )







      














        
        </>
    )

}