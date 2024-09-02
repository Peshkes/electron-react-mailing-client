import {
    ApiResponse, Client, ClientData, Id, PaginationRequestParams, PaginationResponse,
    PaginationResponseParams, SearchParams
} from './types';

const now = Date.now();

const fakeClients: Client[] = [
    // Clients with various data
    { id: 1, phone_number: '123-456-7890', name: 'Client One', type_id: 1, check_in_date: now, check_out_date: now + 86400000, messanger_id: 1 },
    { id: 2, phone_number: '987-654-3210', name: 'Client Two', type_id: 2, check_in_date: now, check_out_date: now + 86400000, messanger_id: 2 },
    { id: 3, phone_number: '555-555-5555', name: 'Client Three', type_id: 1, check_in_date: now, check_out_date: now + 86400000, messanger_id: 1 },
    { id: 4, phone_number: '444-444-4444', name: 'Client Four', type_id: 3, check_in_date: now, check_out_date: now + 86400000, messanger_id: 3 },
    { id: 5, phone_number: '333-333-3333', name: 'Client Five', type_id: 2, check_in_date: now, check_out_date: now + 86400000, messanger_id: 2 },
    { id: 6, phone_number: '222-222-2222', name: 'Client Six', type_id: 1, check_in_date: now, check_out_date: now + 86400000, messanger_id: 1 },
    { id: 7, phone_number: '111-111-1111', name: 'Client Seven', type_id: 2, check_in_date: now, check_out_date: now + 86400000, messanger_id: 2 },
    { id: 8, phone_number: '999-999-9999', name: 'Client Eight', type_id: 1, check_in_date: now, check_out_date: now + 86400000, messanger_id: 1 },
    { id: 9, phone_number: '888-888-8888', name: 'Client Nine', type_id: 4, check_in_date: now, check_out_date: now + 86400000, messanger_id: 4 },
    { id: 10, phone_number: '777-777-7777', name: 'Client Ten', type_id: 5, check_in_date: now, check_out_date: now + 86400000, messanger_id: 5 },
    { id: 11, phone_number: '666-666-6666', name: 'Client Eleven', type_id: 3, check_in_date: now, check_out_date: now + 86400000, messanger_id: 3 },
    { id: 12, phone_number: '555-666-7777', name: 'Client Twelve', type_id: 6, check_in_date: now, check_out_date: now + 86400000, messanger_id: 6 },
    { id: 13, phone_number: '444-555-6666', name: 'Client Thirteen', type_id: 7, check_in_date: now, check_out_date: now + 86400000, messanger_id: 7 },
    { id: 14, phone_number: '333-444-5555', name: 'Client Fourteen', type_id: 8, check_in_date: now, check_out_date: now + 86400000, messanger_id: 8 },
    { id: 15, phone_number: '222-333-4444', name: 'Client Fifteen', type_id: 9, check_in_date: now, check_out_date: now + 86400000, messanger_id: 9 },
    // Clients without types
    { id: 16, phone_number: '111-222-3333', name: 'Client Sixteen', type_id: null, check_in_date: now, check_out_date: now + 86400000, messanger_id: 1 },
    { id: 17, phone_number: '000-111-2222', name: 'Client Seventeen', type_id: null, check_in_date: now, check_out_date: now + 86400000, messanger_id: 2 },
    // Clients with Telegram error
    { id: 18, phone_number: '999-000-1111', name: 'Client Eighteen', type_id: 1, check_in_date: now, check_out_date: now + 86400000, messanger_id: null },
    { id: 19, phone_number: '888-999-0000', name: 'Client Nineteen', type_id: 2, check_in_date: now, check_out_date: now + 86400000, messanger_id: null }
];

export async function addClient(clientData: ClientData): Promise<ApiResponse<Client>> {
    const newClient: Client = { id: fakeClients.length + 1, ...clientData };
    fakeClients.push(newClient);
    return newClient;
}

export async function getClientsByType(typeId: number): Promise<ApiResponse<Client[]>> {
    const clients = fakeClients.filter(client => client.type_id === typeId);
    if (clients.length > 0) {
        return clients;
    } else {
        return { status: 'No clients found for the specified type' };
    }
}

export async function getClientById(clientId: number): Promise<ApiResponse<Client>> {
    const client = fakeClients.find(client => client.id === clientId);
    if (client) {
        return client;
    } else {
        return { status: 'Client not found' };
    }
}

export async function deleteClientById(clientId: number): Promise<ApiResponse<Client>> {
    const clientIndex = fakeClients.findIndex(client => client.id === clientId);
    if (clientIndex !== -1) {
        const [deletedClient] = fakeClients.splice(clientIndex, 1);
        return deletedClient;
    } else {
        return { status: 'Client not found' };
    }
}

export async function updateClient(clientId: number, clientData: Client): Promise<ApiResponse<Id>> {
    const index = fakeClients.findIndex(client => client.id === clientId);
    if (index !== -1) {
        fakeClients[index] = { ...fakeClients[index], ...clientData };
        return { id: clientId };
    } else {
        return { status: 'Client not found' };
    }
}

export async function updateClientMessenger(clientId: number, messangerId: number): Promise<ApiResponse<Id>> {
    const client = fakeClients.find(client => client.id === clientId);
    if (client) {
        client.messanger_id = messangerId;
        return { id: clientId };
    } else {
        return { status: 'Client not found' };
    }
}

export async function getAllClients(params: PaginationRequestParams): Promise<ApiResponse<PaginationResponse>> {
    const startIndex = (params.page - 1) * params.limit;
    const paginatedClients = fakeClients.slice(startIndex, startIndex + params.limit);

    const paginationResponse: PaginationResponseParams = {
        totalPages: Math.ceil(fakeClients.length / params.limit).toString(),
        total: fakeClients.length,
        page: params.page,
        limit: params.limit,
    };

    const result = {
        data: paginationResponse,
        pagination: paginatedClients,
    };

    return {
        status: 'success',
        ...result
    } as ApiResponse<PaginationResponse>;
}

export async function searchClients(params: SearchParams): Promise<ApiResponse<Client[]>> {
    const filteredClients = fakeClients.filter(client =>
        (params.fields.includes('phone') && client.phone_number.includes(params.searchString)) ||
        (params.fields.includes('name') && client.name.includes(params.searchString))
    );

    if (filteredClients.length > 0) {
        return filteredClients;
    } else {
        return { status: 'No clients found matching the search criteria' };
    }
}

export async function getClientsWithUnselectedType(): Promise<ApiResponse<Client[]>> {
    const clients = fakeClients.filter(client => client.type_id === null);
    if (clients.length > 0) {
        return clients;
    } else {
        return { status: 'No clients found with unselected type' };
    }
}

export async function getClientsWithTelegramError(): Promise<ApiResponse<Client[]>> {
    const clients = fakeClients.filter(client => client.messanger_id === null);
    if (clients.length > 0) {
        return clients;
    } else {
        return { status: 'No clients found with Telegram error' };
    }
}

export async function getLastClients(count: number): Promise<ApiResponse<Client[]>> {
    const clients = fakeClients.slice(-count);
    if (clients.length > 0) {
        return clients;
    } else {
        return { status: 'No clients found' };
    }
}