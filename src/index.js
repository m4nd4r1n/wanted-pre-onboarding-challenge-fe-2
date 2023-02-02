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

/**
 * 모든 Todo를 조회합니다.
 *
 * @returns {Todo[]}
 */
const getAllTodo = () => {};

/**
 * 특정 Todo를 조회합니다.
 *
 * @param {number} id
 * @returns {Todo}
 * @throws ID를 입력하지 않거나 존재하지 않는 ID이면 오류가 발생합니다.
 */
const getUniqueTodo = (id) => {};

/**
 * 특정 Todo의 ID를 제외한 다른 속성을 수정합니다.
 *
 * @param {number} id
 * @param {Partial<Omit<Todo, "id">>} toUpdate
 * @throws ID를 입력하지 않거나 존재하지 않는 ID이면 오류가 발생합니다.
 */
const updateTodo = (id, { category, content, done, tags }) => {};

/**
 * 특정 Todo를 삭제합니다.
 *
 * @param {number} id
 * @throws ID를 입력하지 않거나 존재하지 않는 ID이면 오류가 발생합니다.
 */
const deleteUniqueTodo = (id) => {};

/** 모든 Todo를 삭제합니다. */
const deleteAllTodos = () => {};

/**
 * 특정 Todo의 특정 태그를 삭제합니다.
 *
 * @param {number} todoId
 * @param {string} tag
 * @throws ID를 입력하지 않거나 존재하지 않는 ID이거나 태그를 입력하지 않거나 존재하지 않는 태그이면 오류가 발생합니다.
 */
const deleteUniqueTag = (todoId, tag) => {};

/**
 * 특정 Todo의 모든 태그를 삭제합니다.
 *
 * @param {number} todoId
 */
const deleteAllTags = (todoId) => {};
