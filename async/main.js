const axios = require("axios");

//Default axios
// axios
//   .get("https://jsonplaceholder.typicode.com/posts")
//   .then(r => console.log(r.data));

//With async function no catch
// async function getPosts() {
//   const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
//   console.log(res);
// }
// getPosts();

//WIth async func catch

(async () => {
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    console.log(res);
  } catch (e) {
    console.log(e);
  }
})()

