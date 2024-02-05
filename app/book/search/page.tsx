"use client"

import { getFromAladin } from "@/apiClient/actions/aladin";
import { AutoComplete, Card, Flex, Select, SelectProps } from "antd";
import { SearchProps } from "antd/es/input";
import Search from "antd/es/input/Search";
import debounce from 'lodash/debounce';
import { useEffect, useState } from "react";
import Image from 'next/image'

export default function BookSearch() {
    const [selectedBookList, setSelectedBookList] = useState<Book[]>([]);
    const [searchedBookList, setSearchedBookList] = useState<Book[]>([]);
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

    const Book: React.FC<Book> = ({ cover, title, author, publisher, priceStandard }) => (
        <div className="flex items-center gap-2">
            <div className="w-1/5">
                <Image
                    src={cover}
                    alt="Cover of book"
                    width={60}
                    height={90}
                />
            </div>
            <div className="flex flex-col gap-0.5">
                <div className="truncate font-semibold border-4 border-purple">{title}</div>
                <div className="text-sm text-gray-400">{author}</div>
                <div className="text-xs text-gray-400">{publisher}</div>
                <div className="font-semibold text-purple">{priceStandard}{'원'}</div>
            </div>
        </div>
    );

    const formatOptions = (bookList: any[]) => (bookList || []).map((book, idx) => ({
        value: idx,
        label: (<Book key={idx} {...book} />),
    }));


    return (
        <main className="">
            <Card className="max-w-96 m-4 mx-auto" title="책 검색하기">

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

            <Card className="max-w-96 m-4 mx-auto" title="책 바구니">
                {selectedBookList.map((book, idx) => (
                    <Book key={idx} {...book} />
                ))}
            </Card>

        </main>
    );
}