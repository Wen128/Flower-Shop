"use client";

import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  return (
    <div className="my-4 flex w-4/5 items-center justify-start">
      <button
        onClick={() => router.back()}
        className="rounded-full bg-secondary px-4 py-2 text-white transition-colors duration-300 hover:bg-tertiary"
      >
        {/* Back Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
      </button>
    </div>
  );
}