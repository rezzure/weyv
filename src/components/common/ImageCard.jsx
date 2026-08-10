export default function ImageCard({
  src,
  alt,
  className = "",
  ratio = "aspect-[4/5]",
  eager = false,
}) {
  return (
    <div className={`overflow-hidden bg-soft ${ratio} ${className}`}>
      <img
        src={src}
        alt={alt}
        loading={eager ? "eager" : "lazy"}
        className="h-full w-full object-cover transition-transform duration-700 ease-premium hover:scale-[1.04]"
      />
    </div>
  );
}
