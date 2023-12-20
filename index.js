// New (OpenAI NodeJS SDK v4)

//import OpenAI from 'openai';
const OpenAI = require('openai');
//import dotenv from 'dotenv';
const dotenv = require('dotenv');
dotenv.config();

const openai = new OpenAI({
    //apiKey: process.env['OPENAI_API_KEY'],
    apiKey: process.env.OPENAI_API_KEY,
});

async function runCompletion() {
    const completion = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [

            { role: 'user', content: 'What would be a good name for a dog?'},
            { role: 'assistant', content: 'What would be a good name for a dog?'},

        ],
        max_tokens: 3000,
    });

    const response = completion.choices[0].message.content;
    console.log(response);
    //document.getElementById("response-text").innerHTML = response;

}

runCompletion();