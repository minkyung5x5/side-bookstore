import { Card, Space } from 'antd';


export default function Order() {
    return (
        <main className="flex flex-col items-center ">
            <h1 className='text-red'>Order</h1>
            <Space direction="vertical" size={16}>
                <Card title="Default size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                </Card>
                <Card size="small" title="Small size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                </Card>
            </Space>
        </main>
    )
}