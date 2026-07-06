import type { LayerRow } from "@/lib/types";

export function LayerGrid({ layers }: { layers: LayerRow[] }) {
  return (
    <div className="mt-[26px] grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-[clamp(16px,2.2vw,26px)] border-t border-divider pt-6">
      {layers.map((layer) => (
        <div key={layer.label}>
          <div className="mb-2 font-mono text-[10.5px] font-semibold uppercase tracking-[0.13em] text-text-3">
            {layer.label}
          </div>
          <div className="text-[13px] leading-[1.7] text-text-2">{layer.value}</div>
        </div>
      ))}
    </div>
  );
}
