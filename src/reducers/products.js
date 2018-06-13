import * as ProductActionTypes from '../actiontypes/products';
const initialSate = [
    {id: 1, price: 100, name: "product 1", description: "Description 1", create_date: "2018-08-06"},
    {id: 2, price: 100, name: "product 2", description: "Description 1", create_date: "2018-08-06"},
    {id: 3, price: 300, name: "product 3", description: "Description 3", create_date: "2018-08-06"},
    {id: 4, price: 500, name: "product 4", description: "Description 4", create_date: "2018-08-06"},
    {id: 5, price: 800, name: "product 5", description: "Description 1", create_date: "2018-08-06"}
];
export default function  ProductReducer(state = initialSate, action) {
    switch (action.type) {
        case ProductActionTypes.ADD_PRODUCT:
            return [
                ...state,
                {
                    name: action.name,
                    score: 0
                }
            ];

        case ProductActionTypes.REMOVE_PRODUCT:
            return [
                ...state.slice(0, action.index),
                ...state.slice(action.index + 1)
            ];

        case ProductActionTypes.EDIT_PRODUCT:
            return state.map((player, index) => {
                if (index === action.index) {
                    return {
                        ...player,
                        score: player.score + action.score
                    };
                }
                return player;
            });
        case ProductActionTypes.GET_PRODUCT:
            return state.map((product, index) => {
               
                if (product.id == action.index) {
                     console.log(product);
                    return product
                }
                return {};
            });

        default:
            return state;
}
}