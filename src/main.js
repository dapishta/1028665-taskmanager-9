import {createMenuTemplate} from './components/menu.js';
import {createSearchTemplate} from './components/search.js';
import {createFilterTemplate} from './components/filter.js';
import {createTaskTemplate} from './components/task.js';
// import {createTaskEditTemplate} from './js/components/task-edit.js';
import {createLoadMoreButtonTemplate} from './components/load-more-button.js';
import {createBoardTemplate} from './components/board.js';
import {createSortingTemplate} from './components/sorter.js';


const mainTag = document.querySelector(`.main`);
const mainControlTag = document.querySelector(`.main__control`);


const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};


render(mainControlTag, createMenuTemplate(), `beforeend`);
render(mainTag, createSearchTemplate(), `beforeend`);
render(mainTag, createFilterTemplate(), `beforeend`);
render(mainTag, createBoardTemplate(), `beforeend`);

const boardTag = document.querySelector(`.board`);
const boardTasksTag = document.querySelector(`.board__tasks`);
render(boardTag, createSortingTemplate(), `afterbegin`);


Array(3).fill(``).forEach(() => render(boardTasksTag, createTaskTemplate(), `afterbegin`));

render(boardTag, createLoadMoreButtonTemplate(), `beforeend`);
