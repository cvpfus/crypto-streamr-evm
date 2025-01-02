import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center h-screen">
      <h1 className="text-3xl text-center mx-4 font-bold">Unlock Web3 Monetization with CryptoStreamr</h1>

      <Link href="/dashboard">
        <Button>Launch App</Button>
      </Link>
    </div>
  );
}
