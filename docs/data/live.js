const ticketButton = document.getElementById("ticket-button");

if (ticketButton) {
  ticketButton.addEventListener("click", () => {
    if (typeof ttq !== "undefined") {
      ttq.track("InitiateCheckout", {
        // ▼ ここからが修正ポイント：contentsという配列（[ ]）の中に詳細を入れ込みます ▼
        contents: [
          {
            content_id: "varty_ticket_0414", // VSAエラー解消のための必須項目（商品ID）
            content_type: "product",         // VSAエラー解消のための必須項目（商品タイプ）
            content_name: "Varty's Road Chapter One Ticket",
            content_category: "Ticket"
          }
        ],
        // ▲ ここまで ▲
        value: 3000,
        currency: "JPY"
      });
    }
  });
}
