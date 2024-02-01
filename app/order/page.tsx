"use client"

import { PlusOutlined } from '@ant-design/icons';
import {
    Card,
    Button,
    Form,
    Input,
    Select,
} from 'antd';
import type { GetProps } from 'antd';
import type { SearchProps } from 'antd/es/input/Search';

import 'dayjs/locale/ko'
import dayjs, { Dayjs } from 'dayjs'
import dayjsGenerateConfig from 'rc-picker/lib/generate/dayjs'
import generatePicker from 'antd/es/date-picker/generatePicker'
import locale from 'antd/es/date-picker/locale/ko_KR'
import Search from 'antd/es/input/Search';
import { writeToNotion } from '@/apiClient/actions/writeToNotion';

type RangePickerProps = GetProps<typeof DatePicker.RangePicker>;

const DatePicker = generatePicker<Dayjs>(dayjsGenerateConfig)

interface ReservationFormData {
    name: string;
    phone: string;
    date: dayjs.Dayjs | string;
    time: string;
    etc?: string;
}

export default function Order() {
    const [form] = Form.useForm();
    const { Option } = Select;
    const { TextArea } = Input;

    const disabledDate: RangePickerProps['disabledDate'] = (current) => {
        const today = dayjs().endOf('day');
        const twoDaysLater = dayjs().add(2, 'days').endOf('day');
        const isWeekend = current.day() === 0 || current.day() === 6;
        return current && ((current < twoDaysLater) || isWeekend);
    };
    const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value);


    const handleWriteToNotion = async (title: string, content: string) => {
        try {
          const data = await writeToNotion(title, content);
          console.log('Data written to Notion:', data);
        } catch (error) {
          console.error('Error writing to Notion:', error);
        }
      };
      
    const formatValues = (values: ReservationFormData) => {
        return {
            ...values,
            date: typeof values.date === 'string' ? values.date : values.date.format('YYYY-MM-DD'),
        };
    };

    const onFinish = (values: ReservationFormData) => {
        const formattedValues = formatValues(values);
        console.log(formattedValues);
        handleWriteToNotion(formattedValues.name, formattedValues.phone)
    };

    return (
        <main className="">
            <Card className="max-w-96 m-4 mx-auto" title="책 검색하기">
                <Search placeholder="책 제목을 입력해주세요" onSearch={onSearch} enterButton />
            </Card>
            <Card className="max-w-96 m-4 mx-auto" title="주문하기">
                <Form
                    onFinish={onFinish}
                    layout="vertical"
                >
                    <Form.Item name="name" label="이름" rules={[{ required: true, message: '이름 또는 닉네임을 입력해주세요!' }]}>
                        <Input placeholder='홍길동' allowClear />
                    </Form.Item>

                    <Form.Item name="phone" label="전화번호" rules={[{ required: true, message: '전화번호를 입력해주세요!' }]}>
                        <Input placeholder='01012341234' allowClear />
                    </Form.Item>

                    <Form.Item name="date" label="날짜" rules={[{ required: true, message: '날짜를 선택해주세요!' }]}>
                        <DatePicker
                            className='w-full' locale={locale}
                            disabledDate={disabledDate} showToday={false}
                            placeholder='원하는 날짜를 선택해주세요' />
                    </Form.Item>
                    <Form.Item name="time" label="시간" rules={[{ required: true, message: '시간을 선택해주세요!' }]}>
                        <Select
                            placeholder="원하는 시간을 선택해주세요"
                            allowClear
                        >
                            <Option value="14:00">오후 2:00</Option>
                            <Option value="14:30">오후 2:30</Option>
                            <Option value="15:00">오후 3:00</Option>
                            <Option value="15:30">오후 3:30</Option>
                            <Option value="16:00">오후 4:00</Option>
                            <Option value="16:30">오후 4:30</Option>
                            <Option value="17:00">오후 5:00</Option>
                            <Option value="17:30">오후 5:30</Option>
                            <Option value="18:00">오후 6:00</Option>
                            <Option value="18:30">오후 6:30</Option>
                            <Option value="19:00">오후 7:00</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item name="etc" label="하고 싶은 말">
                        <TextArea rows={4} maxLength={100} />
                    </Form.Item>

                    <Form.Item className='my-0 flex justify-end'>
                        <Button type="primary" htmlType="submit" size="large" shape="round">{'예약하기'}</Button>
                    </Form.Item>
                </Form>
            </Card>
        </main >
    )
}