import { openai } from './openai'
import math from 'advanced-calculator'

const QUESTION = process.argv[2] || 'hi'

const messages = [
    {
        role: 'user',
        content: QUESTION,
    },
]

const functions = {
    calculate({expression}) {
        return math.evalute(expression);
    },
}