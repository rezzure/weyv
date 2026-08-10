export default function LoadingSpinner({ className = "" }) {
  return (
    <div className={`flex items-center justify-center py-20 ${className}`}>
      <span className="h-8 w-8 animate-spin rounded-full border-2 border-line border-t-primary" />
    </div>
  );
}
