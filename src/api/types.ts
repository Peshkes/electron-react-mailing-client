export type StatusResponse = {
    status: string;
}

export type ApiResponse<T> = T | StatusResponse | StatusResponse & T;

export type Id = {
    "id": number
}

export type ClientData = {
    phone_number: string;
    name: string;
    type_id: number | null;
    check_in_date: number;
    check_out_date: number;
    messanger_id?: number | null;
}

export type Client = ClientData & Id

export type SearchField = 'phone' | 'name';

export type SearchParams = {
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

export type PaginationResponse = {
    data: Client[];
    pagination: PaginationResponseParams
}