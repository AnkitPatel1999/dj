export const H = ({ eyebrow, a, b, sub }) => (
    <div className="sec-head">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{a} <em>{b}</em></h2>
      {sub && <p>{sub}</p>}
    </div>
);