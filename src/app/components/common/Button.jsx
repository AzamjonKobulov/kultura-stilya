export default function Button({ children, className, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center gap-4 font-semibold rounded-full ${className}`}
    >
      {children}
    </button>
  );
}
