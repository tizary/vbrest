const baseUrl = "https://vbrest.by/api"

const createUrl = (path: string) => `${baseUrl}${path}`

export const Urls = {
  getNews: createUrl("/news/get-news?page=0&pageSize=100"),
  getPosters: createUrl("/posters"),
}
