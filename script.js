async function getData() {
  const value = document.getElementById("value");
  let userCEP = value.value;
  const pMsg = document.getElementById("pMsg");

  const url = `https://viacep.com.br/ws/${userCEP}/json/`;
  try {
    const response = await fetch(url);
    if (response.ok && url) {
      const json = await response.json();
      pMsg.innerHTML = Object.entries(json)
        .map(([chave, valor]) => `${chave}: ${valor}`)
        .join("<br>");
    } else {
      throw new Error(`Response status: ${response.status}`);
    }
  } catch (error) {
    console.error(error.message);
  }
}
