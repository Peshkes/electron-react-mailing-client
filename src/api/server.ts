import {
    ApiResponse,
    Client,
    ClientData,
    Id,
    PaginationRequestParams,
    PaginationResponse,
    PaginationResponseParams,
    SearchParams,
    StatusResponse
} from './types';

const server = 'http://localhost:49152:';

// CLIENTS

// Добавить нового клиента
export async function addClient(clientData: ClientData): Promise<ApiResponse<Client>> {
    return request('/client', 'POST', clientData);
}

// Получить клиентов по ID типа
export async function getClientsByType(typeId: number): Promise<ApiResponse<Client[]>> {
    return request(`/client/${typeId}`);
}

// Получить клиента по ID
export async function getClientById(clientId: number): Promise<ApiResponse<Client>> {
    return request(`/client/${clientId}`);
}

// Удалить клиента по ID
export async function deleteClientById(clientId: number): Promise<ApiResponse<Client>> {
    return request(`/client/${clientId}`, 'DELETE');
}

// Обновить информацию о клиенте
export async function updateClient(clientId: number, clientData: Client): Promise<ApiResponse<Id>> {
    return request(`/client/${clientId}`, 'PUT', clientData);
}

// Обновить мессенджер клиента
export async function updateClientMessenger(clientId: number, messangerId: number): Promise<ApiResponse<Id>> {
    return request(`/client/${clientId}/${messangerId}`, 'PUT');
}

// Получить всех клиентов с пагинацией
export async function getAllClients(params: PaginationRequestParams): Promise<ApiResponse<PaginationResponse>> {
    const query = new URLSearchParams(params as any).toString();
    return request(`/client?${query}`);
}

// Получить кликентов по поисковому запросу
export async function searchClients(params: SearchParams): Promise<ApiResponse<Client[]>> {
    const queryParams = new URLSearchParams({
        fields: params.fields.join(',')
    }).toString();
    return request(`/client/search/${params.searchString}?${queryParams}`);
}

// Получить клиентов с без типов
export async function getClientsWithUnselectedType(): Promise<ApiResponse<Client[]>> {
    return request(`/client/all/without_types`);
}

// Получить клиентов с телеграм ошибкой
export async function getClientsWithTelegramError(): Promise<ApiResponse<Client[]>> {
    return request(`/client/all/telegram_error`);
}

// Получить последних добавленных клиентов
export async function getLastClients(count: number): Promise<ApiResponse<Client[]>> {
    return request(`/client/all/last/${count}`);
}


async function request<T>(endpoint: string, method: string = 'GET', body?: any): Promise<ApiResponse<T>> {
    const response = await fetch(`${server}${endpoint}`, {
        method,
        headers: {
            'Content-Type': 'application/json',
        },
        body: body ? JSON.stringify(body) : undefined,
    });

    const result: ApiResponse<T> = await response.json();
    if (!response.ok) {
        throw new Error((result as StatusResponse).status || 'Network response was not ok.');
    } else {
        return result;
    }
}