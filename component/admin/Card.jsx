export default function Card({ cardTitle='', cardType='', children }) {
  return (
    <div className= {`card ${cardType}`}>
      <div className="card-header">
        <h3 className="card-title">{cardTitle}</h3>
      </div>
      <div className="card-body">{children}</div>
    </div>
  )
}