import { configure } from '@kadira/storybook'

function loadStories() {
    require('../src/js/components/stories/hello')
}

configure(loadStories, module)
