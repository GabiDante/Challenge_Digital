import React,{Component, useEffect, useState} from "react"

import useTable from "../hooks/useTable"

const Brands1 = () => {
    const [brands, setBrands] = useState([])
    const { Table, setTh, setData, setShowOnly } = useTable();

    useEffect(() => {
        fetch("/api/brand")
        .then(res => res.json())
        .then(data => {
            setBrands(data.data)
        })
        .catch(error => console.log(error))
        
    }, [])

    useEffect(() => {
        const parser = (productos) => {
           return productos.map(p => {
                return {...p, cantidad: p.products.length}
            })
        }
       
        setTh(['ID', 'Name', 'Cantidad']);
        setShowOnly(['id', 'name', 'cantidad']);
        setData(parser(brands));
      }, [brands]);

    return (
        <>
           <h2 className="text-center my-[5rem]">Listado de marcas con su cantidad de productos</h2>
           <Table />
        </>

    )
}

export default Brands1
