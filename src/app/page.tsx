import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h2>SOSHIDAホームページ（開発中）</h2>
      <p className="my-4">コンテンツあり</p>
      <ul className="flex flex-col gap-4 ml-2">
        <li>
          <Link href="/about" className="hover:bg-gray-300 p-1 rounded-md">
            About
          </Link>
        </li>
        <li>
          <Link href="/blog" className="hover:bg-gray-300 p-1 rounded-md">
            Blog（現状のメインコンテンツ）
          </Link>
        </li>
        <li>
          <Link href="/link" className="hover:bg-gray-300 p-1 rounded-md">
            Link
          </Link>
        </li>
      </ul>
      {/* todo: spのときはモーダルでナビゲーション*/}
      <p className="my-4 text-red-500 block md:hidden">
        PC表示にするとヘッダーにナビゲーションが現れます
      </p>
    </div>
  );
}
