import React from 'react'

export default function Pagination({ currentPage, totalPage, onpageChange }) {
    const maxButtons = 10;
    const calculate = () => {
        const halfButtons = Math.floor(maxButtons / 2)
        let start = currentPage - halfButtons;
        let end = currentPage + halfButtons;
        if (start < 1) {
            start = 1;
            end = start + maxButtons;

        }
        if (end > totalPage) {
            end = totalPage;
            start = end - maxButtons + 1
            if (start < 1) {
                start = 1;
            }
        }
        return { start, end }

    }
    const { start, end } = calculate();
    const pageNumbers = Array.from({length:end-start+1},(_,index)=>start+index)
    return (

        <div className='page-button'>
            {pageNumbers.map((item, index)=>(
                <button key={index} onClick={()=>onpageChange(item)}>{item}</button>
            ))}
            <button onClick={()=>onpageChange(currentPage)}>Next</button>
        </div>
    )
}

