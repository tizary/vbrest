const baseUrl = "https://vbrest.by/api"

const createUrl = (path: string) => `${baseUrl}${path}`

export const Urls = {
  getNews: createUrl("/news/get-news?page=0&pageSize=100"),
  newsById: createUrl("/news/get-one-news?id="),
  getPosters: createUrl("/posters"),
  searchByText: createUrl("/search?type=search&text="),
}
