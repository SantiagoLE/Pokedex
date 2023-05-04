import React from 'react'
import "./styles/pagination.css"

const Pagination = ({totalPokemons, currentPage, pokemonsPerPag, setCurrentPage}) => {

    const pageNumbers = []

    for(let i = 1; i <= Math.ceil(totalPokemons / pokemonsPerPag); i++){
        pageNumbers.push(i)
    }

    const onPreviusPage = () => {
        setCurrentPage(currentPage - 1)
    }

    const onNextPage = () => {
        setCurrentPage(currentPage + 1)
    }

    const onSpecificPage = (n) => {
        setCurrentPage(n)
    }
    return (
        <nav className="pagination is-centered" role="navigation" aria-label="pagination">
           
            <button disabled={currentPage === 1 ? false : false} className={`pagination-previous ${currentPage === 1 ? "is-disabled" : ""}`} onClick={onPreviusPage}>Previous</button>
            <ul className="pagination-list">
                {
                    pageNumbers.map(N_Page => (

                        <li key={N_Page}>
                            <a className={`pagination-link ${N_Page === currentPage ? 'current' : ''}`}
                            onClick={() => onSpecificPage(N_Page)}
                            >
                                {N_Page}
                            </a>
                        </li>

                    ))
                }

            </ul>
            <button className={`pagination-next ${ currentPage >= pageNumbers.length ? "is-disabled" : ""}`} onClick={onNextPage}>Next</button>

        </nav>
  )
}

export default Pagination