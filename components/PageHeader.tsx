export default function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <header className="max-w-content">
      <p className="eyebrow">{eyebrow}</p>
      <h1 className="section-title mt-3">{title}</h1>
      {description && (
        <p className="mt-4 text-muted leading-relaxed max-w-[58ch]">
          {description}
        </p>
      )}
    </header>
  );
}
