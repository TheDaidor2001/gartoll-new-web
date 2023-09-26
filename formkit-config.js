import {generateClasses} from '@formkit/themes'

const config = {
    config: {
        classes: generateClasses({
            global: {
                wrapper: 'space-y-2 mb-3',
                message: 'text-red-500 text-sm font-bold uppercase',
                label: 'block mb-1 font-bold text-lg text-black',
                input: 'w-full p-3 border border-gray-33 rounded-lg text-gray-700 placeholder-gray-400'
            },

            submit: {
                input:'$reset border-2 border-gray-900 hover:bg-gray-900 hover:text-white transition-colors rounded-md text-lg w-full p-3 mt-10'
            }

        })
    }
}

export default config;