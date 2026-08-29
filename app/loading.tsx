export default function Loading() {
  return (
    <div className="mx-auto flex min-h-screen max-w-7xl flex-col px-4 py-20 sm:px-6 lg:px-8">
      {/* Heading Skeleton */}
      <div className="mb-12 h-16 w-3/4 animate-pulse rounded-lg bg-slate-200"></div>

      {/* Paragraph Skeletons */}
      <div className="mb-4 h-6 w-full animate-pulse rounded bg-slate-100"></div>
      <div className="mb-4 h-6 w-5/6 animate-pulse rounded bg-slate-100"></div>
      <div className="mb-16 h-6 w-1/2 animate-pulse rounded bg-slate-100"></div>

      {/* Grid Cards Skeleton */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="h-64 w-full animate-pulse rounded-xl bg-slate-200"
          ></div>
        ))}
      </div>
    </div>
  );
}
