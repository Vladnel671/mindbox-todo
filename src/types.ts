export interface Todo {
  id: number
  text: string
  completed: boolean
}

export interface InputProps {
  addTodo: (text: string) => void
}

export interface TodoListProps {
  todos: Todo[]
  toggleTodo: (id: number) => void
}

export interface TodoItemProps {
  todo: Todo
  toggleTodo: (id: number) => void
}

export interface TodoButtonsProps {
  filter: Filter;
  setFilter: (filter: Filter) => void;
  clearCompleted: () => void;
  remainingTasks: number;
}

export type Filter = 'all' | 'active' | 'completed'
