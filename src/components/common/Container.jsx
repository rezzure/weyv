export default function Container({ children, className = "" }) {
  return <div className={`container-wrap ${className}`}>{children}</div>;
}
