(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{433:function(e,t,r){e.exports=r.p+"assets/img/overview-build-process.daf9013b.svg"},463:function(e,t,r){"use strict";r.r(t);var o=r(35),a=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"overview"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),o("p",[o("strong",[e._v("alis.exchange")]),e._v(" enables individuals and organisations to move from simply writing code to building enterprise-grade software.\nIn this section we provide an overview of the process to build products on "),o("strong",[e._v("alis.exchange")]),e._v(". A product on "),o("strong",[e._v("alis.exchange")]),e._v(" is what is\noffered to the world and consists of one or more underlying services which provide the functionality of the product.")]),e._v(" "),o("p",[e._v("In this overview, it is the building of these underlying services which we are interested in. The high-level process that is followed\nwhen creating services are depicted below.")]),e._v(" "),o("p",[o("img",{attrs:{src:r(433),alt:""}})]),e._v(" "),o("p",[e._v("Each of the steps are explained in the following sections and follow the structure:"),o("br")]),e._v(" "),o("ul",[o("li",[e._v("Overview of the step; "),o("br")]),e._v(" "),o("li",[e._v("👨‍💻 "),o("strong",[e._v("User actions")]),e._v(" - the actions that are required from the user;"),o("br")]),e._v(" "),o("li",[e._v("🏗 "),o("strong",[e._v("alis.exchange")]),e._v(" - what is facilitated by us in the background; and"),o("br")])]),e._v(" "),o("blockquote",[o("p",[e._v("‼️ The build example provides detailed steps for the user actions where this section aims to communicate the high-level overview of what would be done.")])]),e._v(" "),o("h2",{attrs:{id:"create-protocol-buffer"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#create-protocol-buffer"}},[e._v("#")]),e._v(" Create protocol buffer")]),e._v(" "),o("p",[e._v("Protocol buffers (proto) is the cornerstone of what we build on "),o("strong",[e._v("alis.exchange")]),e._v(". Creating the proto is the starting point for building out the functionality for your product.")]),e._v(" "),o("h4",{attrs:{id:"👨‍💻-user-actions"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#👨‍💻-user-actions"}},[e._v("#")]),e._v(" 👨‍💻 User actions")]),e._v(" "),o("p",[e._v("Simply run the "),o("code",[e._v("alis proto create")]),e._v(" command from the terminal.")]),e._v(" "),o("h4",{attrs:{id:"🏗-alis-exchange"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#🏗-alis-exchange"}},[e._v("#")]),e._v(" 🏗 alis.exchange")]),e._v(" "),o("p",[e._v("In the background, "),o("strong",[e._v("alis.exchange")]),e._v(" creates a protocol buffer resource within the product and provides a boilerplate proto file which is to be defined in the following step.")]),e._v(" "),o("h2",{attrs:{id:"define-methods-and-message"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#define-methods-and-message"}},[e._v("#")]),e._v(" Define methods and message")]),e._v(" "),o("p",[e._v("Defining the methods and messages in the proto is one of the most important aspects of the build process as itserves as the source of truth for the functionality of the products. The "),o("RouterLink",{attrs:{to:"/references/resource-oriented-design.html"}},[e._v("Resource-oriented design")]),e._v(" pattern is widely adopted and provide detailed guidelines as to how to approach the definitions.")],1),e._v(" "),o("h4",{attrs:{id:"👨‍💻-user-actions-2"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#👨‍💻-user-actions-2"}},[e._v("#")]),e._v(" 👨‍💻 User actions")]),e._v(" "),o("p",[e._v("The user is required to flesh out the proto, and should be consistent with "),o("a",{attrs:{href:"https://google.aip.dev/1",target:"_blank",rel:"noopener noreferrer"}},[e._v("Google's API Improvement Proposals"),o("OutboundLink")],1),e._v(". Various tooling, such as linters, exists to aid this process.")]),e._v(" "),o("p",[e._v("The primary questions that developers aim to answer during this step is:")]),e._v(" "),o("ol",[o("li",[e._v("What are the resources that we are considering? These will be translated into the "),o("code",[e._v("messages")]),e._v(" in the proto."),o("br"),e._v(" "),o("em",[e._v("eg. In the asset management space this may be a "),o("code",[e._v("porfolio")]),e._v(" and "),o("code",[e._v("holdings")]),e._v(".")])]),e._v(" "),o("li",[e._v("What are the potential relationships and hierarchy between the resources?"),o("br"),e._v(" "),o("em",[e._v("eg. "),o("code",[e._v("portfolio")]),e._v(" is the parent of "),o("code",[e._v("holdings")]),e._v(".")])]),e._v(" "),o("li",[e._v("What operations are to be performed? These will be translated into the "),o("code",[e._v("methods")]),e._v(" of the proto, housed in a "),o("code",[e._v("service")]),e._v("."),o("br"),e._v(" "),o("em",[e._v("eg. "),o("a",{attrs:{href:"https://google.aip.dev/131",target:"_blank",rel:"noopener noreferrer"}},[e._v("Standard methods"),o("OutboundLink")],1),e._v(" such as "),o("code",[e._v("CreatePortfolio")]),e._v(", "),o("code",[e._v("UpdatePortfolio")]),e._v(" or "),o("a",{attrs:{href:"https://google.aip.dev/136",target:"_blank",rel:"noopener noreferrer"}},[e._v("custom methods"),o("OutboundLink")],1),e._v(" such as "),o("code",[e._v("CheckPortfolioCompliance")]),e._v(".")])])]),e._v(" "),o("p",[e._v("Since the protos sit within a version control repo, multiple developers may collaborate and iterate on the proto design. Once the proto is defined and ready to be implemented, it can the be "),o("code",[e._v("released")]),e._v(".")]),e._v(" "),o("h2",{attrs:{id:"release-protocol-buffer"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#release-protocol-buffer"}},[e._v("#")]),e._v(" Release protocol buffer")]),e._v(" "),o("p",[e._v("Releasing a protocol buffer is a big thing in our world. It communicates that the current state of the proto is the source of truth. In other words, it is what should be implemented on your side and what clients can expect to consume. There is a lot that also happens in the background which we will unpack in the following section.")]),e._v(" "),o("h4",{attrs:{id:"👨‍💻-user-actions-3"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#👨‍💻-user-actions-3"}},[e._v("#")]),e._v(" 👨‍💻 User actions")]),e._v(" "),o("p",[e._v("Simply run the "),o("code",[e._v("alis proto release")]),e._v(" command from the terminal.")]),e._v(" "),o("h4",{attrs:{id:"🏗-alis-exchange-2"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#🏗-alis-exchange-2"}},[e._v("#")]),e._v(" 🏗 alis.exchange")]),e._v(" "),o("p",[e._v("The release of the proto automatically kicks off a lot of processes on "),o("strong",[e._v("alis.exchange")]),e._v(" which includes:")]),e._v(" "),o("ul",[o("li",[e._v("Auto-generating internal and client facing client libraries for a range of supported languages (currently Go, Python and JavaScript). This allows for easy implementation of the methods and allows clients to easily consume your services in their own development environment.")]),e._v(" "),o("li",[e._v("Auto-configuring API gateways for the services specified in the protos. This provides HTTP endpoints for the gRPC methods, allowing for traditional REST calls to be made to the endpoints.")]),e._v(" "),o("li",[e._v("Auto-generating documentation for your product directly from your proto definitions. An example can be seen at:")])]),e._v(" "),o("p",[e._v("This single source of truth also sets the foundation for additional auto-generated aspects, which is discussed in the following sections.")]),e._v(" "),o("h2",{attrs:{id:"create-neuron"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#create-neuron"}},[e._v("#")]),e._v(" Create neuron")]),e._v(" "),o("p",[e._v("A neuron is simply a unit of compute which consists of a set of cloud infrastructure and, in most cases, some form of code implementation. The cloud infrastructure is specified using Terraform and the code implementation may be done in any language.")]),e._v(" "),o("h4",{attrs:{id:"👨‍💻-user-actions-4"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#👨‍💻-user-actions-4"}},[e._v("#")]),e._v(" 👨‍💻 User actions")]),e._v(" "),o("p",[e._v("Simply run the "),o("code",[e._v("alis neuron create")]),e._v(" command from the terminal and follow the prompts.")]),e._v(" "),o("h4",{attrs:{id:"🏗-alis-exchange-3"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#🏗-alis-exchange-3"}},[e._v("#")]),e._v(" 🏗 alis.exchange")]),e._v(" "),o("p",[e._v("In the background, "),o("strong",[e._v("alis.exchange")]),e._v(" will provide prepopulated Terraform files based on the neuron requirements. Furthermore, code template files are also available and uses a templating engine along with the latest protocol buffer release to auto-generate server implementation code in the supported languages.")]),e._v(" "),o("h2",{attrs:{id:"specify-infrastructure"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#specify-infrastructure"}},[e._v("#")]),e._v(" Specify infrastructure")]),e._v(" "),o("p",[e._v("The Terraform files define the required infrastructure needs that will be applied in the respective cloud environments.")]),e._v(" "),o("h4",{attrs:{id:"👨‍💻-user-actions-5"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#👨‍💻-user-actions-5"}},[e._v("#")]),e._v(" 👨‍💻 User actions")]),e._v(" "),o("p",[e._v("When creating the neuron, "),o("strong",[e._v("alis.exchange")]),e._v(" provided a set of Terraform files. These can either be customised or additional specifications may added based on the needs of your implementation. The "),o("a",{attrs:{href:"https://registry.terraform.io/providers/hashicorp/google/latest/docs",target:"_blank",rel:"noopener noreferrer"}},[e._v("documentation on the Terraform site"),o("OutboundLink")],1),e._v(" serve as an excellent reference for this.")]),e._v(" "),o("h4",{attrs:{id:"🏗-alis-exchange-4"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#🏗-alis-exchange-4"}},[e._v("#")]),e._v(" 🏗 alis.exchange")]),e._v(" "),o("p",[e._v("The "),o("strong",[e._v("alis.exchange")]),e._v(" CLI has the command available "),o("code",[e._v("alis gen terraform")]),e._v(" which is able to generate commonly used Terraform specs out of the box.")]),e._v(" "),o("h2",{attrs:{id:"implement-code"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#implement-code"}},[e._v("#")]),e._v(" Implement code")]),e._v(" "),o("p",[e._v("In the majority of cases, there is some form of code implementation which realises the methods defined in protocol buffer, referred to as the implementation of the server. In this step, one effectively builds out the APIs to process the request, execute logic in the code and return a response.")]),e._v(" "),o("h4",{attrs:{id:"👨‍💻-user-actions-6"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#👨‍💻-user-actions-6"}},[e._v("#")]),e._v(" 👨‍💻 User actions")]),e._v(" "),o("ol",[o("li",[e._v("Using either the auto-generated template files or own custom files, implement the logic of the protocol buffers by using the auto-generated client libraries.")]),e._v(" "),o("li",[e._v("If necessary, customise the "),o("code",[e._v("Dockerfile")]),e._v(" to ensure that the containerisation of the code will be correct.")])]),e._v(" "),o("h4",{attrs:{id:"🏗-alis-exchange-5"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#🏗-alis-exchange-5"}},[e._v("#")]),e._v(" 🏗 alis.exchange")]),e._v(" "),o("p",[e._v("The "),o("strong",[e._v("alis.exchange")]),e._v(" CLI has the command available "),o("code",[e._v("alis gen code")]),e._v(" which is able to generate files in various languages.")]),e._v(" "),o("h2",{attrs:{id:"release-neuron"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#release-neuron"}},[e._v("#")]),e._v(" Release neuron")]),e._v(" "),o("p",[e._v("Releasing a neuron does two primary things:")]),e._v(" "),o("ol",[o("li",[e._v("It tags the latest committed state of the infrastructure specification for the neuron, which will be applied to the environment on deploy.")]),e._v(" "),o("li",[e._v("The neuron code is containerised and the image is saved in the Cloud.")])]),e._v(" "),o("h4",{attrs:{id:"👨‍💻-user-actions-7"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#👨‍💻-user-actions-7"}},[e._v("#")]),e._v(" 👨‍💻 User actions")]),e._v(" "),o("p",[e._v("Simply run the "),o("code",[e._v("alis neuron release")]),e._v(" command from the terminal and follow the prompts.")]),e._v(" "),o("h4",{attrs:{id:"🏗-alis-exchange-6"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#🏗-alis-exchange-6"}},[e._v("#")]),e._v(" 🏗 alis.exchange")]),e._v(" "),o("p",[e._v("The tagging of the infrastructure is facilitated by us. Furthermore, "),o("strong",[e._v("alis.exchange")]),e._v(" looks for one or more Dockerfile in the neuron's repos which are then built on "),o("a",{attrs:{href:"https://cloud.google.com/build",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cloud Build"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("h2",{attrs:{id:"deploy-neuron"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#deploy-neuron"}},[e._v("#")]),e._v(" Deploy neuron")]),e._v(" "),o("p",[e._v("The deployment of the neuron applies the infrastructure specification to a specified deployment environment(s) (eg. staging or production). A typical example of the outcome would be that a deployment environment has:")]),e._v(" "),o("ul",[o("li",[e._v("A fully managed instance of the neuron's containerised code ("),o("a",{attrs:{href:"https://cloud.google.com/run",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cloud Run"),o("OutboundLink")],1),e._v(" instance) which provides clients a means of accessing it's methods.")]),e._v(" "),o("li",[e._v("A "),o("a",{attrs:{href:"https://cloud.google.com/bigtable",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cloud BigTable NoSQL database"),o("OutboundLink")],1),e._v(", or other form of storage, which stores information about the resources.")]),e._v(" "),o("li",[e._v("A "),o("a",{attrs:{href:"https://cloud.google.com/pubsub",target:"_blank",rel:"noopener noreferrer"}},[e._v("PubSub"),o("OutboundLink")],1),e._v(" topic to which messages are published when certain resources are interacted with.")])]),e._v(" "),o("h4",{attrs:{id:"👨‍💻-user-actions-8"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#👨‍💻-user-actions-8"}},[e._v("#")]),e._v(" 👨‍💻 User actions")]),e._v(" "),o("p",[e._v("Simply run the "),o("code",[e._v("alis neuron release")]),e._v(" command from the terminal and follow the prompts.")]),e._v(" "),o("h4",{attrs:{id:"🏗-alis-exchange-7"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#🏗-alis-exchange-7"}},[e._v("#")]),e._v(" 🏗 alis.exchange")]),e._v(" "),o("p",[e._v("Using the tag that was added when releasing the neuron, the infrastructure specification is applied in the deployment environment specified.")]),e._v(" "),o("p",[e._v("With the former example, this would result in:")]),e._v(" "),o("ul",[o("li",[e._v("Creating a new Cloud Run instance that hosts the container from the "),o("code",[e._v("release")]),e._v(" step;")]),e._v(" "),o("li",[e._v("Adding the various environmental variables to the instance;")]),e._v(" "),o("li",[e._v("Creating a new BigTable table with the specified table design; and")]),e._v(" "),o("li",[e._v("Creating a new topic in PubSub with the various policies required.")])]),e._v(" "),o("p",[e._v("Leveraging Terraform allows developers to only care about correctly defining the specification, "),o("strong",[e._v("alis.exchange")]),e._v(" will facilitate the implementation thereof.")]),e._v(" "),o("h2",{attrs:{id:"experience-it-for-yourself"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#experience-it-for-yourself"}},[e._v("#")]),e._v(" Experience it for yourself")]),e._v(" "),o("p",[e._v("We are advocates of learning by doing and are currently working on a comprehensive build example. In the mean time, "),o("a",{attrs:{href:"https://alis.exchange/signup",target:"_blank",rel:"noopener noreferrer"}},[e._v("schedule a demo"),o("OutboundLink")],1),e._v(" by filling out the form and we will take you through the process.")])])}),[],!1,null,null,null);t.default=a.exports}}]);