// components/HatchDivider.tsx
export function HatchDivider() {
  return (
    <div
      className="w-full h-8 border-y border-[lab(90.6853%_0.399232_-1.45452)]"
      aria-hidden="true"
      style={{
        backgroundImage:
          "repeating-linear-gradient(45deg, rgba(0,0,0,0.03) 0px, rgba(0,0,0,0.03) 1px, transparent 1px, transparent 8px)",
      }}
    />
  );
}