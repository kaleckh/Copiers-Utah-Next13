

export function getCart() {
    const cartString = localStorage.getItem("cart")
    return cartString ? JSON.parse(cartString) : []
}

export function deleteItem(id) {
    const cartString = getCart()
    const result = cartString.toSpliced(id, 1)
    localStorage.setItem("cart", JSON.stringify(result))

}

