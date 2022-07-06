export const get = async <TResponse>(url: string) => {
  const result = await fetch(url);
  return (await result.json()) as TResponse;
};

export const post = async <TResponse>(url: string, data: any) => {
  const result = await fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return (await result.json()) as TResponse;
};
