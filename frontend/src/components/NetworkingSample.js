// tutorial from https://levelup.gitconnected.com/how-to-make-http-requests-with-fetch-api-be018730811f

const APIURL = "http://localhost:8000";
export const getContacts = async () => {
  const res = await fetch(`${APIURL}/contacts`);
  return res.json();
};
export const addContact = async data => {
  const response = await fetch(`${APIURL}/contacts`, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
  return response.json();
};
export const editContact = async data => {
  const response = await fetch(`${APIURL}/contacts/${data.id}`, {
    method: "PUT",
    mode: "cors",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
  return response.json();
};
export const deleteContact = async id => {
  const response = fetch(`${APIURL}/contacts/${id}`, {
    method: "DELETE",
    mode: "cors",
    cache: "no-cache"
  });
  return response;
};