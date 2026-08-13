import Link from "next/link";

export function ActionLink({ href, children, variant = "primary" }: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}) {
  const style = variant === "primary"
    ? "bg-weg-blue text-white hover:bg-weg-dark"
    : "border border-slate-300 bg-white text-weg-dark hover:bg-slate-50";
  return <Link href={href} className={`inline-flex rounded-full px-5 py-3 text-sm font-bold ${style}`}>{children}</Link>;
}
