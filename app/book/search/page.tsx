"use client"

import { Card } from "antd";
import { SearchProps } from "antd/es/input";
import Search from "antd/es/input/Search";
import debounce from 'lodash/debounce';

export default function BookSearch() {
    const callApi = (value: string) => {
        console.log("Calling API with value:", value);
    };

    const onChange: SearchProps['onChange'] = debounce((e) => {
        const value = e.target.value;
        console.log("Input changed:", value);
        callApi(value);
    }, 300); 

    const onSearch: SearchProps['onSearch'] = (value, _e, info) => {
        console.log(info?.source, value);
        callApi(value);
    };

    return (
        <main className="">
            <Card className="max-w-96 m-4 mx-auto" title="책 검색하기">
                <Search
                    placeholder="책 제목을 입력해주세요"
                    onChange={onChange}
                    onSearch={onSearch}
                    enterButton
                />
            </Card>
        </main>
    );
}