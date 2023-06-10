const url = "https://timrmp.de/beispiel/API/booking.php";

export async function sendPostRequest(data: any): Promise<any> {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    return result;
  } catch (error) {
    throw new Error("Fehler bei der POST-Anfrage: " + error);
  }
}
