export default function Footer() {
  return (
    <footer className="border-t border-rule px-6 sm:px-12 lg:px-16 py-10">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <p className="font-sans text-small text-muted">
          © 2026 Rakin Miah · Brighton, UK
        </p>
        <p className="font-sans text-small text-muted">
          Built with Next.js · Hosted on Vercel
        </p>
      </div>
    </footer>
  );
}
