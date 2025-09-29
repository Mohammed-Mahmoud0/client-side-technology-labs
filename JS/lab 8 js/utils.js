export function greetUser(name) {
  console.log("hello, " + name);
}

export default class DataFetcher {
  async getUser(id) {
    try {
      let response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      let data = await response.json();
      return data;
    } catch (error) {
      console.error("Error:", error);
    }
  }
}
