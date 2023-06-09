import Pagination from 'tui-pagination';
// import 'tui-pagination/dist/tui-pagination.min.css';
import { renderMovieList } from './get-catalog';

const paginationElement = document.querySelector('#tui-pagination-container');

export async function initPagination() {

  const options = {
    totalItems: 1000,
    itemsPerPage: 21,
    visiblePages: 3,
    page: 1,
    centerAlign: false,
    firstItemClassName: 'tui-first-child',
    lastItemClassName: 'tui-last-child',
    template: {
      page: '<a href="#" class="tui-page-btn">{{page}}</a>',
      currentPage:
        '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
      moveButton:
        '<a href="#" class="tui-page-btn tui-{{type}}">' +
        '<span class="tui-ico-{{type}}">{{type}}</span>' +
        '</a>',
      disabledMoveButton:
        '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
        '<span class="tui-ico-{{type}}">{{type}}</span>' +
        '</span>',
      moreButton:
        '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
        '<span class="tui-ico-ellip">...</span>' +
        '</a>',
    },
  };

  const pagination = new Pagination(paginationElement, options);
  pagination.on('afterMove', async event => {
    const currentPage = event.page;
    await renderMovieList(currentPage);
  });

  await renderMovieList(1);
}  