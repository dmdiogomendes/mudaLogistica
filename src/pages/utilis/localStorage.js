export const setUsernameInLocalStorage = (username) => {
    localStorage.setItem('username', username);
};
  
export const getUsernameFromLocalStorage = () => {
    return localStorage.getItem('username');
};