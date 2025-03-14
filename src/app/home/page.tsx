import React from "react";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

function HomePage() {
  return (
    <div>
      <SignedIn>
        <UserButton></UserButton>
      </SignedIn>

      <SignedOut>
        <SignInButton mode="modal"></SignInButton>
      </SignedOut>
    </div>
  );
}

export default HomePage;
