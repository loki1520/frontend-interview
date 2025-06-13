export type TUser = {
  name: string;
  age: number;
  id: number;
};

// Этот файл менять не надо!
export function getUsers(shouldFail?: boolean): Promise<TUser[]> {
  const delay = Math.random() * 2500 + 500;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) {
        reject(new Error("Failed to fetch users: Simulated network error"));
        return;
      }

      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          const users = data?.map((user: {name: string, username: string, id: number}) => ({
            name: user.name,
            age: (user.name + user.username).length,
            id: user.id,
          }));

          resolve(users);
        })
        .catch((error) => {
          console.error("Error fetching users:", error);
          reject(error); // Пробрасываем реальную ошибку дальше
        });
    }, delay);
  });
}
