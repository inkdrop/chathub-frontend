import { configure } from '@kadira/storybook'

function loadStories() {
    require('../dist/application.css')
    require('../src/js/components/stories/hello')
}

configure(loadStories, module)
