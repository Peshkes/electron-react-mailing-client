export type StatusResponse = {
    status: string;
}

export type ApiResponse<T> = T | StatusResponse | StatusResponse & T;

export type Id = {
    "id": number;
}

export type ClientData = {
    phone_number: string;
    name: string;
    type_id: number | null;
    check_in_date: number;
    check_out_date: number;
    messanger_id?: number | null;
}

export type Client = ClientData & Id & {
    chat_id: number | null;
};

export type SearchField = 'phone' | 'name';

export type ClientSearchParams = {
    searchString: string;
    fields: Array<SearchField>;
}

export type PaginationParams = {
    page: number;
    limit: number;
}

export type PaginationRequestParams = {
    type?: number
} & PaginationParams

export type PaginationResponseParams = {
    totalPages: string;
    total: number
} & PaginationParams

export type ClientPaginationResponse = {
    data: Client[];
    pagination: PaginationResponseParams;
}

//MESSAGES

export type messageSkeleton = {
    theme: string;
    message_text: string;
    recipient_type_id: number;
    media_path?: string | null;
}

export type MessageData = messageSkeleton & {
    sending_date: number;
}

export type Message = MessageData & Id;

export type SampleMessageData = MessageData & {
    sample_name: string;
}

export type SampleMessage = SampleMessageData & Id;

export type MessagePaginationResponse = {
    data: Message[];
    pagination: PaginationResponseParams;
}

export type MessageSearchObject = {
    string?: string;
    date_from?: number;
    date_to?: number;
}