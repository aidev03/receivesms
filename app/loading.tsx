/**
 * Loading Component
 * Displayed while page content is loading
 */
export default function Loading() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center">
      <div className="text-center">
        {/* Spinner */}
        <div className="w-16 h-16 mx-auto mb-4 relative">
          <div className="absolute inset-0 rounded-full border-4 border-slate-200"></div>
          <div className="absolute inset-0 rounded-full border-4 border-primary-600 border-t-transparent animate-spin"></div>
        </div>
        
        {/* Loading Text */}
        <p className="text-slate-600 font-medium">Loading...</p>
      </div>
    </div>
  );
}
