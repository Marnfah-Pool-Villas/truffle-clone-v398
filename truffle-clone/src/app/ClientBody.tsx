"use client";

import { useEffect } from "react";
import { TranslationProvider } from "@/lib/useTranslation";
import TranslationLoadingOverlay from "@/components/TranslationLoadingOverlay";

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  // Remove any extension-added classes during hydration
  useEffect(() => {
    // This runs only on the client after hydration
    document.body.className = "antialiased";
  }, []);

  return (
    <TranslationProvider>
      <TranslationLoadingOverlay>
        <div className="antialiased">
          {children}
        </div>
      </TranslationLoadingOverlay>
    </TranslationProvider>
  );
}
