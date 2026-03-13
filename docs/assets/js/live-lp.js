const ticketButton = document.getElementById("ticket-button");

if (ticketButton) {
  ticketButton.addEventListener("click", () => {
    if (typeof ttq !== "undefined") {
      ttq.track("InitiateCheckout", {
        content_name: "Varty's Road Chapter One Ticket",
        content_category: "Ticket",
        value: 3000,
        currency: "JPY"
      });
    }
  });
}
