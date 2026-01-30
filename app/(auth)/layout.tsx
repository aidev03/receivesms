import { Metadata } from 'next';

/**
 * Auth Layout - Clean minimal design
 * noindex/nofollow for SEO
 */
export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="w-full max-w-sm">
        {children}
      </div>
    </div>
  );
}
