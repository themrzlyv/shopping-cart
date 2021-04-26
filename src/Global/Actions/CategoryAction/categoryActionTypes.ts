export const GET_ALL_CATEGORIES = "GET_ALL_CATEGORIES"

export interface GetAllCategories {
    type: typeof GET_ALL_CATEGORIES;
    payload: string[]
}

export type CategoryDispatchType = GetAllCategories