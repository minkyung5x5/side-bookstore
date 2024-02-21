import dayjs from 'dayjs'

export interface Reservation {
    bookList: Book[];
    name: string;
    phone: string;
    date: dayjs.Dayjs | string;
    time: string;
    etc?: string;
}