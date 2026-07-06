interface SectionHeadingProps {
  number: string;
  title: string;
  lead?: string;
  headingId?: string;
}

export function SectionHeading({ number, title, lead, headingId }: SectionHeadingProps) {
  return (
    <div>
      <div className="flex items-baseline gap-4">
        <span className="font-mono text-[13px] font-semibold tracking-[0.05em] text-accent">{number}</span>
        <h2 id={headingId} className="m-0 text-[clamp(26px,3.6vw,32px)] font-semibold tracking-[-0.025em] text-text">
          {title}
        </h2>
      </div>
      {lead ? (
        <p className="ml-[30px] mt-[14px] max-w-[56ch] text-[15px] leading-[1.6] text-text-2">{lead}</p>
      ) : null}
    </div>
  );
}
