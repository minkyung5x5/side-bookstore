# 책방 - 책 주문 서비스

## 배포 주소 - https://side-bookstore.vercel.app/
<p align="center">  
  <img width="32%" align="top" src="https://github.com/minkyung5x5/side-bookstore/assets/122676660/4b0adbf2-8fab-4a92-8e8f-1cff54bbc01d">
  <img width="32%" align="top" src="https://github.com/minkyung5x5/side-bookstore/assets/122676660/b9a726b7-0382-4f20-9d53-10b370ae8ba2">
  <img width="32%" align="top" src="https://github.com/minkyung5x5/side-bookstore/assets/122676660/9931fd97-34f3-4dce-a68d-cbb789eeeb91">
</p>  
<p align="center">  
  <img width="32%" align="top" src="https://github.com/minkyung5x5/side-bookstore/assets/122676660/2a6cb513-dc63-4f12-9a20-d3e5562f33d8">
  <img width="32%" align="top" src="https://github.com/minkyung5x5/side-bookstore/assets/122676660/c1f41581-7d66-449a-8c55-94f5fdbe5306">
  <img width="32%" align="top" src="https://github.com/minkyung5x5/side-bookstore/assets/122676660/9e43fed4-a2eb-4498-8128-8265bd65f1c9">
</p>

## 프로젝트 소개
### 목적
책방에 방문해 책을 수령하고 싶은 소비자를 위한 책 주문 서비스

### 기능
#### 1. 책 검색하기
- 책 검색창에 검색어를 입력하면 실시간으로 알라딘 API를 요청하여 책 리스트를 가져온다.
- 책리스트에서 책 표지/제목/작가/출판사/가격을 보여준다.
- \+ 버튼을 클릭하면 책 바구니에 책을 담는다.

#### 2. 책 바구니
- 책 바구니에 담은 책의 총 가격을 책정하여 보여준다.
- \- 버튼을 클릭하면 책 바구니에서 책을 뺀다.
 
#### 3. 책 주문하기
- 주문할 책에 대한 정보를 상단에 보여준다.
- 주문하기 폼에서 '이름/전화번호/날짜/시간/하고싶은 말'을 입력받는다.

#### 4. 예약하기
- '예약하기' 버튼 클릭시 Notion API를 호출하여 노션 테이블에 정보값을 입력한다.
- 입력이 완료되면 예약완료, 주문내역이 표시되고 <a href="https://prism-produce-2d1.notion.site/c5e46393727043f4aecb08cc5fad94a6?v=2d207eb7202a4868af1833c5f828e0ae">노션 페이지</a>에서 확인할 수 있다. 

### API
#### 1. Notion API
- 노션의 데이터와 콘텐츠를 프로그래밍적으로 접근, 생성, 수정, 삭제할 수 있는 API 
- <a href="https://developers.notion.com/docs/getting-started">Notion API Document</a> 

#### 2. Aladin API
- 알라딘의 상품정보와 검색정보를 사용할 수 있는 API
- <a href="https://blog.aladin.co.kr/openapi/category/29154404?communitytype=MyPaper">Aladin API Document</a>

### 라이브러리
#### 1. Ant Design
- React를 위한 고품질 UI 컴포넌트와 디자인 시스템을 제공하여 빠르고 효율적인 웹 애플리케이션 개발을 돕는 라이브러리
- <a href="https://ant.design/docs/react/introduce">Ant Design Document</a>


### 빌드 방법

1. 깃헙 레포지토리 클론

   ```$ git clone https://github.com/minkyung5x5/side-bookstore.git```
2. Terminal에서 패키지 설치
   
   ```$ npm install```
   
4. Terminal에서 실행
   
   ```$ npm run dev```

