export default function Home() {
  return (
    <div>
      <h2>SOSHIDAホームページ（開発中）</h2>
      <p className="my-4">コンテンツあり</p>
      <ul className="ml-4 flex flex-col gap-2">
        <li>About</li>
        <li>Blog（現状のメインコンテンツ）</li>
        <li>Link</li>
      </ul>
      <p className="my-4 text-red-500 block md:hidden">
        PC表示にするとヘッダーにナビゲーションが現れます
      </p>
    </div>
  );
}
