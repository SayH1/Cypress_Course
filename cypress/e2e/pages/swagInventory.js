export class SwagInventory {
    elements = {
        cartbadge: () => cy.get(".shopping_cart_badge"),
        addToCartText: () => cy.contains("ADD TO CART"),
        filter: () => cy.get(".product_sort_container"),
        firstProduct: () => cy.get(".inventory_item").eq(0),
    }
}