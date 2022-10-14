// import React from "react"
// import { useEffect, useState } from "react"
// import { BASE_URL } from "../constants/BASE_URL"
// import styled from "styled-components"

// export const Item = styled.div`
//     width: 500px;
//     padding: 1em;
//     margin: 1em;
//     border: 1px solid black;
//     display: flex;
//     justify-content: space-around;
// `

// export const Paginacao = () => {
//     const [itens, setItens] = useState(10)
//     const [itensPerPage, setItensPerPage] = useState(10)
//     const [currentPage, setCurrentPage] = useState(0)

//     const pages = Math.ceil(itens.length / itensPerPage)
//     const startIndex = currentPage * itensPerPage
//     const endIndex = startIndex + itensPerPage
//     const currentItens = itens.slice(startIndex, endIndex)

//     useEffect(() => {
//         const fetchData = async () => {
//             const result = await fetch(`${BASE_URL}`)
//                 .then(reesponse => reesponse.json())
//                 .then(data => data)

//             setItens(result)
//         }
//         fetchData()
//     }, [])

//     useEffect(() => {
//         setCurrentPage(0)
//     }, [itensPerPage])

//     return (
//         <Item>
//             <div>
//                 <select value={itensPerPage} onChange={(event) => setItensPerPage(Number(event.target.value))}>
//                     <option valule={5}>5</option>
//                     <option valule={10}>10</option>
//                     <option valule={20}>20</option>
//                     <option valule={25}>25</option>
//                 </select>
//             </div>
//             <div>
//                 {Array.from(Array(pages), (item, index) => {
//                     return <button
//                         value={index} onClick={(event) => setCurrentPage(Number(event.target.value))}>{index + 1}</button>
//                 })}
//             </div>
//             {currentItens.map(item => {
//                 return <div className="item"><span>{item.id}</span><span>{item.completed}</span></div>
//             })}
//         </Item>
//     )
// }