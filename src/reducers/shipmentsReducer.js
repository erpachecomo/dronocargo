export const shipmentsReducer = (state, action) => {

    switch (action.type) {
        case 'addShipment':
            localStorage.setItem('shipments', JSON.stringify([{
                ...action.payload
            }, ...state.listOfShipments])
            )
            return { listOfShipments: [{ ...action.payload }, ...state.listOfShipments] };
        default:
            throw new Error();
    }
}