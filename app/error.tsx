'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-bold">エラーが発生しました</h2>
        <button
          onClick={() => reset()}
          className="mt-4 rounded bg-primary px-4 py-2 text-white"
        >
          もう一度試す
        </button>
      </div>
    </div>
  );
} 