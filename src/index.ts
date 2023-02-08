interface Todo {
  id: number;
  done: boolean;
  content: string;
  category: string;
  tags?: string[];
}
interface CreateTodoData extends Pick<Todo, "category" | "content" | "tags"> {}
interface UpdateTodoData extends Partial<Omit<Todo, "id">> {}

interface CreateTodo {
  ({ category, content, tags }: CreateTodoData): void;
}
interface GetAllTodo {
  (): Todo[] | void;
}
interface GetUniqueTodo {
  (id: number): Todo | void;
}
interface UpdateTodo {
  (id: number, { category, content, done, tags }: UpdateTodoData): void;
}
interface DeleteUniqueTodo {
  (id: number): void;
}
interface DeleteAllTodos {
  (): void;
}
interface DeleteUniqueTag {
  (todoId: number, tag: string): void;
}
interface DeleteAllTags {
  (todoId: number): void;
}

const todos: Todo[] = [];
const createTodo: CreateTodo = ({ category, content, tags }) => {};
const getAllTodo: GetAllTodo = () => {};
const getUniqueTodo: GetUniqueTodo = (id) => {};
const updateTodo: UpdateTodo = (id, { category, content, done, tags }) => {};
const deleteUniqueTodo: DeleteUniqueTodo = (id) => {};
const deleteAllTodos: DeleteAllTodos = () => {};
const deleteUniqueTag: DeleteUniqueTag = (todoId, tag) => {};
const deleteAllTags: DeleteAllTags = (todoId) => {};
