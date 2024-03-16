export interface Customer {
    image: string,
    name:string,
    phone: number,
    ticketNo: string,
    price: number,
    cinemaNames: string,
    PersonsNo: number,
    buyTimes : string,
    ticketType: TicketType
}
interface TicketType{
    ticketNo: string,
    format: string,
    fileSize: string
}
