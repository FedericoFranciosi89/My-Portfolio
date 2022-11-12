export const addUserToLocalStorage = (taskArray) => {
  localStorage.setItem('task', JSON.stringify(taskArray));
};

export const removeUserFromLocalStorage = () => {
  localStorage.removeItem('task');
};

export const getUserFromLocalStorage = () => {
  const result = localStorage.getItem('task');
  const user = result ? JSON.parse(result) : [];
  return user;
};
