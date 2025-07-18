const apiKey = '...';
const connectionName = 'my-db';

const BASE_URL = 'https://api.us.embeddable.com'; // US
// const BASE_URL = 'https://api.eu.embeddable.com'; // EU

/**
 * see db-specific examples @ https://docs.embeddable.com/data/credentials
 */
const dbType = 'postgres'; // or bigquery, etc.
const credentials = {
  database: '...',
  host: '...',
  user: '...',
  password: '...',
};

async function run() {
  const resp = await fetch(`${BASE_URL}/api/v1/connections/${connectionName}`, {
    method: 'PUT', // PUT = UPDATE
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${apiKey}` /* keep your API Key secure */,
    },
    body: JSON.stringify({
      type: dbType,
      credentials: credentials,
    }),
  });

  console.log(`${resp.status} ${resp.statusText}`);
  const json = await resp.json();
  console.log(json);
}

run();
