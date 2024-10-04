export type Grocery = {
    id: string;
    name: string;
    quantity: number;
    isCheck: boolean;
};

export type GroceryNew = Omit<Grocery, 'id' | 'isCheck'>;
