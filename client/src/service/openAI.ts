//  const prompt = `Parse the input message and return a JSON object with information about an expense transaction. The JSON object should include the name (up to 50 characters), date (in the format YYYY-MM-DD), amount (decimal number with two decimal places), and category (chosen from provided categories list). Input message: '${query}'. Categories list: [Groceries, Dining Out, Transportation, Utilities, Rent/Mortgage, Entertainment, Shopping, Health and Fitness, Travel, Education, Insurance, Personal Care, Home Improvement, Gifts and Donations, Taxes, Subscriptions and Memberships, Childcare, Pet Expenses, Financial Services, Miscellaneous Expenses]. Example JSON object: {"name": "Invalid Input", "date": "2023-01-01", "amount": "0.00", "category": "Utilities"}. Today's date is ${todayDate}.`

import { token } from "../utility/url";



const todayDate = new Date().toISOString().split('T')[0];

export async function callOpenAIAPI(prompt : string) {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
            "model": "gpt-3.5-turbo",
  "messages": [
    {
      "role": "system",
      "content": "You are an assistant that parses text and converts it into a structured JSON object based on the given rules."
    },
    {
      "role": "user",
      "content": `Parse the input message and return a JSON object with information about an expense transaction. The JSON object should include the name (up to 50 characters), date (in the format YYYY-MM-DD), amount (decimal number with two decimal places), and category (chosen from provided categories list). Input message: ${prompt}. Categories list: [Groceries, Dining Out, Transportation, Utilities, Rent/Mortgage, Entertainment, Shopping, Health and Fitness, Travel, Education, Insurance, Personal Care, Home Improvement, Gifts and Donations, Taxes, Subscriptions and Memberships, Childcare, Pet Expenses, Financial Services, Miscellaneous Expenses]. Example JSON object: {\"name\": \"Invalid Input\", \"date\": \"2023-01-01\", \"amount\": \"0.00\", \"category\": \"Utilities\"}. Return today's date as the transaction date if the input is valid. Today's date is ${todayDate}`
    }
  ],
  "max_tokens": 150
        })
    });

    if (!response.ok) {
        const errorDetails = await response.json();
        throw new Error(`Error: ${response.status}, ${errorDetails.error.message}`);
    }
    const jsonResponse = await response.json();
    console.log(jsonResponse);
    return jsonResponse;
}