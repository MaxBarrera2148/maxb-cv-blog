---
template: post
title: What is an API? A practical guide with examples.
slug: /posts/what-is-an-api-practical-guide-with-examples
draft: false
priority: 5
date: 2021-07-13T01:13:06.153Z
description: A basic introduction to APIs and how they work including the
  difference between REST and SOAP as well as real-world examples.
category: productivity
tags:
  - programming
  - APIs
---
APIs have become commonplace in today’s world, so much so that even those who are not part of the software development community have heard of them and probably use them on an everyday basis.

So what is an API and how is it used? An API (Application Programming Interface) allows applications to access the features or data of other applications, OS, or services. Another way of saying it is that an API allows multiple pieces of software to talk to each other and defines how they interact.

Let’s look at a common example of how the average person uses APIs.

With each website hosted on a server, the internet can be described as a massive network of connected servers. When you click on a link or type a URL into a browser, a request is sent to the server of the website you're visiting. The server then sends a response containing HTML and other related content to your browser, which interprets it to display the page.

[![Alt Text](https://res.cloudinary.com/practicaldev/image/fetch/s--eE9vrxSD--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/jkah6c96ajx2gavaxoin.png)](https://res.cloudinary.com/practicaldev/image/fetch/s--eE9vrxSD--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/jkah6c96ajx2gavaxoin.png)

So what does the API do? Well, the API isn’t the server, but it is what allows the server to receive the request and send a response. So each time you visit a website, you’re interacting with the website server’s API. However, that’s only one of the many ways APIs are being used.

# [](https://dev.to/bluecoding/what-is-an-api-and-how-does-it-work-4jee#different-types-of-apis-and-how-theyre-used)Different types of APIs and how they’re used

[![Alt Text](https://res.cloudinary.com/practicaldev/image/fetch/s--N-AEzkRi--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/m0swv2rwptklydrpq74w.jpg)](https://res.cloudinary.com/practicaldev/image/fetch/s--N-AEzkRi--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/m0swv2rwptklydrpq74w.jpg)

## [](https://dev.to/bluecoding/what-is-an-api-and-how-does-it-work-4jee#on-an-ownership-level-there-are-four-main-types-of-apis)On an ownership level, there are four main types of APIs.

**Open APIs** are publicly available for all developers to access without restrictions.

**Partner APIs** are similar to open APIs on a technical level but do have restrictions in terms of who can access them and how they’re accessed. Partner APIs are often monetized. An example of a partner API would be a payment processing platform that allows you to process payments on your eCommerce site through their API and charges you a percentage of the transactions. Generally, these APIs are accessible through an API developer portal and are accessed by following a specific validation workflow.

**Internal or Private APIs** are not accessible by external users. They work as an interface that grants access to parts of an organization’s backend data and application functionality. These are used by organizations to help speed up the app development process.

The interface can be used by in-house developers and contractors to improve its products or services. Private APIs help reduce the time and resources needed to integrate IT systems and build customer-facing apps.

## [](https://dev.to/bluecoding/what-is-an-api-and-how-does-it-work-4jee#another-way-of-creating-efficient-apis)Another way of creating efficient APIs

**Composite APIs** allow developers to access multiple endpoints in a single call, which is useful when you need information from several services to perform a single task. For example, completing an order through a payment API might require access to multiple endpoints like “accept payment,” “send an invoice,” etc...

## [](https://dev.to/bluecoding/what-is-an-api-and-how-does-it-work-4jee#web-service-apis)Web Service APIs

Web service APIs are applications that use URLs to provide services. In a Web service, technologies like HTTP are used for transferring machine-readable file formats.

Here are some of the more popular types of web service APIs:

### [](https://dev.to/bluecoding/what-is-an-api-and-how-does-it-work-4jee#rest-representational-state-transfer)REST (Representational State Transfer)

The term was introduced and defined in 2000 by Roy Fielding in his doctoral dissertation. For an API to be considered RESTful it must follow six guiding principles.

**Client-Server**—the system must be made up of clients and servers. The server takes care of the back-end and the client handles the front-end.

**Stateless**—the communication between the client and server must be stateless. Meaning all the information about the client’s session is kept on the client-side. Each request must contain all the required information to perform the request seeing as no browser cookies or session variables are stored to provide further context.

**Uniform Interface**— describes the interface between clients and servers. The uniform interface constraint simplifies and decouples the architecture, enabling each part to evolve independently. In order to get a consistent interface, multiple architectural constraints are needed to guide the behavior of components.

**Cache**—responses must be defined as either cacheable or non-cacheable. The reasoning behind marking a response as non-cacheable is to prevent clients from providing old data in response to future requests. Caching responses will eliminate some client-server interactions, improving scalability and performance.

**Layered**—The API should support a layered architecture, with each layer contributing to a transparent hierarchy. Each layer should be loosely coupled and allow for encapsulation.

### [](https://dev.to/bluecoding/what-is-an-api-and-how-does-it-work-4jee#soap-simple-object-access-protocol)SOAP (Simple Object Access Protocol)

SOAP is the successor to XML RPC and was originally designed for Microsoft back in 1998. SOAP was the first to standardize the way applications use network connections to manage services.

Despite the S in SOAP standing for simple SOAP is considered more complex than REST due to the level of security and the way messages are sent.

While REST is easier to use, leading to it’s increasing popularity, it isn’t always the right choice.

SOAP offers comprehensive security and is ACID (Atomicity, Consistency, Isolation, Durability) compliant making it the preferred solution for enterprise applications dealing with banking transactions.

## [](https://dev.to/bluecoding/what-is-an-api-and-how-does-it-work-4jee#reasons-for-the-growing-popularity-of-apis)Reasons for the growing popularity of APIs

One reason APIs are so widely used is the fact that they’re a reliable means of adding functionality to an application without needing to write all the code yourself. An example would be when you embed a map on your website showing your store’s physical location. You don’t need to know anything about how Google Maps’ code works. All you need to know is how to request the information through Google Maps API, making the process of showing a map on your website easy and vastly more efficient.

APIs also allow developers to access data from other applications. For example, if you want to display the number of likes your page has on Facebook, you can pull the data using Facebook’s Graph API.

In conclusion, APIs are the lifeblood of the digital economy fueling our need for rapid innovation and continuous technological advancement.