export default ({ data: name, imageUrl, url, films, tvShows }) => {
  return <div>
  <h1>{name}</h1>
  <p>{films}, {tvShows}</p>
  <img src={imageUrl} alt="picture of character" />
  <a href={url}>Länk</a>
</div>
}