'use client';

import { usePathname } from 'next/navigation';

export default function AdminHider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  if (pathname && pathname.startsWith('/admin')) {
    return null;
  }
  
  return <>{children}</>;
}
