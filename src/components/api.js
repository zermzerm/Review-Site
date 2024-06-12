export default async function fetchData(endpoint) {
  try {
    const resp = await fetch(`http://localhost:3001/${endpoint}`);
    if (!resp.ok) {
      throw new Error(`error to ${endpoint}`);
    }
    return await resp.json();
  } catch (error) {
    console.error('Error fetching:', error);
    throw error;
  }
}
