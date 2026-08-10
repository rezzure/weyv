export default function EmptyState({ title = "Nothing here yet", text }) {
  return (
    <div className="flex flex-col items-center gap-2 py-20 text-center">
      <h3 className="font-display text-xl text-ink">{title}</h3>
      {text && <p className="body-md max-w-sm">{text}</p>}
    </div>
  );
}
