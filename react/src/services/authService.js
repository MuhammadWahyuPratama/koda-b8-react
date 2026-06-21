function getUsers() {
  const users = JSON.parse(localStorage.getItem("users") || "[]");
  return users;
}

function saveUsers(users) {
  localStorage.setItem("users", JSON.stringify(users));
}

function register(data) {
  const users = getUsers();
  const existingUser = users.find((user) => user.email === data.email);

  if (existingUser) {
    throw new Error("Email sudah terdaftar");
  }
  users.push(data);
  saveUsers(users);
}

export default {
  getUsers,
  saveUsers,
  register,
};
