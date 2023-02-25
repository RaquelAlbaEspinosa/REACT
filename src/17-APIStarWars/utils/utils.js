export const getIdFromUri = (url) => {
   const url_spliced = url.split('/');
   return url_spliced[url_spliced.length - 2];
}