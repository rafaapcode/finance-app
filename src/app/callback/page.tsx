'use client';
import { useSearchParams } from "next/navigation";

function Page() {
  // const router = useRouter();
  const params = useSearchParams();
  const token = params?.get('code');

  return (
    <div>
      <h2>{token}</h2>
    </div>
  )
}

export default Page
