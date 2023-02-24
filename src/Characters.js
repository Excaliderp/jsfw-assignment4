// export default ({ data: name, imageUrl, url, films, tvShows }) => {
//   return <div>
//   <h1>{name}</h1>
//   <p>{films}, {tvShows}</p>
//   <img src={imageUrl} alt="picture of character" />
//   <a href={url}>Länk</a>
// </div>
// }

export default (query) => {
return fetch('https://api.disneyapi.dev/characters', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    query
  })
})

  .then(res => res.json())
  .then(res => console.log(res.data));

}