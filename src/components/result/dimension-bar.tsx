interface DimensionBarProps {
  name: string;
  percentage: number;
  accentColor?: string;
  index?: number;
  description?: string;
}

/**
 * A dimension read on the same exposure meter the quiz uses for its progress, so
 * "how far along" and "how strong" are the same instrument seen twice. The value
 * travels as `--progress` (0-1) on the track: the fill scales from it and the
 * brass needle is positioned from it.
 */
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
        <span className="atlas-dimension-value">{clamped}%</span>
      </div>
      {description && <p className="atlas-dimension-description">{description}</p>}
      <div
        className="atlas-meter"
        style={{ "--progress": clamped / 100, "--meter-fill": accentColor } as React.CSSProperties}
        role="progressbar"
        aria-label={name}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={clamped}
      >
        <span className="atlas-meter-fill" />
      </div>
    </div>
  );
}
