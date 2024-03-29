import { PlusCircleOutlined, MinusCircleOutlined } from '@ant-design/icons';
import Image from 'next/image'

const Book: React.FC<Book & { idx: number, cartOption: string, onDelete?: (itemId: number) => void }>
    = ({ idx, itemId, cover, title, author, publisher, priceStandard, cartOption, onDelete }) => (
        <div className="my-1 border-1 border-purple w-full flex items-center justify-between">
            <div className="w-1/5">
                <Image
                    src={cover}
                    alt="Cover of book"
                    width={60}
                    height={90}
                />
            </div>
            <div className="pl-2 w-2/3 flex flex-wrap flex-col gap-0.5">
                <div className="w-full truncate font-semibold">{title}</div>
                <div className="w-full truncate text-sm text-gray-400">{author}</div>
                <div className="w-full truncate text-xs text-gray-400">{publisher}</div>
                <div className="ml-auto font-semibold text-purple">{priceStandard}{'원'}</div>
            </div>
            <div className="w-1/10">
                {cartOption === "plus" ? (
                    <PlusCircleOutlined style={{ color: '#6200ff' }} />
                ) : cartOption === "minus" && onDelete ? (
                    <MinusCircleOutlined onClick={() => onDelete(idx)} style={{ color: '#6200ff' }} />
                ) : null}
            </div>
        </div>
    );

export default Book;