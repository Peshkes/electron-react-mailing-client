export function timestampToDate(timestamp: number): string {
    const date = new Date(timestamp);
    console.log(date.toISOString().slice(0, 16))
    return date.toISOString().slice(0, 16);
}

export function timestampToDateFormatted(timestamp: number | null): string {
    if (timestamp === null) return '';
    const date = new Date(timestamp);

    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // месяцы начинаются с 0
    const year = date.getFullYear();

    return `${hours}:${minutes} ${day}-${month}-${year}`;
}

export function dateToTimestamp(dateString: string): number {
    const [time, date] = dateString.split(' ');
    const [hours, minutes] = time.split(':');
    const [day, month, year] = date.split('-');

    return new Date(`${year}-${month}-${day}T${hours}:${minutes}`).getTime();
}