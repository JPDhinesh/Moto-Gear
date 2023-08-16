export async function getPost() {
  const response = await fetch("http://localhost:3000/users");
  if (!response.ok) {
    throw { message: "Not found", status: 500 };
  }
  return response.json();
}

// export async function getPostId(id) {
//   const response = await fetch("http://localhost:3000/users/" + id);
//   if (!response.ok) {
//     throw { message: "Not able to fetch the data", status: 500 };
//   }
//   return response;
// }
