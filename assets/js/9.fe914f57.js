(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{443:function(t,e,s){t.exports=s.p+"assets/img/quick-start-autocomplete1.0f4512fa.gif"},444:function(t,e,s){t.exports=s.p+"assets/img/quick-start-autocomplete2.05b348ad.gif"},467:function(t,e,s){"use strict";s.r(e);var a=s(35),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"quick-start"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#quick-start"}},[t._v("#")]),t._v(" Quick Start")]),t._v(" "),a("p",[t._v("We aim to ensure that how software across "),a("strong",[t._v("alis.exchange")]),t._v(" operates, communicates and integrates is simple and consistent. Whether you are getting results from a model, updating a database or executing trades, all of these actions should feel familiar. This allows you to seamlessly adopt anything across "),a("strong",[t._v("alis.exchange")]),t._v(" without spending hours in obscure documentation and the toil of attempting to integrate it in your code.")]),t._v(" "),a("p",[t._v("What does that experience feel like? In this section, we want to provide you with a few basic concepts and then allow you to experience "),a("strong",[t._v("alis.exchange")]),t._v(" for yourself. Below is a teaser of what you can expect 😉.")]),t._v(" "),a("p",[a("img",{attrs:{src:s(443),alt:""}})]),t._v(" "),a("p",[a("img",{attrs:{src:s(444),alt:""}})]),t._v(" "),a("h2",{attrs:{id:"definition-first-approach"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#definition-first-approach"}},[t._v("#")]),t._v(" Definition-first approach")]),t._v(" "),a("p",[a("strong",[t._v("alis.exchange")]),t._v(" leverages a core set of open-source technologies, all certified by the "),a("a",{attrs:{href:"https://www.cncf.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Cloud Native Computing Foundation"),a("OutboundLink")],1),t._v(". An essential part of how we make "),a("strong",[t._v("alis.exchange")]),t._v(" work is the strict adoption of "),a("a",{attrs:{href:"https://developers.google.com/protocol-buffers",target:"_blank",rel:"noopener noreferrer"}},[t._v("Protocol Buffers"),a("OutboundLink")],1),t._v(", also referred to as "),a("em",[t._v("Protobufs")]),t._v(".")]),t._v(" "),a("p",[t._v("From a technical perspective:")]),t._v(" "),a("blockquote",[a("p",[t._v("Protocol buffers are a language-neutral, platform-neutral extensible mechanism for serializing structured data. "),a("a",{attrs:{href:"https://developers.google.com/protocol-buffers",target:"_blank",rel:"noopener noreferrer"}},[t._v("Source"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("What is important from a practical perspective however is that:")]),t._v(" "),a("blockquote",[a("p",[t._v("You "),a("strong",[t._v("define how you want your data to be structured once")]),t._v(", then you can use special generated source code to easily write and read your structured data to and from a variety of data streams and using a variety of languages. "),a("a",{attrs:{href:"https://developers.google.com/protocol-buffers",target:"_blank",rel:"noopener noreferrer"}},[t._v("Source"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("Two things to take note of:")]),t._v(" "),a("ol",[a("li",[t._v("Defining things is the first, essential part of building on "),a("strong",[t._v("alis.exchange")]),t._v(". Everything that you will be working with ("),a("em",[t._v("resources")]),t._v(") and what you will be doing ("),a("em",[t._v("services")]),t._v(") is defined once in a "),a("code",[t._v(".proto")]),t._v(" file.")]),t._v(" "),a("li",[t._v("The definitions of these resources and services are then used to generate source code in the language of your choice to implement, or work with, the resources and services you defined.")])]),t._v(" "),a("p",[t._v("Find out more about Protobufs, their usage and benefits on "),a("strong",[t._v("alis.exchange")]),t._v(" in the "),a("RouterLink",{attrs:{to:"/other-resources/other-resources.html"}},[t._v("supplementary material")]),t._v(".")],1),t._v(" "),a("h2",{attrs:{id:"experience-the-simplicity"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#experience-the-simplicity"}},[t._v("#")]),t._v(" Experience the simplicity")]),t._v(" "),a("h3",{attrs:{id:"books-proto"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#books-proto"}},[t._v("#")]),t._v(" Books.proto")]),t._v(" "),a("p",[t._v("Let us consider a "),a("code",[t._v("Book")]),t._v(" resource with "),a("em",[t._v("name")]),t._v(", "),a("em",[t._v("display name")]),t._v(", "),a("em",[t._v("authors")]),t._v(" and "),a("em",[t._v("publishers")]),t._v(" as fields. This is defined in a "),a("code",[t._v("books.proto")]),t._v(" file as follows:")]),t._v(" "),a("div",{staticClass:"language-protobuf extra-class"},[a("pre",{pre:!0,attrs:{class:"language-protobuf"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The definition of a book resource.")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("message")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Book")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The name of the book.")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Format: books/{book}.")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("google"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("api"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("field_behavior"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" OUTPUT_ONLY"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The display name of the book.")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" display_name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("google"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("api"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("field_behavior"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" REQUIRED"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The authors of the book.")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("repeated")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" authors "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("google"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("api"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("field_behavior"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" REQUIRED"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The publisher of the book")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" publisher "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("google"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("api"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("field_behavior"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" REQUIRED"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("The builders of this product allows you to list all the books available, "),a("code",[t._v("ListBooks")]),t._v(", and to retrieve the details of a specific book, "),a("code",[t._v("GetBook")]),t._v(". These are also defined in the "),a("code",[t._v("books.proto")]),t._v(" file as part of the "),a("code",[t._v("BooksService")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-protobuf extra-class"},[a("pre",{pre:!0,attrs:{class:"language-protobuf"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Book service for foo.br.")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("service")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BooksService")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// List all available books.")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("rpc")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ListBooks")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ListBooksRequest")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("returns")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ListBooksResponse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("option")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("google"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("api"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\tget"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/resources/books/v1/books"')]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Get a specific book.")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("rpc")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetBook")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("GetBookRequest")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("returns")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Book")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("option")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("google"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("api"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\tget"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/resources/store/v1/{name=books/*}"')]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("option")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("google"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("api"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("method_signature"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("Now that we know what resource is available, "),a("code",[t._v("Book")]),t._v(", and what we are able to do with it, "),a("code",[t._v("ListBooks")]),t._v(" and "),a("code",[t._v("GetBook")]),t._v(", we can get practical.")]),t._v(" "),a("h3",{attrs:{id:"run-the-example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#run-the-example"}},[t._v("#")]),t._v(" Run the example")]),t._v(" "),a("p",[t._v("Experience the simplicity in accessing these methods in any of the supported languages in using one of our preconfigured cloud IDEs:")]),t._v(" "),a("tabs",[a("tab",{attrs:{name:"Go"}},[a("h4",{attrs:{id:"make-a-request-using-go"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#make-a-request-using-go"}},[t._v("#")]),t._v(" Make a request using Go")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://gitpod.io#snapshot/c1eafefa-0414-439e-a618-4089e1d50143",target:"_blank"}},[t._v("Preconfigured Go cloud IDE")])]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Open up the terminal (Mac: "),a("code",[t._v("⌘ + j")]),t._v(", Windows: "),a("code",[t._v("ctrl + j")]),t._v(" ).")]),t._v(" "),a("blockquote",[a("p",[t._v("If the terminal is already open run "),a("code",[t._v("$ clear")]),t._v(" to clear the terminal window.")])])]),t._v(" "),a("li",[a("p",[t._v("Make sure you are in the "),a("code",[t._v("playground")]),t._v(" directory.")])])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" workspace/playground\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[t._v("Run the code by running the terminal command:")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("go run *.go\n")])])]),a("h4",{attrs:{id:"get-a-feel-for-the-alis-exchange-experience"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-a-feel-for-the-alis-exchange-experience"}},[t._v("#")]),t._v(" Get a feel for the "),a("strong",[t._v("alis.exchange")]),t._v(" experience")]),t._v(" "),a("p",[t._v("Interested in trying something for yourself?")]),t._v(" "),a("p",[t._v("We suggest creating your own function and incorporating a request to the "),a("code",[t._v("BooksClient")]),t._v(". Some suggestions of things to try:")]),t._v(" "),a("ul",[a("li",[t._v("Loop through all the books and print out the author.")]),t._v(" "),a("li",[t._v("Get a book and wrangle the response to be printed out in a sentence structure.")]),t._v(" "),a("li",[t._v("Use the response of "),a("code",[t._v("ListBooks")]),t._v(" to make multiple "),a("code",[t._v("GetBook")]),t._v(" requests.")])])]),t._v(" "),a("tab",{attrs:{name:"R"}},[a("h4",{attrs:{id:"make-a-request-using-r"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#make-a-request-using-r"}},[t._v("#")]),t._v(" Make a request using R")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://gitpod.io#snapshot/c858a081-f9e0-4791-9330-606a568df6fd",target:"_blank"}},[t._v("Preconfigured R cloud IDE")])]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Open up the terminal (Mac: "),a("code",[t._v("⌘ + j")]),t._v(", Windows: "),a("code",[t._v("ctrl + j")]),t._v(" ).")]),t._v(" "),a("blockquote",[a("p",[t._v("If the terminal is already open run "),a("code",[t._v("$ clear")]),t._v(" to clear the terminal window.")])])]),t._v(" "),a("li",[a("p",[t._v("Make sure you are in the "),a("code",[t._v("playground")]),t._v(" directory.")])])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" workspace/playground\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[t._v("Run the code")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("Rscript booksConsume.r\n")])])]),a("h4",{attrs:{id:"get-a-feel-for-the-alis-exchange-experience-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-a-feel-for-the-alis-exchange-experience-2"}},[t._v("#")]),t._v(" Get a feel for the "),a("strong",[t._v("alis.exchange")]),t._v(" experience")]),t._v(" "),a("p",[t._v("Interested in trying something for yourself?")]),t._v(" "),a("p",[t._v("We suggest creating your own function and incorporating a request to the "),a("code",[t._v("BooksClient")]),t._v(". Some suggestions of things to try:")]),t._v(" "),a("ul",[a("li",[t._v("Loop through all the books and print out the author.")]),t._v(" "),a("li",[t._v("Get a book and wrangle the response to be printed out in a sentence structure.")]),t._v(" "),a("li",[t._v("Use the response of "),a("code",[t._v("ListBooks")]),t._v(" to make multiple "),a("code",[t._v("GetBook")]),t._v(" requests.")])])])],1),t._v(" "),a("p",[t._v("If you are interested in recreating this example in your own development environment, we suggest that you check out the "),a("RouterLink",{attrs:{to:"/guides/consume/make-your-first-request.html"}},[t._v("Make your first request guide")]),t._v(".")],1),t._v(" "),a("h2",{attrs:{id:"next-steps"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#next-steps"}},[t._v("#")]),t._v(" Next Steps")]),t._v(" "),a("p",[a("strong",[t._v("Ready to join alis.exchange?")]),t._v(" "),a("a",{attrs:{href:"https://alis.exchange/signup",target:"_blank"}},[t._v("Get in touch")]),t._v(".")])],1)}),[],!1,null,null,null);e.default=n.exports}}]);