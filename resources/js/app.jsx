import React from "react";
import { render } from 'react-dom'
import { createInertiaApp } from "@inertiajs/inertia-react";
import { InertiaProgress } from "@inertiajs/progress";
import { resolvePageCommponent } from 'laravel-vite-plugin'

createInertiaApp({
    resolve: (name) => resolvePageCommponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
    setup({el, App, props}) {
        return render(<App {...props} />, el)
    }
})

InertiaProgress.init({
    delay: 1,
    color: '#ffffff'
})