// Connect to the Public Websocket
socket_connect(wssBASE, "https://" + wssBASE + ":2083", "obreq");
// Request Bitfinex BTCUSD
request_orderbook_server("bitfinex", "btcusd", "bids");
