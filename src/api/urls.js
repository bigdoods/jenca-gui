function getURL(url){
  return (process.env.NODE_ENV==='test' ? 'http://127.0.0.1' : '') + url
}

export const PROJECTS_API = getURL('/v1/projects')
export const USER_API = getURL('/v1/auth/status')