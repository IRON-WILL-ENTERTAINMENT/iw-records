const ticketButton = document.getElementById("ticket-button");

if (ticketButton) {
  ticketButton.addEventListener("click", () => {
    if (typeof ttq !== "undefined") {
      // 公式ドキュメント通り、すべてのパラメーターを直接並べる形に修正
      ttq.track("InitiateCheckout", {
        content_id: "varty_ticket_0414", // VSAに必須！
        content_type: "product",         // VSAに必須！
        content_name: "Varty's Road Chapter One Ticket",
        content_category: "Ticket",
        value: 3000,
        currency: "JPY"
      });
    }
  });
}
