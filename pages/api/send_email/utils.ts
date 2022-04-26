import { ifttQueryParams, requestBody } from './types';

function isValidRequestBodyObject(requestBody: Object): boolean {
  const requiredFields = ['name', 'email', 'message'];
  return requiredFields.every((key) => key in requestBody);
}

export function parseRequestBodyIntoIFTTQueryData(
  data: requestBody
): ifttQueryParams {
  if (!isValidRequestBodyObject(data))
    throw new Error('Invalid request body. Missing keys');
  return {
    value1: data.name,
    value2: data.email,
    value3: data.message,
  };
}

export async function sendMessage(values: ifttQueryParams) {
  const EVENT_NAME = process.env.IFTTT_EVENT_NAME;
  const API_KEY = process.env.IFTTT_API_KEY;

  const queryParams = new URLSearchParams(values).toString();
  const IFTT_URL = `https://maker.ifttt.com/trigger/${EVENT_NAME}/with/key/${API_KEY}?${queryParams}`;

  return await fetch(IFTT_URL, {
    method: 'GET',
  });
}
