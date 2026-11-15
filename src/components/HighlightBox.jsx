export default function HighlightBox({ children }) {
  return (
    <span className="relative inline-block z-0">
      <span className="relative z-10">{children}</span>
      <span className="absolute bottom-0 left-0 right-0 h-2 bg-green-200 -z-10" />
    </span>
  );
}
