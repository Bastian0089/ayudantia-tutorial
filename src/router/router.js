import { createMemoryHistory, createRouter } from "vue-router";

import ComponentePadre from "@/components/ComponentePadre.vue";

const routes = [
    { path: '/',name:'Home', component: ComponentePadre },
]

export const router = createRouter({
    history: createMemoryHistory(),
    routes,
})