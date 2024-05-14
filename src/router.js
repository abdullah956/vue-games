import { createWebHistory, createRouter } from "vue-router";

import AnagramGame from "./components/AnagramGame.vue";
import MathGame from "./components/MathGame.vue";

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
