"use client"

import { getFromAladin } from "@/apiClient/actions/aladin";
import Book from "@/app/components/book";
import calculateTotalPrice from "@/app/utils/calculateTotalPrice";
import { AutoComplete, Button, Card, Flex, Select, SelectProps } from "antd";
import { SearchProps } from "antd/es/input";
import Search from "antd/es/input/Search";
import debounce from 'lodash/debounce';
import Link from "next/link";
import { useEffect, useState } from "react";

export default function BookSearch() {
    const [selectedBookList, setSelectedBookList] = useState<Book[]>([]);
    const [searchedBookList, setSearchedBookList] = useState<Book[]>([]);
    const [totalPrice, setTotalPrice] = useState<number>(0);
    const [options, setOptions] = useState<{ value: number; label: React.ReactNode }[]>([]);

    useEffect(() => {
        console.log("Updated searchedBookList");
        console.log(searchedBookList)
        const newOptions = formatOptions(searchedBookList)
        setOptions(newOptions);

    }, [searchedBookList]);

    useEffect(() => {
        console.log("Updated selectedBookList");
        console.log(selectedBookList)
        localStorage.setItem('selectedBookList', JSON.stringify(selectedBookList));
        const total = calculateTotalPrice(selectedBookList);
        setTotalPrice(total);
    }, [selectedBookList]);

    const callApi = async (query: string) => {
        try {
            const data = await getFromAladin({ query });
            setSearchedBookList(data.item);
            console.log('Data from aladin:', data);
        } catch (error) {
            console.error('Error aladin', error);
        }
    };

    const onChange: SearchProps['onChange'] = debounce((e) => {
        const value = e.target.value;
        console.log("Input changed:", value);
        callApi(value);
    }, 300);

    const onSearch: SearchProps['onSearch'] = (value) => {
        console.log('search', value);
        callApi(value);
    };


    const onSelect = (idx: number) => {
        console.log('onSelect', searchedBookList[idx]);
        const newSelectedBook = searchedBookList[idx]
        setSelectedBookList(selectedBookList => [...selectedBookList, newSelectedBook])
    };

    const onDelete = (bookId: string) => {
        setSelectedBookList(selectedBookList => selectedBookList.filter(book => book.itemId !== bookId));
    };

    const formatOptions = (bookList: any[]) => (bookList || []).map((book, idx) => ({
        value: idx,
        label: (<Book key={idx} {...book} cartOption={"plus"} />),
    }));


    return (
        <main className="m-4">
            <Card className="max-w-96 mx-auto" title="책 검색하기">
                <AutoComplete
                    className="w-full"
                    options={options}
                    onSelect={onSelect}
                    size="large"
                    autoFocus={true}
                >
                    <Search
                        placeholder="책 제목을 입력해주세요"
                        onChange={onChange}
                        onSearch={onSearch}
                        enterButton
                    />
                </AutoComplete>
            </Card>

            <Card className="max-w-96 mt-4 mx-auto" title="책 바구니"
                actions={selectedBookList.length === 0 ? []
                    : [
                        <div className="h-10 flex justify-center items-center font-semibold text-purple">{'총 ' + totalPrice + '원'}</div>,
                        <Link href="/book/order">
                            <Button type="primary" size="large" shape="round">주문하기</Button>
                        </Link>
                    ]}
            >
                {selectedBookList.length === 0 &&
                    <div className="text-center text-gray-400">{'📚 책을 검색해서 선택해주세요 📚'}</div>
                }
                {selectedBookList.map((book, idx) => (
                    <Book key={idx} {...book} cartOption={"minus"} onDelete={onDelete} />
                ))}
            </Card>
        </main>
    );
}