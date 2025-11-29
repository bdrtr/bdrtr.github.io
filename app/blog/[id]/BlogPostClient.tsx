'use client';

import { useRouter } from 'next/navigation';

export default function BlogPostClient() {
  const router = useRouter();
  
  return (
    <button className="btn btn-primary" onClick={() => router.back()}>
      Go Back
    </button>
  );
}

