const BASE_URL: string = "https://api.github.com/repos/kangduu";

async function request(url: string, method: string, params): Promise<any> {
  const response = await fetch(BASE_URL + url, {
    method: method || "GET",
    body: params ? JSON.stringify(params) : null,
  }).then((res) => res.json());

  return response.data;
}
export default request;
