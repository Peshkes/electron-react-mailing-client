import {
    ApiResponse,
    Client,
    ClientData,
    ClientPaginationResponse,
    Id,
    Message,
    MessageData, MessagePaginationResponse, MessageSearchObject,
    PaginationRequestParams,
    ClientSearchParams,
    StatusResponse, SampleMessageData, SampleMessage, MessengerType, ClientType
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
export async function getAllClients(params: PaginationRequestParams): Promise<ApiResponse<ClientPaginationResponse>> {
    const query = new URLSearchParams(params as any).toString();
    return request(`/client?${query}`);
}

// Получить кликентов по поисковому запросу
export async function searchClients(params: ClientSearchParams): Promise<ApiResponse<Client[]>> {
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

//MESSAGES

// Добавить новое сообщение
export async function addMessage(messageData: MessageData): Promise<ApiResponse<Id>> {
    return request('/message', 'POST', messageData);
}

// Получить сообщение по ID
export async function getMessageById(messageId: number): Promise<ApiResponse<Message>> {
    return request(`/message/${messageId}`);
}

// Обновить сообщение по ID
export async function updateMessage(messageId: number, messageData: Message): Promise<ApiResponse<Id>> {
    return request(`/message/${messageId}`, 'PUT', messageData);
}

// Удалить сообщение по ID
export async function deleteMessageById(messageId: number): Promise<ApiResponse<Message>> {
    return request(`/message/${messageId}`, 'DELETE');
}

// Отправить ранее отложненное сообщение
export async function sendDelayedMessage(messageId: number): Promise<ApiResponse<StatusResponse>> {
    return request(`/message/sent-now/${messageId}`, 'POST');
}

// Немедленно отправить сообщение
export async function sendMessageNow(messageData: MessageData): Promise<ApiResponse<StatusResponse>> {
    return request(`/message/send-now}`, 'POST', messageData);
}

// Получить все сообщения
export async function getAllMessages(): Promise<ApiResponse<Message[]>> {
    return request(`/message/all`);
}

// Получить все сообщения с пагинацией
export async function getAllMessagesWithPagination(params: PaginationRequestParams): Promise<ApiResponse<MessagePaginationResponse>> {
    const query = new URLSearchParams(params as any).toString();
    return request(`/message/all/paginated?${query}`);
}

// Получить ближайшие сообщения
export async function getNearestMessages(count: number): Promise<ApiResponse<Message[]>> {
    return request(`/message/all/upcoming/${count}`);
}

// Поиск по тексту и диапазону дат
export async function searchMessages(object: MessageSearchObject): Promise<ApiResponse<Message[]>> {
    const hasProperties = Object.keys(object).length > 0;
    if (!hasProperties) {
        throw new Error('Search object is empty');
    }
    const query = new URLSearchParams(object as any).toString();
    return request(`/message/all/paginated?${query}`);
}

// Получить сообщения по типу получателя
export async function getMessagesByRecipientType(recipientTypeId: number): Promise<ApiResponse<Message[]>> {
    return request(`/message/all/recipient-type/${recipientTypeId}`);
}

// MESSAGE SAMPLE

// Добавить новый шаблон
export async function addSampleMessage(messageData: SampleMessageData): Promise<ApiResponse<Id>> {
    return request('/message/sample', 'POST', messageData);
}

// Получить шаблон по ID
export async function getSampleMessageById(messageId: number): Promise<ApiResponse<SampleMessage>> {
    return request(`/message/sample/${messageId}`);
}

// Получить все шаблоны
export async function getAllSampleMessages(): Promise<ApiResponse<SampleMessage[]>> {
    return request(`/message/sample/all`);
}

// Обновить шаблон по ID
export async function updateSampleMessage(messageId: number, messageData: SampleMessageData): Promise<ApiResponse<SampleMessage>> {
    return request(`/message/sample/${messageId}`, 'PUT', messageData);
}

// Удалить шаблон по ID
export async function deleteSampleMessageById(messageId: number): Promise<ApiResponse<SampleMessage>> {
    return request(`/message/sample/${messageId}`, 'DELETE');
}

// UTILITIES

// Типы мессенджеров
export async function getMessengerTypes(): Promise<ApiResponse<MessengerType[]>> {
    return request(`/utility/messenger-types`);
}

// Типы получателей
export async function getRecipientTypes(): Promise<ApiResponse<ClientType[]>> {
    return request(`/utility/recipient-types`);
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