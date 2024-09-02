"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();
  const [logedIn, setLogedIn] = useState(false);

  useEffect(() => {
    // make this route is protected route to ensure the user is logedin
    if (!logedIn) {
      router.push("/login");
      return () => {
        // Clean up the effect when the component unmounts
      };
    }
  }, [logedIn, router]);

  return (
    <main className="flex  flex-col items-center ">
      <div>Home</div>
    </main>
  );
}
