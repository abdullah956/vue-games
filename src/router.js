import { createWebHistory, createRouter } from "vue-router";

import AnagramGame from "./app/AnagramGame.vue";
import MathGame from "./app/MathGame.vue";

const routes = [
    {
        path: '/anagram-game',
        component: AnagramGame
    },
    {
        path: '/math-game',
        component: MathGame
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});

export default router;
