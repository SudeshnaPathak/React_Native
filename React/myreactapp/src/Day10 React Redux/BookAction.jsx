import React from "react";

export const purchase_book = () => {
    return {
        type: "BUY_BOOK",
        payload: 10
    }
}

export const sell_book = (quantity) => {
    return {
        type: "SELL_BOOK",
        payload: quantity
    }
}

