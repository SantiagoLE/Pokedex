import React from 'react';
import './styles/pagination.css';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage } from '../../store/slices/currentPage.slice';

const Pagination = ({ totalPokemons, pokemonsPerPag }) => {
  const { currentPage } = useSelector((state) => state); // Llamo al estado global current page
  const dispatch = useDispatch(); // Llamo a la función para despachar las modificaciones

  const pageNumbers = [];
  const range = 5;
  const totalPages = Math.ceil(totalPokemons / pokemonsPerPag);
  const currentPageGroup = Math.ceil(currentPage / range); // Grupo de páginas actual

  let startPage = (currentPageGroup - 1) * range + 1;
  let endPage = currentPageGroup * range;

  if (endPage > totalPages) {
    // Si el final del rango excede el total de páginas, ajustarlo al total de páginas
    endPage = totalPages;
  }

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  const onPreviusPage = () => {
    if (currentPage > 1) {
      dispatch(setCurrentPage(currentPage - 1));
    }
  };

  const onNextPage = () => {
    if (currentPage < totalPages) {
      dispatch(setCurrentPage(currentPage + 1));
    }
  };

  const onSpecificPage = (n) => {
    dispatch(setCurrentPage(n));
  };

  return (
    <nav className="pagination is-centered" role="navigation" aria-label="pagination">
      <button disabled={currentPage === 1} className={`pagination-previous ${currentPage === 1 ? 'is-disabled' : ''}`} onClick={onPreviusPage}>
        Previous
      </button>
      <ul className="pagination-list">
        {startPage > 1 && (
          <li>
            <a className={`pagination-link`} onClick={() => onSpecificPage(1)}>
              1
            </a>
          </li>
        )}
        {startPage > 2 && (
          <li>
            <span className="pagination-ellipsis">&hellip;</span>
          </li>
        )}
        {pageNumbers.map((N_Page) => (
          <li key={N_Page}>
            <a className={`pagination-link ${N_Page === currentPage ? 'current' : ''}`} onClick={() => onSpecificPage(N_Page)}>
              {N_Page}
            </a>
          </li>
        ))}
        {endPage < totalPages - 1 && (
          <li>
            <span className="pagination-ellipsis">&hellip;</span>
          </li>
        )}
        {endPage < totalPages && (
          <li>
            <a className={`pagination-link`} onClick={() => onSpecificPage(totalPages)}>
              {totalPages}
            </a>
          </li>
        )}
      </ul>
      <button className={`pagination-next ${currentPage >= totalPages ? 'is-disabled' : ''}`} onClick={onNextPage}>
        Next
      </button>
    </nav>
  );
};

export default Pagination;
