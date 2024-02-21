"use client"

import Book from "@/app/components/book";
import calculateTotalPrice from "@/app/utils/calculateTotalPrice";
import { Reservation } from "@/type/reservation";
import { Button, Card } from "antd";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function BookSubmit() {
    const [reservation, setReservation] = useState<Reservation>();

    useEffect(() => {
        const storedReservation = localStorage.getItem('reservation');
        if (storedReservation) {
            setReservation(JSON.parse(storedReservation));
        }
        console.log(reservation)
    }, []);

    return (
        <main className="m-4">
            <Card className="max-w-96 mx-auto" title="예약 완료 ✨">
                <div className="flex flex-col space-y-1">
                    <div>{'📍 책방에 책이 도착하면 연락드려요'}</div>
                    <div>{'📍 결제는 책방에서 진행해요'}</div>
                    <div>{'📍 시간에 맞춰 방문해주세요'}</div>
                    <div>{'📍 방문이 늦어지면 연락해주세요'}</div>
                    <div>{'📞 02-0000-0000'}</div>
                </div>
            </Card>

            <Card className="mt-4 max-w-96 mx-auto" title="주문내역">
                {reservation && (

                    <div>
                        <div className="grid grid-cols-3 gap-2">
                            <div className="font-bold">{'이름'}</div>
                            <div className="col-span-2">{reservation.name}</div>
                            <div className="font-bold">{'전화번호'}</div>
                            <div className="col-span-2">{reservation.phone}</div>
                            <div className="font-bold">{'날짜'}</div>
                            <div className="col-span-2">{typeof reservation.date === 'string' && reservation.date}</div>
                            <div className="font-bold">{'시간'}</div>
                            <div className="col-span-2">{reservation.time}</div>
                            {reservation.etc && (
                                <div>
                                    <div className="font-bold">{'하고싶은말'}</div>
                                    <div className="col-span-2">{reservation.etc}</div>
                                </div>
                            )}
                            <div className="font-bold">{'주문한 책'}</div>
                            <div className="col-span-3">
                                {reservation.bookList.map((book, idx) => (
                                    <Book key={idx} {...book} cartOption={"none"} />
                                ))}
                            </div>
                        </div>


                    </div>
                )}
            </Card>
            <div className="my-4 flex justify-center">
                <Link href="/">
                    <Button type="primary" size="large" shape="round">{'책방 홈으로 가기'}</Button>
                </Link>
            </div>
        </main>
    );
}