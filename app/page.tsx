import { Button } from "antd";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="m-4 flex flex-col items-center space-y-4">
      <div>{'책방 설명'}</div>

      <div>{'책방 위치'}</div>
      <Link href="/book/search">
        <Button type="primary" size="large" shape="round">{'방문수령 신청하기'}</Button>
      </Link>

    </main>
  );
}
