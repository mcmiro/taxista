import { defineStore } from 'pinia';

export const useCartStore = defineStore({
    id: 'cart-store',
    state: () => {
        return {
            cart: {
                open: false,
                dateFrom: 0,
                dateTo: 0,
                duration: 0,
                total: 0,
            },
            customer: {
                fullName: 'Miro',
                email: 'grujin@heyio.at',
                phone: '+43 660 121 88 24',
            },
            prices: []
        }
    },
    getters: {
        getCart: (state) => state.cart,
        getCustomer: (state) => state.customer,
    },
    actions: {
        setPrices(payload) {
            this.prices = payload
        },
        setDateFrom(payload) {
            this.cart.dateFrom = payload
        },
        setDateTo(payload) {
            this.cart.dateTo = payload
        },
        setDuration(payload) {
            this.cart.duration = payload
        },
        setTotal(payload) {
            this.cart.total = payload
        },
        updateCustomer(payload) {
            this.customer = payload
        },
        closeCart() {
            this.cart.open = false
        },
        openCart() {
            this.cart.open = true
        },
        async getPriceFromApi (payload) {
            try {
                let response = await $fetch(`${baseUrl}/price/get`, {
                    method: 'GET',
                    body: payload
                })
                console.log(response);
            }
            catch(error) {
                alert(error.data ? error.data.message[0]: "Greska!")
            }
        },
    },
})