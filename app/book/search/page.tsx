"use client"

import { getFromAladin } from "@/apiClient/actions/aladin";
import { AutoComplete, Card, Flex, Select, SelectProps } from "antd";
import { SearchProps } from "antd/es/input";
import Search from "antd/es/input/Search";
import debounce from 'lodash/debounce';
import { useEffect, useState } from "react";
import Image from 'next/image'

export default function BookSearch() {
    const [selectedBookList, setSelectedBookList] = useState([]);
    const [options, setOptions] = useState<SelectProps<object>['options']>([]);

    useEffect(() => {
        console.log("Updated option");
        console.log(options)
    }, [options]);

    const callApi = async (query: string) => {
        try {
            const data = await getFromAladin({ query });
            const bookList = data.item;
            console.log(bookList)
            setOptions(searchResult(bookList));
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


    const onSelect = (value: string) => {
        console.log('onSelect', value);
    };

    const searchResult = (bookList: any[]) => (bookList || []).map((book) => ({
        value: book.itemId,
        label: (
            <Flex key={book.itemId} gap='small'>
                <Image
                    src={book.cover}
                    alt="Cover of book"
                    width={60}
                    height={90}
                />
                <Flex vertical gap='2'>
                    <div>{book.title}</div>
                    <div>{book.author}</div>
                    <div>{book.publisher}</div>
                </Flex>
            </Flex>
        ),
    }));


    return (
        <main className="">
            <Card className="max-w-96 m-4 mx-auto" title="책 검색하기">
                <AutoComplete
                    popupMatchSelectWidth={300}
                    style={{ width: 300 }}
                    options={options}
                    onSelect={onSelect}
                    size="large"
                >
                    <Search
                        placeholder="책 제목을 입력해주세요"
                        onChange={onChange}
                        onSearch={onSearch}
                        enterButton
                    />
                </AutoComplete>

            </Card>
        </main>
    );
}