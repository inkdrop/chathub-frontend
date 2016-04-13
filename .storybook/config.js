import { configure } from '@kadira/storybook'

function loadStories() {
    require('../dist/application.css')
    require('../src/js/components/stories/card')
    require('../src/js/components/stories/button')
}

configure(loadStories, module)
