import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-20 text-center">
      <h1 className="font-display text-[6rem] font-bold leading-none text-white opacity-20">
        404
      </h1>
      <div className="mt-6">
        <h2 className="font-display text-4xl font-bold text-white">
          Page not found
        </h2>
        <p className="mt-4 max-w-md text-lg text-slate-300">
          The page you&apos;re looking for doesn&apos;t exist or may have moved.
        </p>
        <div className="mt-8">
          <Button asChild variant="primary" size="lg">
            <Link href="/">Back to Home</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
