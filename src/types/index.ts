//Produto
export interface IProduct {
	id: number;
	name: string;
	price: number;
	score: number;
	image: string;
}
// Item com Produtos
export interface IItem {
	id: number;
	product: IProduct;
	quantity: number;
	ship: 0.0 | 10.0;
	total: number;
	isSelected: boolean;
}

// Carrinho com itens
export interface ICart {
	items: IItem[];
	total: number;
}

// Estado Global
export interface IGamesState {
	status: 'ok' | 'loading' | 'error';
	products: IProduct[];
	cart: ICart;
}
