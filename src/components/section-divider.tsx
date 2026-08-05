export default function SectionDivider() {
  return (
    <div className="flex w-full justify-center py-1" aria-hidden="true">
      <div className="flex items-center gap-2">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57] shadow-sm" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e] shadow-sm" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840] shadow-sm" />
      </div>
    </div>
  );
}
