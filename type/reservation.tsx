import dayjs from 'dayjs'

export interface Reservation {
    name: string;
    phone: string;
    date: dayjs.Dayjs | string;
    time: string;
    etc?: string;
}