export interface IArticle {
  id: number,
  name: string,
  path: string,
  description: string,
  date: string,
  preview: string,
  tag: string, 
  internal: boolean, 
  published: boolean,
  publication: string
}