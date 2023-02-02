"use strict";

/**
 * Todo 타입입니다.
 *
 * @typedef {Object} Todo
 * @property {number} id 고유 아이디
 * @property {boolean} done 완료여부
 * @property {string} content 내용
 * @property {string} category 카테고리
 * @property {string[]} [tags] 태그들
 */

/**
 * Todo를 저장하는 TodoList 타입입니다.
 *
 * @typedef {Todo[]} TodoList
 */

/**
 * Todo를 추가합니다.
 *
 * @param {Pick<Todo, "category" | "content" | "tags">} newTodoData
 * @throws 내용이 없는 경우 오류가 발생합니다.
 */
const createTodo = ({ category, content, tags }) => {};

