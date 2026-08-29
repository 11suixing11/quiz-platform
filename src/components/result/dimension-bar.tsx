interface DimensionBarProps {
  name: string;
  percentage: number;
  accentColor?: string;
  index?: number;
  description?: string;
}

export function DimensionBar({
  name,
  percentage,
  accentColor = "var(--accent)",
  description,
}: DimensionBarProps) {
  const clamped = Math.max(0, Math.min(100, Math.round(percentage)));

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-baseline justify-between text-sm">
        <span className="font-medium text-foreground">{name}</span>
        <span className="tabular-nums text-muted-foreground">{clamped}%</span>
      </div>
      {description && <p className="atlas-dimension-description">{description}</p>}
      <div
        className="relative h-2.5 w-full overflow-hidden rounded-full bg-muted"
        role="progressbar"
        aria-label={name}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={clamped}
      >
        <div
          className="absolute inset-y-0 left-0 rounded-full transition-[width] duration-500 ease-out motion-reduce:transition-none"
          style={{ width: `${clamped}%`, backgroundColor: accentColor }}
        />
      </div>
    </div>
  );
}
