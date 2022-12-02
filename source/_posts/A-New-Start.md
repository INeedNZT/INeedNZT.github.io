---
title: A New Start
date: 2022-12-01 17:13:52
tags:
---

### The very first need
I started building this blog site because my coursework required an online profile for career planning presentations. The truth is I have wanted to build a personal station for a long time, and this assignment just gave me a good motivation to start. 

### Why choose Hexo?
To be honest, I did not know what to build with, there were so many options to choose from. I browsed many forums and many people recommended this framework because it is used by <mark>a large population</mark> and I am familiar with <mark>nodejs</mark>. So I chose this framework, even if there are problems in the future, I should be able to find a solution quickly.

### Get started
According to the official tutorial, I first installed the global hexo-cli.

{% codeblock lang:nodejs line_number:false %}
npm install -g hexo-cli
{% endcodeblock %}

Then it was time to initialize the project.

{% codeblock lang:nodejs line_number:true %}
hexo init <folder>
cd <folder>
npm install
{% endcodeblock %}

Imported the very popular theme <mark>**NexT**</mark> into my project.

{% codeblock _config.yml lang:yml line_number:false %}
theme: next
{% endcodeblock %}

Then it was time for the various configuration files.

{% asset_img configs.png 600 %}

For easy-configuration purposes, I made a copy of the full configuration file from `node_modules`.

### Setup Github pages
This step is relatively simple, I just need to configure the **`pages`** in **`settings`** to publish the project to the github space. Hexo also kindly included a tutorial on github configuration and the workflow code file corresponding to the **`Action`**. So, basically, all I need is to deal with the configuration files.

### Future thoughts
For now, I basically finished building this personal site, but there is still a lot of room for improvement. I found that the framework has a huge flaw - that is, the support for multiple languages is not friendly. I have consulted a lot of information, but the results are not satisfied. The solution I found now is to create two separate Hexo sites and link them together. Fortunately **`github pages`** can do this.

But it is annoying to execute the same command twice. In the future, I may build another github repo, merge the source files of the first two sites into one folder, and then write some scripts to simplify the operation process.

{% asset_img screenshot.png 500 "Something like this"%}