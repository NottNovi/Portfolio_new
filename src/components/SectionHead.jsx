export default function SectionHead({ index, kicker, title, children }) {
  return (
    <div className="section-head reveal">
      <p className="kicker">
        <span className="kicker__index">{index}</span> {kicker}
      </p>
      <h2>{title}</h2>
      {children && <p className="section-head__lede">{children}</p>}
    </div>
  );
}
