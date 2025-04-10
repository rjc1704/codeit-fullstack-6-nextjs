"use client";

import Link from "next/link";

export default function Header() {
  // useEffect(() => {
  //   throw new Error("루트 레이아웃 에러 발생");
  // }, []);
  return (
    <header className="w-full bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center">
        <div className="mb-4 sm:mb-0 text-xl font-bold text-gray-800">
          고양이 정보 사이트
        </div>

        <nav>
          <ul className="flex space-x-6">
            <Link href="/">
              <li>Home</li>
            </Link>
            <Link href="/breeds">
              <li>Breeds</li>
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  );
}
