export default ({ data: name, url }) => {

  return (
  <div>
    <h1>{name}</h1>
    {/* <p>{films}</p> */}
    <p>{tvShows}</p>
    <a href={url}>Länk</a >
  </div>
  )
}