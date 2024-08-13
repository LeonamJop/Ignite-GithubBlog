import axios from 'axios'

export const user = axios.get('https://api.github.com/users/leonamjop')

export const repos = axios.get('https://api.github.com/users/leonamjop/repos')