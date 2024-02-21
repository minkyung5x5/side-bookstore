import { Button, Card } from "antd";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="m-4 flex flex-col items-center space-y-4">

      <Link className="w-full" href="/book/search">
        <Button type="default" size="large" block className="h-14 font-bold text-purple">{'📚 방문수령 신청하기 📚'}</Button>
      </Link>
      <Card className="bg-white bg-opacity-30 " bordered={false}>
        <div className="mb-2 text-lg font-bold">{'책방 소개'}</div>
        <div>{'저희 책방은 독서를 즐기시는 분들께 다양한 책과 서비스를 제공해요.'}</div>
        <div>{'독서 경험이 풍부한 도서 전문가들이 선별한 책들로 가득 차 있어요. 소설, 자기계발서, 역사, 예술 등 다양한 주제의 책들을 찾아보실 수 있어요.'}</div>
        <div>{'또한 특별한 이벤트나 작가와의 만남을 통해 독서 커뮤니티를 활성화시키고 있어요. 저희 책방은 독서를 즐기는 분들이 함께 모여 새로운 지식과 경험을 공유할 수 있는 소중한 장소에요. 함께 독서의 즐거움을 나누고 새로운 세계를 탐험해봐요!'}</div>
        <div className="mt-4 mb-2 text-lg font-bold">{'책방 정보'}</div>
        <div>{'영업시간: 평일 14:00~19:00'}</div>
        <div>{'전화번호: 02-0000-0000'}</div>
        <div>{'주소: 서울특별시 00구 00동'}</div>
        <div className="mt-4 flex justify-between space-x-2">
          <Link className="w-full" href="https://naver.me/G87ucL8q" target="_blank">
            <Button className="h-10 bg-naver" type="primary" block>{'네이버지도 길찾기'}</Button>
          </Link>
          <Link className="w-full" href="https://kko.to/MdJqM6L5tt" target="_blank">
            <Button className="h-10 bg-kakao" type="default" block>{'카카오맵 길찾기'}</Button>
          </Link>
        </div>
      </Card>

    </main>
  );
}
