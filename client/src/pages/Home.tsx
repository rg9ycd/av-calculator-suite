import { useEffect } from "react";

/**
 * フィールド・インストゥルメント：標準プレビューから単一HTMLの完成版へ即時に案内する。
 */
export default function Home() {
  useEffect(() => {
    window.location.replace("av-calculator-suite.html");
  }, []);

  return (
    <main className="min-h-screen bg-[#f5f2e8] text-[#12202e] grid place-items-center p-6">
      <p className="text-sm">AV Calculator Suite を開いています。</p>
    </main>
  );
}
