export function generateTodoId() {
  const timestamp = new Date().getTime();
  return `todo-${timestamp}`;
}


