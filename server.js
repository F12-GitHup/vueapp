var express = require("express")
var proxy = require("http-proxy-middleware");
var app = express();

app.use(express.static("./dist"))
app.use("/ashx",proxy({
         "target": "http://cms.aolaigo.com/Handler/app_ActivityHandler.ashx",
        "changeOrigin": true,
        "pathRewrite": { "^/ashx" : "" }
      }))
app.use("/mobilecart",proxy({
  "target":"http://cartapi.aolaigo.com/handler/mobilecart.ashx",
  "changeOrigin":true,
  "pathRewrite":{"^/mobilecart":""}
}))
app.use("/ordersubmitpageaapi_new",proxy({
    "target":"http://orderapi.aolaigo.com/v2/ordersubmitpageaapi_new.ashx",
    "changeOrigin":true,
    "pathRewrite":{"^/ordersubmitpageaapi_new":""}
}))
app.use("/callback",proxy({
  "target":"http://productapi.aolaigo.com/handler/command.ashx?callback",
  "changeOrigin":true,
  "pathRewrite":{"^/callback":""}
}))
app.use("/member",proxy({
  "target":"http://memberapi.aolaigo.com/appmember.ashx",
  "changeOrigin":true,
  "pathRewrite":{"^/member":""}
}))
app.use("/getCode",proxy({
  "target":"http://member.aolaigo.com/handlers/validcode.ashx",
  "changeOrigin":true,
  "pathRewrite":{"^/getCode":""}
}))
app.use("/order",proxy({
  "target":"http://orderapi.aolaigo.com/v2/orderlistapi.ashx",
  "changeOrigin":true,
  "pathRewrite":{"^/order":""}
}))
// "/ashx":{
//          "target": "http://cms.aolaigo.com/Handler/app_ActivityHandler.ashx",
//         "changeOrigin": true,
//         "pathRewrite": { "^/ashx" : "" }
//       }

app.listen(8090)

