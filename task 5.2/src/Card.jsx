const Card = ({ image, title, description, link }) => (
    <div className="card" style={{ width: '300px', height: '400px', border: '1px solid black' }}>
      <img src={image} alt={title} style={{ width: '100%', height: '200px' }} />
      <h2>{title}</h2>
      <p>{description}</p>
      <a href={link}>Learn more</a>
    </div>
  )

  export default Card