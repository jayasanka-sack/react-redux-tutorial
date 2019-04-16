Read the Full article here:
[React Redux tutorial: who this guide is for](https://www.valentinog.com/blog/redux/)

<div id="page" class="site">

<header id="masthead" class="site-header" role="banner">

<div class="custom-header" style="margin-bottom: 72px;">

<div class="site-branding">



</div>

</div>

<div class="navigation-top">

<div class="wrap">

<nav id="site-navigation" class="main-navigation" role="navigation" aria-label="Top Menu"><button class="menu-toggle" aria-controls="top-menu" aria-expanded="false"></button>



</nav>

</div>

</div>

</header>

<div class="site-content-contain">

<div id="content" class="site-content">

<div class="wrap">

<div id="primary" class="content-area">

<main id="main" class="site-main" role="main">

<article id="post-706" class="post-706 post type-post status-publish format-standard hentry category-javascript">

<header class="entry-header">


_The simplest **React Redux tutorial** I wish I had when I started learning_

![The Redux logo - React Redux tutorial](https://www.valentinog.com/blog/wp-content/uploads/2017/12/redux-react-tutorial-beginner-2018.png)

When I first started learning **Redux** I wish I could find the simplest tutorial ever.

Despite the great resources out there I couldn’t wrap my head around some of the Redux concepts.

<span id="more-706"></span>

I knew what’s the **state**. But **actions**, **action creators, and** **reducers?** Theywere obscure for me.

Last but not least I didn’t know how to glue **React and Redux together**.

During those days I started writing my own React Redux tutorial and since then I learned a lot.

I taught myself the Redux fundamentals by writing this guide. I hope it’ll be useful for all those learning React and Redux.

Enjoy the reading!

<div id="ez-toc-container" class="counter-hierarchy counter-decimal ez-toc-grey">

<div class="ez-toc-title-container">

Table of Contents

<span class="ez-toc-title-toggle"><a class="ez-toc-pull-right ez-toc-btn ez-toc-btn-xs ez-toc-btn-default ez-toc-toggle"></a></span></div>

<nav>

*   [React Redux tutorial: who this guide is for](#React_Redux_tutorial_who_this_guide_is_for "React Redux tutorial: who this guide is for")
*   [React Redux tutorial: what you will learn](#React_Redux_tutorial_what_you_will_learn "React Redux tutorial: what you will learn")
*   [React Redux tutorial: a minimal React development environment](#React_Redux_tutorial_a_minimal_React_development_environment "React Redux tutorial: a minimal React development environment")
*   [React Redux tutorial: what is the state?](#React_Redux_tutorial_what_is_the_state "React Redux tutorial: what is the state?")
*   [React Redux tutorial: what problem does Redux solve?](#React_Redux_tutorial_what_problem_does_Redux_solve "React Redux tutorial: what problem does Redux solve?")
*   [React Redux tutorial: why should I learn Redux?](#React_Redux_tutorial_why_should_I_learn_Redux "React Redux tutorial: why should I learn Redux?")
*   [React Redux tutorial: should I use Redux?](#React_Redux_tutorial_should_I_use_Redux "React Redux tutorial: should I use Redux?")
*   [React Redux tutorial: getting to know the Redux store](#React_Redux_tutorial_getting_to_know_the_Redux_store "React Redux tutorial: getting to know the Redux store")
*   [React Redux tutorial: getting to know Redux reducers](#React_Redux_tutorial_getting_to_know_Redux_reducers "React Redux tutorial: getting to know Redux reducers")
*   [React Redux tutorial: getting to know Redux actions](#React_Redux_tutorial_getting_to_know_Redux_actions "React Redux tutorial: getting to know Redux actions")
*   [React Redux tutorial: refactoring the reducer](#React_Redux_tutorial_refactoring_the_reducer "React Redux tutorial: refactoring the reducer")
*   [React Redux tutorial: Redux store methods](#React_Redux_tutorial_Redux_store_methods "React Redux tutorial: Redux store methods")
*   [React Redux tutorial: connecting React with Redux](#React_Redux_tutorial_connecting_React_with_Redux "React Redux tutorial: connecting React with Redux")
*   [React Redux tutorial: what is react-redux?](#React_Redux_tutorial_what_is_react-redux "React Redux tutorial: what is react-redux?")
*   [React Redux tutorial: App component and Redux store](#React_Redux_tutorial_App_component_and_Redux_store "React Redux tutorial: App component and Redux store")
*   [React Redux tutorial: List component and Redux state](#React_Redux_tutorial_List_component_and_Redux_state "React Redux tutorial: List component and Redux state")
*   [React Redux tutorial: Form component and Redux actions](#React_Redux_tutorial_Form_component_and_Redux_actions "React Redux tutorial: Form component and Redux actions")
*   [React Redux tutorial: what is a Redux middleware?](#React_Redux_tutorial_what_is_a_Redux_middleware "React Redux tutorial: what is a Redux middleware?")
*   [React Redux tutorial: your first Redux middleware](#React_Redux_tutorial_your_first_Redux_middleware "React Redux tutorial: your first Redux middleware")
*   [React Redux tutorial: asynchronous actions in Redux, the naive way](#React_Redux_tutorial_asynchronous_actions_in_Redux_the_naive_way "React Redux tutorial: asynchronous actions in Redux, the naive way")
*   [React Redux tutorial: asynchronous actions in Redux with Redux Thunk](#React_Redux_tutorial_asynchronous_actions_in_Redux_with_Redux_Thunk "React Redux tutorial: asynchronous actions in Redux with Redux Thunk")
*   [React Redux tutorial: introducing Redux Saga](#React_Redux_tutorial_introducing_Redux_Saga "React Redux tutorial: introducing Redux Saga")
*   [React Redux tutorial: Redux Saga and generator functions](#React_Redux_tutorial_Redux_Saga_and_generator_functions "React Redux tutorial: Redux Saga and generator functions")
*   [React Redux tutorial: writing your first Redux Saga](#React_Redux_tutorial_writing_your_first_Redux_Saga "React Redux tutorial: writing your first Redux Saga")
*   [React Redux tutorial: best courses for learning Redux](#React_Redux_tutorial_best_courses_for_learning_Redux "React Redux tutorial: best courses for learning Redux")
*   [React Redux tutorial: best books for learning Redux](#React_Redux_tutorial_best_books_for_learning_Redux "React Redux tutorial: best books for learning Redux")
*   [React Redux tutorial: wrapping up](#React_Redux_tutorial_wrapping_up "React Redux tutorial: wrapping up")

</nav>

</div>

## <span class="ez-toc-section" id="React_Redux_tutorial_who_this_guide_is_for">React Redux tutorial: who this guide is for</span>

The following React Redux guide is exactly what you’re looking for if:

*   you have a good grasp of Javascript, ES6, and React
*   you’re looking forward to learn Redux in the most simple way

## <span class="ez-toc-section" id="React_Redux_tutorial_what_you_will_learn">React Redux tutorial: what you will learn</span>

In the following guide you will learn:

1.  what is Redux
2.  how to use Redux with React

## <span class="ez-toc-section" id="React_Redux_tutorial_a_minimal_React_development_environment">React Redux tutorial: a minimal React development environment</span>

Before starting off **make sure you have a React development environment ready to roll**.

To make one you can follow this tutorial of mine: [How to set up React, webpack, and Babel](https://www.valentinog.com/blog/react-webpack-babel/) or you can also use **create-react-app**.

## <span class="ez-toc-section" id="React_Redux_tutorial_what_is_the_state">React Redux tutorial: what is the state?</span>

To **understand what is Redux** you must first understand what is the **state**.

If you have ever worked with React the term state should be no surprise to you.

I guess you already wrote some **stateful React component**:

<pre class="EnlighterJSRAW" data-enlighter-language="js" style="display: none;">import React, { Component } from "react";

class ExampleComponent extends Component {
  constructor() {
    super();

    this.state = {
      articles: [
        { title: "React Redux Tutorial for Beginners", id: 1 },
        { title: "Redux e React: cos'è Redux e come usarlo con React", id: 2 }
      ]
    };
  }

  render() {
    const { articles } = this.state;
    return <ul>{articles.map(el => <li key={el.id}>{el.title}</li>)}</ul>;
  }
}</pre>

<div class="EnlighterJSWrapper enlighterEnlighterJSWrapper">

1.  <span class="kw2">import</span> <span class="">React</span><span class="sy0">,</span> <span class=""></span> <span class="br0">{</span> <span class="">Component</span> <span class="br0">}</span> <span class="">from</span> <span class="st0">"react"</span><span class="sy0">;</span><span class=""></span>
2.  <span class=""></span>
3.  <span class=""></span><span class="kw2">class</span> <span class="">ExampleComponent</span> <span class="kw2">extends</span> <span class="">Component</span> <span class="br0">{</span><span class=""></span>
4.  <span class="">constructor</span><span class="br0">(</span><span class="br0">)</span> <span class=""></span> <span class="br0">{</span><span class=""></span>
5.  <span class=""></span><span class="kw2">super</span><span class="br0">(</span><span class="br0">)</span><span class="sy0">;</span><span class=""></span>
6.  <span class=""></span>
7.  <span class=""></span><span class="kw1">this</span><span class="sy0">.</span><span class="me0">state</span> <span class=""></span> <span class="sy0">=</span> <span class=""></span> <span class="br0">{</span><span class=""></span>
8.  <span class="">articles</span><span class="sy0">:</span> <span class=""></span> <span class="br0">[</span><span class=""></span>
9.  <span class=""></span><span class="br0">{</span> <span class="">title</span><span class="sy0">:</span> <span class=""></span> <span class="st0">"React Redux Tutorial for Beginners"</span><span class="sy0">,</span> <span class="">id</span><span class="sy0">:</span> <span class=""></span> <span class="nu0">1</span> <span class=""></span> <span class="br0">}</span><span class="sy0">,</span><span class=""></span>
10.  <span class=""></span><span class="br0">{</span> <span class="">title</span><span class="sy0">:</span> <span class=""></span> <span class="st0">"Redux e React: cos'è Redux e come usarlo con React"</span><span class="sy0">,</span> <span class="">id</span><span class="sy0">:</span> <span class=""></span> <span class="nu0">2</span> <span class=""></span> <span class="br0">}</span><span class=""></span>
11.  <span class=""></span><span class="br0">]</span><span class=""></span>
12.  <span class=""></span><span class="br0">}</span><span class="sy0">;</span><span class=""></span>
13.  <span class=""></span><span class="br0">}</span><span class=""></span>
14.  <span class=""></span>
15.  <span class="">render</span><span class="br0">(</span><span class="br0">)</span> <span class=""></span> <span class="br0">{</span><span class=""></span>
16.  <span class=""></span><span class="kw2">const</span> <span class=""></span> <span class="br0">{</span> <span class="">articles</span> <span class="br0">}</span> <span class=""></span> <span class="sy0">=</span> <span class=""></span> <span class="kw1">this</span><span class="sy0">.</span><span class="me0">state</span><span class="sy0">;</span><span class=""></span>
17.  <span class=""></span><span class="kw1">return</span> <span class=""></span> <span class="sy0"><</span><span class="">ul</span><span class="sy0">></span><span class="br0">{</span><span class="">articles</span><span class="sy0">.</span><span class="me0">map</span><span class="br0">(</span><span class="">el</span> <span class="sy0">=</span><span class="sy0">></span> <span class=""></span> <span class="sy0"><</span><span class="">li key</span><span class="sy0">=</span><span class="br0">{</span><span class="">el</span><span class="sy0">.</span><span class="me0">id</span><span class="br0">}</span><span class="sy0">></span><span class="br0">{</span><span class="">el</span><span class="sy0">.</span><span class="me0">title</span><span class="br0">}</span><span class="sy0"><</span><span class="re0">/li>)}</</span><span class="">ul</span><span class="sy0">></span><span class="sy0">;</span><span class=""></span>
18.  <span class=""></span><span class="br0">}</span><span class=""></span>
19.  <span class=""></span><span class="br0">}</span>

<pre style="display: none;">import React, { Component } from "react";

class ExampleComponent extends Component {
  constructor() {
    super();

    this.state = {
      articles: [
        { title: "React Redux Tutorial for Beginners", id: 1 },
        { title: "Redux e React: cos'è Redux e come usarlo con React", id: 2 }
      ]
    };
  }

  render() {
    const { articles } = this.state;
    return <ul>{articles.map(el => <li key={el.id}>{el.title}</li>)}</ul>;
  }
}</pre>

<div class="EnlighterJSToolbar"><a class="EnlighterJSInfoButton" title="EnlighterJS Syntax Highlighter"></a><a class="EnlighterJSRawButton" title="Toggle RAW Code"></a><a class="EnlighterJSWindowButton" title="Open Code in new Window"></a><span class="clear"></span></div>

</div>

A **stateful React component** is a JavaScript ES6 class (although I guess it will be no longer the case sooner or later, see React Hooks).

Every stateful React component **carries its own state**.

In a React component the state holds up **data** and the component might render such data to the user.

The state could also change in response to actions and events: in React you can update the local component’s state with setState.

But **what is the state** anyway? The term state is not tied exclusively to React. State is all around you. Even **the simplest JavaScript application has a state**. Consider the following example:

the user clicks a button

a modal appears afterwards

Guess what, **in this trivial interaction there is a state** we must deal with.

We could describe the initial state as a plain JavaScript object:

<pre class="EnlighterJSRAW" data-enlighter-language="js" style="display: none;">var state = {
  buttonClicked: 'no',
  modalOpen: 'no'
}</pre>

<div class="EnlighterJSWrapper enlighterEnlighterJSWrapper">

1.  <span class="kw2">var</span> <span class="">state</span> <span class="sy0">=</span> <span class=""></span> <span class="br0">{</span><span class=""></span>
2.  <span class="">buttonClicked</span><span class="sy0">:</span> <span class=""></span> <span class="st0">'no'</span><span class="sy0">,</span><span class=""></span>
3.  <span class="">modalOpen</span><span class="sy0">:</span> <span class=""></span> <span class="st0">'no'</span><span class=""></span>
4.  <span class=""></span><span class="br0">}</span>

<pre style="display: none;">var state = {
  buttonClicked: 'no',
  modalOpen: 'no'
}</pre>

<div class="EnlighterJSToolbar"><a class="EnlighterJSInfoButton" title="EnlighterJS Syntax Highlighter"></a><a class="EnlighterJSRawButton" title="Toggle RAW Code"></a><a class="EnlighterJSWindowButton" title="Open Code in new Window"></a><span class="clear"></span></div>

</div>

And when the user clicks the button we have:

<pre class="EnlighterJSRAW" data-enlighter-language="js" style="display: none;">var state = {
  buttonClicked: 'yes',
  modalOpen: 'yes'
}</pre>

<div class="EnlighterJSWrapper enlighterEnlighterJSWrapper">

1.  <span class="kw2">var</span> <span class="">state</span> <span class="sy0">=</span> <span class=""></span> <span class="br0">{</span><span class=""></span>
2.  <span class="">buttonClicked</span><span class="sy0">:</span> <span class=""></span> <span class="st0">'yes'</span><span class="sy0">,</span><span class=""></span>
3.  <span class="">modalOpen</span><span class="sy0">:</span> <span class=""></span> <span class="st0">'yes'</span><span class=""></span>
4.  <span class=""></span><span class="br0">}</span>

<pre style="display: none;">var state = {
  buttonClicked: 'yes',
  modalOpen: 'yes'
}</pre>

<div class="EnlighterJSToolbar"><a class="EnlighterJSInfoButton" title="EnlighterJS Syntax Highlighter"></a><a class="EnlighterJSRawButton" title="Toggle RAW Code"></a><a class="EnlighterJSWindowButton" title="Open Code in new Window"></a><span class="clear"></span></div>

</div>

How do you **keep track of those things in JavaScript** besides storing the state in an object? Is there **a library that can help us tracking the state in a reliable way**?

## <span class="ez-toc-section" id="React_Redux_tutorial_what_problem_does_Redux_solve">React Redux tutorial: what problem does Redux solve?</span>

A typical JavaScript application is full of state. Here are some examples:

*   what the user sees (data)
*   what data are we fetching
*   what URL are we showing to the user
*   what items are selected inside the page
*   are there errors in the applications? That’s state too

State is everywhere in JavaScript. But can you imagine **how much state a React application has**?

Yeah, you can get by with keeping the state within a parent React component as long as the application remains **small**. Then things will become tricky especially when you add more behaviours to the app.

**At some point we may want to reach for a consistent way for keeping track of state changes**. Not only, I’d say that the **frontend shouldn’t know about the business logic**. Ever.

So what are the alternatives for managing the state of a React component?

**Redux** is one of them.

**Redux solves a problem that might not be clear in the beginning**: it helps giving **each React component** the **exact piece of state** it needs.

Redux holds up the **state** within a **single location**.

Also with Redux the **logic for fetching and managing the state** lives **outside React**.The benefits of this approach might be not so evident. Things will look clear as soon as you’ll get your feet wet with Redux.

In the next sections we’ll see why you should learn Redux and when to use Redux within your applications. But first let me help you understand why and if you should learn Redux.

## <span class="ez-toc-section" id="React_Redux_tutorial_why_should_I_learn_Redux">React Redux tutorial: why should I learn Redux?</span>

Are you trying to learn Redux but you’re going nowhere? Redux literally scares most beginners. But that shouldn’t be your case.

**Redux is not that hard**. The key is: don’t rush learning Redux just because.

You should **start learning Redux** if you’re **motivated and passionate** about it.

Take your time. I started learning Redux because:

*   I was 100% interested in learning how Redux works
*   I was eager to improve my React skills
*   the combination React/Redux is ubiquitous
*   Redux is **framework agnostic**. Learn it once, use it almost everywhere (Vue JS, Angular)

But … is Redux a good investment? State is **pervasive and hard in JavaScript application so that state management in JS is still an unsolved problem**.

Another truth is: real world JavaScript applications almost always make use of a state management library.

Will Redux disappear in the future? Maybe. But the **patterns will stick forever** and it** will be invaluable for your career as a front end developer**.

In the end, **learning Redux** or an equivalent state management library **is a must, even if it has a steep learning curve.**

## <span class="ez-toc-section" id="React_Redux_tutorial_should_I_use_Redux">React Redux tutorial: should I use Redux?</span>

Using Redux or Flux (or Mobx) for state management is up to you.

Maybe you need none of these libraries. They have a cost: they add another layer of abstraction to your application.

But I prefer thinking about **Redux as an investment**, not as a cost.

Another common question for Redux beginners is: how do you know **when you’re ready to use Redux in your application**?

If you think about it there is no rule of thumb for determining when you do need **Redux for managing the state**.

Redux also offers a lot of convenience for a JavaScript developer. Debugging, action replaying. And much more.

When I start a new React project I’m always tempted to add Redux straight away. But as developers **we overengineer our code automatically.**

So, when should you add Redux to a project?

**Before picking Redux take your time to explore alternative patterns**. In particular try to get the most out of React’s state and props.

Dave Ceddia has a nice writeup with a lot of great insights for using [children props as an alternative before reaching for Redux](https://daveceddia.com/context-api-vs-redux/).

And don’t forget that a React project can be easily refactored to include Redux later.

What I found is that you should **consider using Redux** when:

*   multiple React components needs to access the same state but do not have any parent/child relationship
*   you start to feel awkward passing down the state to multiple components with props

If that makes still no sense for you do not worry, I felt the same.

Dan Abramov says “Flux libraries are like glasses: you’ll know when you need them.”

And in fact it worked like that for me.

<figure id="attachment_867" aria-describedby="caption-attachment-867" style="width: 400px" class="wp-caption aligncenter">![Whatever Dan Abramov says to do](https://www.valentinog.com/blog/wp-content/uploads/2017/12/dan_abramov.jpg)

<figcaption id="caption-attachment-867" class="wp-caption-text">Courtesy of dev.to</figcaption>

</figure>

Before going further take your time to understand what problem does Redux solve and whether you’re motivated or not to learn it.

Be aware that Redux is not useful for smaller apps. It really shines in bigger ones. Anyway, learning Redux even if you’re not involved in something big wouldn’t harm anyone.

In the next section we’ll start building a proof of concept to introduce:

*   the **Redux fundamental principles**
*   Redux alongside with React

Again, make sure you have a React development environment ready to roll: you can follow How to set up React, webpack, and Babel or go with create-react-app.

## <span class="ez-toc-section" id="React_Redux_tutorial_getting_to_know_the_Redux_store">React Redux tutorial: getting to know the Redux store</span>

Actions. Reducers. I kind of knew about them. But one thing wasn’t clear to me: **how were all the moving parts glued together**?

Were there some **minions** or what?

![React Redux tutorial. There are no minions in Redux](https://www.valentinog.com/blog/wp-content/uploads/2017/12/react-redux-tutorial-redux-store.jpg)

In Redux there are no minions (unfortunately).

The **store orchestrates all the moving parts in Redux**. Repeat with me: **the store**.

The store in Redux is like the human brain: it’s kind of magic.

The **Redux store is fundamental**: the **state of the whole application** lives **inside the store**.

So to start playing with Redux we should **create a store for wrapping up the state**.

Move into your React development environment and install Redux:

<pre class="EnlighterJSRAW" data-enlighter-language="shell" style="display: none;">npm i redux --save-dev</pre>

<div class="EnlighterJSWrapper enlighterEnlighterJSWrapper">

1.  <span class="">npm i redux --save-dev</span>

<pre style="display: none;">npm i redux --save-dev</pre>

<div class="EnlighterJSToolbar"><a class="EnlighterJSInfoButton" title="EnlighterJS Syntax Highlighter"></a><a class="EnlighterJSRawButton" title="Toggle RAW Code"></a><a class="EnlighterJSWindowButton" title="Open Code in new Window"></a><span class="clear"></span></div>

</div>

Create a directory for the store:

<pre class="EnlighterJSRAW" data-enlighter-language="shell" style="display: none;">mkdir -p src/js/store</pre>

<div class="EnlighterJSWrapper enlighterEnlighterJSWrapper">

1.  <span class="">mkdir -p src/js/store</span>

<pre style="display: none;">mkdir -p src/js/store</pre>

<div class="EnlighterJSToolbar"><a class="EnlighterJSInfoButton" title="EnlighterJS Syntax Highlighter"></a><a class="EnlighterJSRawButton" title="Toggle RAW Code"></a><a class="EnlighterJSWindowButton" title="Open Code in new Window"></a><span class="clear"></span></div>

</div>

Create a new file named `index.js`<span class="enlighterEnlighterJS EnlighterJS"><span class="">index.js</span></span>in `src/js/store`<span class="enlighterEnlighterJS EnlighterJS"><span class="">src/js/store</span></span>and finally initialize the store:

<pre class="EnlighterJSRAW" data-enlighter-language="js" style="display: none;">// src/js/store/index.js

import { createStore } from "redux";
import rootReducer from "../reducers/index";

const store = createStore(rootReducer);

export default store;</pre>

<div class="EnlighterJSWrapper enlighterEnlighterJSWrapper">

1.  <span class="co1">// src/js/store/index.js</span><span class=""></span>
2.  <span class=""></span>
3.  <span class=""></span><span class="kw2">import</span> <span class=""></span> <span class="br0">{</span> <span class="">createStore</span> <span class="br0">}</span> <span class="">from</span> <span class="st0">"redux"</span><span class="sy0">;</span><span class=""></span>
4.  <span class=""></span><span class="kw2">import</span> <span class="">rootReducer from</span> <span class="st0">"../reducers/index"</span><span class="sy0">;</span><span class=""></span>
5.  <span class=""></span>
6.  <span class=""></span><span class="kw2">const</span> <span class="">store</span> <span class="sy0">=</span> <span class="">createStore</span><span class="br0">(</span><span class="">rootReducer</span><span class="br0">)</span><span class="sy0">;</span><span class=""></span>
7.  <span class=""></span>
8.  <span class=""></span><span class="kw2">export</span> <span class=""></span> <span class="kw2">default</span> <span class="">store</span><span class="sy0">;</span>

<pre style="display: none;">// src/js/store/index.js

import { createStore } from "redux";
import rootReducer from "../reducers/index";

const store = createStore(rootReducer);

export default store;</pre>

<div class="EnlighterJSToolbar"><a class="EnlighterJSInfoButton" title="EnlighterJS Syntax Highlighter"></a><a class="EnlighterJSRawButton" title="Toggle RAW Code"></a><a class="EnlighterJSWindowButton" title="Open Code in new Window"></a><span class="clear"></span></div>

</div>

As you can see from the code above, **store is the result of createStore** which in turn is a function from the redux library.

**createStore takes a reducer as the first argument** and in our case we passed in rootReducer.

You may also pass an initial state to createStore which is useful for server side rendering but for now we’re not interested in that.

The most important concept here is that **the state in redux comes from reducers. Let’s make it clear:** **reducers produce the state of your application**.

Armed with that knowledge let’s move on to our first Redux reducer.

## <span class="ez-toc-section" id="React_Redux_tutorial_getting_to_know_Redux_reducers">React Redux tutorial: getting to know Redux reducers</span>

While an initial state is useful for [SSR](https://redux.js.org/docs/recipes/ServerRendering.html), in Redux **the state must return entirely from reducers**.

Cool but what’s a reducer?

**A reducer is just a JavaScript function**. A reducer **takes two parameters**: **the current state** and an **action** (more about actions soon).

In a tipical React component the local state changes in place with setState. In Redux you cannot do that. The third principle of Redux says that the state is immutable and cannot change in place.

This is why the reducer must be pure. A pure function is one that returns the exact same output for the given input.

Creating a reducer is not that hard. It’s a plain JavaScript function with two parameters.

In our example we’ll be creating a **simple reducer taking the initial state** as the first parameter. As a **second parameter** we’ll provide **action**. As of now the reducer will do nothing than returning the initial state.

Create a directory for the root reducer:

<pre class="EnlighterJSRAW" data-enlighter-language="shell" style="display: none;">mkdir -p src/js/reducers</pre>

<div class="EnlighterJSWrapper enlighterEnlighterJSWrapper">

1.  <span class="">mkdir -p src/js/reducers</span>

<pre style="display: none;">mkdir -p src/js/reducers</pre>

<div class="EnlighterJSToolbar"><a class="EnlighterJSInfoButton" title="EnlighterJS Syntax Highlighter"></a><a class="EnlighterJSRawButton" title="Toggle RAW Code"></a><a class="EnlighterJSWindowButton" title="Open Code in new Window"></a><span class="clear"></span></div>

</div>

Then create a new file named `index.js`<span class="enlighterEnlighterJS EnlighterJS"><span class="">index.js</span></span>in the `src/js/reducers`<span class="enlighterEnlighterJS EnlighterJS"><span class="">src/js/reducers</span></span>:

<pre class="EnlighterJSRAW" data-enlighter-language="js" style="display: none;">// src/js/reducers/index.js

const initialState = {
  articles: []
};

function rootReducer(state = initialState, action) {
  return state;
};

export default rootReducer;</pre>

<div class="EnlighterJSWrapper enlighterEnlighterJSWrapper">

1.  <span class="co1">// src/js/reducers/index.js</span><span class=""></span>
2.  <span class=""></span>
3.  <span class=""></span><span class="kw2">const</span> <span class="">initialState</span> <span class="sy0">=</span> <span class=""></span> <span class="br0">{</span><span class=""></span>
4.  <span class="">articles</span><span class="sy0">:</span> <span class=""></span> <span class="br0">[</span><span class="br0">]</span><span class=""></span>
5.  <span class=""></span><span class="br0">}</span><span class="sy0">;</span><span class=""></span>
6.  <span class=""></span>
7.  <span class=""></span><span class="kw2">function</span> <span class="">rootReducer</span><span class="br0">(</span><span class="">state</span> <span class="sy0">=</span> <span class="">initialState</span><span class="sy0">,</span> <span class="">action</span><span class="br0">)</span> <span class=""></span> <span class="br0">{</span><span class=""></span>
8.  <span class=""></span><span class="kw1">return</span> <span class="">state</span><span class="sy0">;</span><span class=""></span>
9.  <span class=""></span><span class="br0">}</span><span class="sy0">;</span><span class=""></span>
10.  <span class=""></span>
11.  <span class=""></span><span class="kw2">export</span> <span class=""></span> <span class="kw2">default</span> <span class="">rootReducer</span><span class="sy0">;</span>

<pre style="display: none;">// src/js/reducers/index.js

const initialState = {
  articles: []
};

function rootReducer(state = initialState, action) {
  return state;
};

export default rootReducer;</pre>

<div class="EnlighterJSToolbar"><a class="EnlighterJSInfoButton" title="EnlighterJS Syntax Highlighter"></a><a class="EnlighterJSRawButton" title="Toggle RAW Code"></a><a class="EnlighterJSWindowButton" title="Open Code in new Window"></a><span class="clear"></span></div>

</div>

I promised to keep this guide as simple as possibile. That’s why our first reducer is a silly one: it returns the initial state without doing anything else.

Notice how the initial state is passed as a default parameter.

In the next section we’ll add an action to the mix. That’s where things will become interesting.

## <span class="ez-toc-section" id="React_Redux_tutorial_getting_to_know_Redux_actions">React Redux tutorial: getting to know Redux actions</span>

Redux reducers are without doubt the most important concept in Redux. **Reducers produce the state of the application**.

But **how does a reducer know when to produce the next state**?

The second principle of Redux says the **only way to change the state is by sending a signal to the store**.This signal is an **action**. “**D****ispatching an action**” is the process of sending out a signal.

Now, how do you change an immutable state? You won’t. The resulting state is a copy of the current state plus the new data.

That’s a lot of stuff to know!

The reassuring thing is that **Redux actions are nothing more than JavaScript objects**. This is what an action looks like:

<pre class="EnlighterJSRAW" data-enlighter-language="js" style="display: none;">{
  type: 'ADD_ARTICLE',
  payload: { title: 'React Redux Tutorial', id: 1 }
}</pre>

<div class="EnlighterJSWrapper enlighterEnlighterJSWrapper">

1.  <span class="br0">{</span><span class=""></span>
2.  <span class="">type</span><span class="sy0">:</span> <span class=""></span> <span class="st0">'ADD_ARTICLE'</span><span class="sy0">,</span><span class=""></span>
3.  <span class="">payload</span><span class="sy0">:</span> <span class=""></span> <span class="br0">{</span> <span class="">title</span><span class="sy0">:</span> <span class=""></span> <span class="st0">'React Redux Tutorial'</span><span class="sy0">,</span> <span class="">id</span><span class="sy0">:</span> <span class=""></span> <span class="nu0">1</span> <span class=""></span> <span class="br0">}</span><span class=""></span>
4.  <span class=""></span><span class="br0">}</span>

<pre style="display: none;">{
  type: 'ADD_ARTICLE',
  payload: { title: 'React Redux Tutorial', id: 1 }
}</pre>

<div class="EnlighterJSToolbar"><a class="EnlighterJSInfoButton" title="EnlighterJS Syntax Highlighter"></a><a class="EnlighterJSRawButton" title="Toggle RAW Code"></a><a class="EnlighterJSWindowButton" title="Open Code in new Window"></a><span class="clear"></span></div>

</div>

Every **action needs a type property** for describing how the state should change.

You can specify a payload as well. In the above example the payload is a new article. A reducer will add the article to the current state later.

It is a best pratice to **wrap every action within a function**. Such function is an **action creator**.

Let’s put everything together by creating a simple Redux action.

Create a directory for the actions:

<pre class="EnlighterJSRAW" data-enlighter-language="shell" style="display: none;">mkdir -p src/js/actions</pre>

<div class="EnlighterJSWrapper enlighterEnlighterJSWrapper">

1.  <span class="">mkdir -p src/js/actions</span>

<pre style="display: none;">mkdir -p src/js/actions</pre>

<div class="EnlighterJSToolbar"><a class="EnlighterJSInfoButton" title="EnlighterJS Syntax Highlighter"></a><a class="EnlighterJSRawButton" title="Toggle RAW Code"></a><a class="EnlighterJSWindowButton" title="Open Code in new Window"></a><span class="clear"></span></div>

</div>

Then create a new file named `index.js`<span class="enlighterEnlighterJS EnlighterJS"><span class="">index.js</span></span>in `src/js/actions`<span class="enlighterEnlighterJS EnlighterJS"><span class="">src/js/actions</span></span>:

<pre class="EnlighterJSRAW" data-enlighter-language="js" style="display: none;">// src/js/actions/index.js

export function addArticle(payload) {
  return { type: "ADD_ARTICLE", payload }
};</pre>

<div class="EnlighterJSWrapper enlighterEnlighterJSWrapper">

1.  <span class="co1">// src/js/actions/index.js</span><span class=""></span>
2.  <span class=""></span>
3.  <span class=""></span><span class="kw2">export</span> <span class=""></span> <span class="kw2">function</span> <span class="">addArticle</span><span class="br0">(</span><span class="">payload</span><span class="br0">)</span> <span class=""></span> <span class="br0">{</span><span class=""></span>
4.  <span class=""></span><span class="kw1">return</span> <span class=""></span> <span class="br0">{</span> <span class="">type</span><span class="sy0">:</span> <span class=""></span> <span class="st0">"ADD_ARTICLE"</span><span class="sy0">,</span> <span class="">payload</span> <span class="br0">}</span><span class=""></span>
5.  <span class=""></span><span class="br0">}</span><span class="sy0">;</span>

<pre style="display: none;">// src/js/actions/index.js

export function addArticle(payload) {
  return { type: "ADD_ARTICLE", payload }
};</pre>

<div class="EnlighterJSToolbar"><a class="EnlighterJSInfoButton" title="EnlighterJS Syntax Highlighter"></a><a class="EnlighterJSRawButton" title="Toggle RAW Code"></a><a class="EnlighterJSWindowButton" title="Open Code in new Window"></a><span class="clear"></span></div>

</div>

So, the **type property** is nothing more than a string.

The reducer will use that string to determine how to calculate the next state.

Since strings are prone to typos and duplicates it’s **better to have action types declared as constants**.

This approach helps **avoiding errors that will be difficult to debug**.

Create a new directory:

<pre class="EnlighterJSRAW" data-enlighter-language="shell" style="display: none;">mkdir -p src/js/constants</pre>

<div class="EnlighterJSWrapper enlighterEnlighterJSWrapper">

1.  <span class="">mkdir -p src/js/constants</span>

<pre style="display: none;">mkdir -p src/js/constants</pre>

<div class="EnlighterJSToolbar"><a class="EnlighterJSInfoButton" title="EnlighterJS Syntax Highlighter"></a><a class="EnlighterJSRawButton" title="Toggle RAW Code"></a><a class="EnlighterJSWindowButton" title="Open Code in new Window"></a><span class="clear"></span></div>

</div>

Then create a new file named `action-types.js`<span class="enlighterEnlighterJS EnlighterJS"><span class="">action-types.js</span></span>into the `src/js/constants`<span class="enlighterEnlighterJS EnlighterJS"><span class="">src/js/constants</span></span>:

<pre class="EnlighterJSRAW" data-enlighter-language="js" style="display: none;">// src/js/constants/action-types.js

export const ADD_ARTICLE = "ADD_ARTICLE";</pre>

<div class="EnlighterJSWrapper enlighterEnlighterJSWrapper">

1.  <span class="co1">// src/js/constants/action-types.js</span><span class=""></span>
2.  <span class=""></span>
3.  <span class=""></span><span class="kw2">export</span> <span class=""></span> <span class="kw2">const</span> <span class="">ADD_ARTICLE</span> <span class="sy0">=</span> <span class=""></span> <span class="st0">"ADD_ARTICLE"</span><span class="sy0">;</span>

<pre style="display: none;">// src/js/constants/action-types.js

export const ADD_ARTICLE = "ADD_ARTICLE";</pre>

<div class="EnlighterJSToolbar"><a class="EnlighterJSInfoButton" title="EnlighterJS Syntax Highlighter"></a><a class="EnlighterJSRawButton" title="Toggle RAW Code"></a><a class="EnlighterJSWindowButton" title="Open Code in new Window"></a><span class="clear"></span></div>

</div>

Now open up again `src/js/actions/index.js`<span class="enlighterEnlighterJS EnlighterJS"><span class="">src/js/actions/index.js</span></span>and update the action to use action types:

<pre class="EnlighterJSRAW" data-enlighter-language="js" style="display: none;">// src/js/actions/index.js

import { ADD_ARTICLE } from "../constants/action-types";

export function addArticle(payload) {
  return { type: ADD_ARTICLE, payload };
}</pre>

<div class="EnlighterJSWrapper enlighterEnlighterJSWrapper">

1.  <span class="co1">// src/js/actions/index.js</span><span class=""></span>
2.  <span class=""></span>
3.  <span class=""></span><span class="kw2">import</span> <span class=""></span> <span class="br0">{</span> <span class="">ADD_ARTICLE</span> <span class="br0">}</span> <span class="">from</span> <span class="st0">"../constants/action-types"</span><span class="sy0">;</span><span class=""></span>
4.  <span class=""></span>
5.  <span class=""></span><span class="kw2">export</span> <span class=""></span> <span class="kw2">function</span> <span class="">addArticle</span><span class="br0">(</span><span class="">payload</span><span class="br0">)</span> <span class=""></span> <span class="br0">{</span><span class=""></span>
6.  <span class=""></span><span class="kw1">return</span> <span class=""></span> <span class="br0">{</span> <span class="">type</span><span class="sy0">:</span> <span class="">ADD_ARTICLE</span><span class="sy0">,</span> <span class="">payload</span> <span class="br0">}</span><span class="sy0">;</span><span class=""></span>
7.  <span class=""></span><span class="br0">}</span>

<pre style="display: none;">// src/js/actions/index.js

import { ADD_ARTICLE } from "../constants/action-types";

export function addArticle(payload) {
  return { type: ADD_ARTICLE, payload };
}</pre>

<div class="EnlighterJSToolbar"><a class="EnlighterJSInfoButton" title="EnlighterJS Syntax Highlighter"></a><a class="EnlighterJSRawButton" title="Toggle RAW Code"></a><a class="EnlighterJSWindowButton" title="Open Code in new Window"></a><span class="clear"></span></div>

</div>

We’re one step closer to have a working Redux application. Let’s refactor our reducer!

## <span class="ez-toc-section" id="React_Redux_tutorial_refactoring_the_reducer">React Redux tutorial: refactoring the reducer</span>

Before moving forward let’s recap the main Redux concepts:

*   the **Redux store** is like a brain: it’s in charge for **orchestrating all the moving parts** in Redux
*   the **state of the application lives as a single, immutable object** within the store
*   as soon as **the store receives an action it triggers a reducer**
*   the **reducer returns the next state**

But what’s a **Redux reducer** made of?

A reducer is a JavaScript function taking **two parameters**: **state** and **action**. A reducer function may use a **switch statement** (but I prefer using **if**) for handling every action type.

The **reducer calculates the next state depending on the action type**. Moreover, **it should return at least the initial state when no action type matches**.

When the action type matches a valid clause the **reducer calculates the next state** and **returns a new object**.

Now the reducer we created in the previous section does nothing than returning the initial state. Let’s fix that.

Open up src/js/reducers/index.js and update the reducer as follow:

<pre class="EnlighterJSRAW" data-enlighter-language="js" style="display: none;">// src/js/reducers/index.js

import { ADD_ARTICLE } from "../constants/action-types";

const initialState = {
  articles: []
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_ARTICLE) {
    state.articles.push(action.payload);
  }
  return state;
}

export default rootReducer;</pre>

<div class="EnlighterJSWrapper enlighterEnlighterJSWrapper">

1.  <span class="co1">// src/js/reducers/index.js</span><span class=""></span>
2.  <span class=""></span>
3.  <span class=""></span><span class="kw2">import</span> <span class=""></span> <span class="br0">{</span> <span class="">ADD_ARTICLE</span> <span class="br0">}</span> <span class="">from</span> <span class="st0">"../constants/action-types"</span><span class="sy0">;</span><span class=""></span>
4.  <span class=""></span>
5.  <span class=""></span><span class="kw2">const</span> <span class="">initialState</span> <span class="sy0">=</span> <span class=""></span> <span class="br0">{</span><span class=""></span>
6.  <span class="">articles</span><span class="sy0">:</span> <span class=""></span> <span class="br0">[</span><span class="br0">]</span><span class=""></span>
7.  <span class=""></span><span class="br0">}</span><span class="sy0">;</span><span class=""></span>
8.  <span class=""></span>
9.  <span class=""></span><span class="kw2">function</span> <span class="">rootReducer</span><span class="br0">(</span><span class="">state</span> <span class="sy0">=</span> <span class="">initialState</span><span class="sy0">,</span> <span class="">action</span><span class="br0">)</span> <span class=""></span> <span class="br0">{</span><span class=""></span>
10.  <span class=""></span><span class="kw1">if</span> <span class=""></span> <span class="br0">(</span><span class="">action</span><span class="sy0">.</span><span class="me0">type</span> <span class=""></span> <span class="sy0">=</span><span class="sy0">=</span><span class="sy0">=</span> <span class="">ADD_ARTICLE</span><span class="br0">)</span> <span class=""></span> <span class="br0">{</span><span class=""></span>
11.  <span class="">state</span><span class="sy0">.</span><span class="me0">articles</span><span class="sy0">.</span><span class="me0">push</span><span class="br0">(</span><span class="">action</span><span class="sy0">.</span><span class="me0">payload</span><span class="br0">)</span><span class="sy0">;</span><span class=""></span>
12.  <span class=""></span><span class="br0">}</span><span class=""></span>
13.  <span class=""></span><span class="kw1">return</span> <span class="">state</span><span class="sy0">;</span><span class=""></span>
14.  <span class=""></span><span class="br0">}</span><span class=""></span>
15.  <span class=""></span>
16.  <span class=""></span><span class="kw2">export</span> <span class=""></span> <span class="kw2">default</span> <span class="">rootReducer</span><span class="sy0">;</span>

<pre style="display: none;">// src/js/reducers/index.js

import { ADD_ARTICLE } from "../constants/action-types";

const initialState = {
  articles: []
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_ARTICLE) {
    state.articles.push(action.payload);
  }
  return state;
}

export default rootReducer;</pre>

<div class="EnlighterJSToolbar"><a class="EnlighterJSInfoButton" title="EnlighterJS Syntax Highlighter"></a><a class="EnlighterJSRawButton" title="Toggle RAW Code"></a><a class="EnlighterJSWindowButton" title="Open Code in new Window"></a><span class="clear"></span></div>

</div>

What do you see here?

Although it’s valid code the **above reducer breaks** the main Redux principle: **immutability**.

Array.prototype.push is an impure function: it alters the original array. But there’s more! Do you rememeber the third principle of Redux? **The state is immutable and cannot change in place**. Instead in our reducer we’re mutating the original object!

We need a fix. First we can return a new state, ie **a new JavaScript object with Object.assign**. This way we keep the **original state immutable**. Then we can use **Array.prototype.concat in place of Array.prototype.push for keeping the initial array** immutable:

<pre class="EnlighterJSRAW" data-enlighter-language="js" style="display: none;">import { ADD_ARTICLE } from "../constants/action-types";

const initialState = {
  articles: []
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_ARTICLE) {
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload)
    });
  }
  return state;
}

export default rootReducer;</pre>

<div class="EnlighterJSWrapper enlighterEnlighterJSWrapper">

1.  <span class="kw2">import</span> <span class=""></span> <span class="br0">{</span> <span class="">ADD_ARTICLE</span> <span class="br0">}</span> <span class="">from</span> <span class="st0">"../constants/action-types"</span><span class="sy0">;</span><span class=""></span>
2.  <span class=""></span>
3.  <span class=""></span><span class="kw2">const</span> <span class="">initialState</span> <span class="sy0">=</span> <span class=""></span> <span class="br0">{</span><span class=""></span>
4.  <span class="">articles</span><span class="sy0">:</span> <span class=""></span> <span class="br0">[</span><span class="br0">]</span><span class=""></span>
5.  <span class=""></span><span class="br0">}</span><span class="sy0">;</span><span class=""></span>
6.  <span class=""></span>
7.  <span class=""></span><span class="kw2">function</span> <span class="">rootReducer</span><span class="br0">(</span><span class="">state</span> <span class="sy0">=</span> <span class="">initialState</span><span class="sy0">,</span> <span class="">action</span><span class="br0">)</span> <span class=""></span> <span class="br0">{</span><span class=""></span>
8.  <span class=""></span><span class="kw1">if</span> <span class=""></span> <span class="br0">(</span><span class="">action</span><span class="sy0">.</span><span class="me0">type</span> <span class=""></span> <span class="sy0">=</span><span class="sy0">=</span><span class="sy0">=</span> <span class="">ADD_ARTICLE</span><span class="br0">)</span> <span class=""></span> <span class="br0">{</span><span class=""></span>
9.  <span class=""></span><span class="kw1">return</span> <span class="">Object</span><span class="sy0">.</span><span class="me0">assign</span><span class="br0">(</span><span class="br0">{</span><span class="br0">}</span><span class="sy0">,</span> <span class="">state</span><span class="sy0">,</span> <span class=""></span> <span class="br0">{</span><span class=""></span>
10.  <span class="">articles</span><span class="sy0">:</span> <span class="">state</span><span class="sy0">.</span><span class="me0">articles</span><span class="sy0">.</span><span class="me0">concat</span><span class="br0">(</span><span class="">action</span><span class="sy0">.</span><span class="me0">payload</span><span class="br0">)</span><span class=""></span>
11.  <span class=""></span><span class="br0">}</span><span class="br0">)</span><span class="sy0">;</span><span class=""></span>
12.  <span class=""></span><span class="br0">}</span><span class=""></span>
13.  <span class=""></span><span class="kw1">return</span> <span class="">state</span><span class="sy0">;</span><span class=""></span>
14.  <span class=""></span><span class="br0">}</span><span class=""></span>
15.  <span class=""></span>
16.  <span class=""></span><span class="kw2">export</span> <span class=""></span> <span class="kw2">default</span> <span class="">rootReducer</span><span class="sy0">;</span>

<pre style="display: none;">import { ADD_ARTICLE } from "../constants/action-types";

const initialState = {
  articles: []
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_ARTICLE) {
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload)
    });
  }
  return state;
}

export default rootReducer;</pre>

<div class="EnlighterJSToolbar"><a class="EnlighterJSInfoButton" title="EnlighterJS Syntax Highlighter"></a><a class="EnlighterJSRawButton" title="Toggle RAW Code"></a><a class="EnlighterJSWindowButton" title="Open Code in new Window"></a><span class="clear"></span></div>

</div>

In the example above the initial state is left utterly untouched.

The initial articles array doesn’t change in place.

The initial state object doesn’t change as well. The resulting state is a copy of the initial state.

There are two key points for **avoiding mutations in Redux**:

*   [Using concat(), slice(), and …spread](https://egghead.io/lessons/react-redux-avoiding-array-mutations-with-concat-slice-and-spread) for arrays
*   [Using Object.assign() and …spread](https://egghead.io/lessons/react-redux-avoiding-object-mutations-with-object-assign-and-spread) for objects

**Redux protip**: the reducer will grow as your app will become bigger. You can split a big reducer into separate functions and combine them with [combineReducers](https://redux.js.org/docs/api/combineReducers.html)

In the next section we’ll play with Redux from the console. Hold tight!

## <span class="ez-toc-section" id="React_Redux_tutorial_Redux_store_methods">React Redux tutorial: Redux store methods</span>

This will be super quick, I promise.

I want you to play with the brower’s console for gaining a quick understanding of how Redux works.

Redux itself is a small library (2KB). The Redux store exposes a simple API for managing the state. The most important methods are:

*   getState for accessing the current state of the application
*   dispatch for dispatching an action
*   subscribe for listening on state changes

We will play in the brower’s console with the above methods.

To do so we have to export as global variables the store and the action we created earlier.

Create a new file named **src/js/index.js** and update the file with the following code:

<pre class="EnlighterJSRAW" data-enlighter-language="js" style="display: none;">import store from "../js/store/index";
import { addArticle } from "../js/actions/index";

window.store = store;
window.addArticle = addArticle;</pre>

<div class="EnlighterJSWrapper enlighterEnlighterJSWrapper">

1.  <span class="kw2">import</span> <span class="">store from</span> <span class="st0">"../js/store/index"</span><span class="sy0">;</span><span class=""></span>
2.  <span class=""></span><span class="kw2">import</span> <span class=""></span> <span class="br0">{</span> <span class="">addArticle</span> <span class="br0">}</span> <span class="">from</span> <span class="st0">"../js/actions/index"</span><span class="sy0">;</span><span class=""></span>
3.  <span class=""></span>
4.  <span class="">window</span><span class="sy0">.</span><span class="me0">store</span> <span class=""></span> <span class="sy0">=</span> <span class="">store</span><span class="sy0">;</span><span class=""></span>
5.  <span class="">window</span><span class="sy0">.</span><span class="me0">addArticle</span> <span class=""></span> <span class="sy0">=</span> <span class="">addArticle</span><span class="sy0">;</span>

<pre style="display: none;">import store from "../js/store/index";
import { addArticle } from "../js/actions/index";

window.store = store;
window.addArticle = addArticle;</pre>

<div class="EnlighterJSToolbar"><a class="EnlighterJSInfoButton" title="EnlighterJS Syntax Highlighter"></a><a class="EnlighterJSRawButton" title="Toggle RAW Code"></a><a class="EnlighterJSWindowButton" title="Open Code in new Window"></a><span class="clear"></span></div>

</div>

Now open up **src/index.js** as well, clean up its content and update it as follows:

<pre class="EnlighterJSRAW" data-enlighter-language="js" style="display: none;">import index from "./js/index"</pre>

<div class="EnlighterJSWrapper enlighterEnlighterJSWrapper">

1.  <span class="kw2">import</span> <span class="">index from</span> <span class="st0">"./js/index"</span>

<pre style="display: none;">import index from "./js/index"</pre>

<div class="EnlighterJSToolbar"><a class="EnlighterJSInfoButton" title="EnlighterJS Syntax Highlighter"></a><a class="EnlighterJSRawButton" title="Toggle RAW Code"></a><a class="EnlighterJSWindowButton" title="Open Code in new Window"></a><span class="clear"></span></div>

</div>

Now run webpack dev server (or Parcel) with:

<pre class="EnlighterJSRAW" data-enlighter-language="shell" style="display: none;">npm start</pre>

<div class="EnlighterJSWrapper enlighterEnlighterJSWrapper">

1.  <span class="">npm start</span>

<pre style="display: none;">npm start</pre>

<div class="EnlighterJSToolbar"><a class="EnlighterJSInfoButton" title="EnlighterJS Syntax Highlighter"></a><a class="EnlighterJSRawButton" title="Toggle RAW Code"></a><a class="EnlighterJSWindowButton" title="Open Code in new Window"></a><span class="clear"></span></div>

</div>

head over http://localhost:8080/ and open up the console with F12.

Since we’ve exported the store as a global variable we can access its methods. Give it a try!

Start off by **accessing the current state**:

<pre class="EnlighterJSRAW" data-enlighter-language="js" style="display: none;">store.getState()</pre>

<div class="EnlighterJSWrapper enlighterEnlighterJSWrapper">

1.  <span class="">store</span><span class="sy0">.</span><span class="me0">getState</span><span class="br0">(</span><span class="br0">)</span>

<pre style="display: none;">store.getState()</pre>

<div class="EnlighterJSToolbar"><a class="EnlighterJSInfoButton" title="EnlighterJS Syntax Highlighter"></a><a class="EnlighterJSRawButton" title="Toggle RAW Code"></a><a class="EnlighterJSWindowButton" title="Open Code in new Window"></a><span class="clear"></span></div>

</div>

output:

<pre class="EnlighterJSRAW" data-enlighter-language="js" style="display: none;">{articles: Array(0)}</pre>

<div class="EnlighterJSWrapper enlighterEnlighterJSWrapper">

1.  <span class="br0">{</span><span class="">articles</span><span class="sy0">:</span> <span class="">Array</span><span class="br0">(</span><span class="nu0">0</span><span class="br0">)</span><span class="br0">}</span>

<pre style="display: none;">{articles: Array(0)}</pre>

<div class="EnlighterJSToolbar"><a class="EnlighterJSInfoButton" title="EnlighterJS Syntax Highlighter"></a><a class="EnlighterJSRawButton" title="Toggle RAW Code"></a><a class="EnlighterJSWindowButton" title="Open Code in new Window"></a><span class="clear"></span></div>

</div>

Zero articles. In fact we haven’t update the initial state yet.

To make things interesting we can listen for state updates with **subscribe**.

The **subscribe method accepts a callback that will fire whenever an action is dispatched**. Dispatching an action means notifying the store that we want to change the state.

Register the callback with:

<pre class="EnlighterJSRAW" data-enlighter-language="js" style="display: none;">store.subscribe(() => console.log('Look ma, Redux!!'))</pre>

<div class="EnlighterJSWrapper enlighterEnlighterJSWrapper">

1.  <span class="">store</span><span class="sy0">.</span><span class="me0">subscribe</span><span class="br0">(</span><span class="br0">(</span><span class="br0">)</span> <span class=""></span> <span class="sy0">=</span><span class="sy0">></span> <span class="">console</span><span class="sy0">.</span><span class="me0">log</span><span class="br0">(</span><span class="st0">'Look ma, Redux!!'</span><span class="br0">)</span><span class="br0">)</span>

<pre style="display: none;">store.subscribe(() => console.log('Look ma, Redux!!'))</pre>

<div class="EnlighterJSToolbar"><a class="EnlighterJSInfoButton" title="EnlighterJS Syntax Highlighter"></a><a class="EnlighterJSRawButton" title="Toggle RAW Code"></a><a class="EnlighterJSWindowButton" title="Open Code in new Window"></a><span class="clear"></span></div>

</div>

To **change the state in Redux we need to dispatch an action**. To dispatch an action you have to call the **dispatch** method.

We have one action at our disposal: addArticle for adding a new item to the state.

Let’s dispatch the action with:

<pre class="EnlighterJSRAW" data-enlighter-language="js" style="display: none;">store.dispatch( addArticle({ title: 'React Redux Tutorial for Beginners', id: 1 }) )</pre>

<div class="EnlighterJSWrapper enlighterEnlighterJSWrapper">

1.  <span class="">store</span><span class="sy0">.</span><span class="me0">dispatch</span><span class="br0">(</span> <span class="">addArticle</span><span class="br0">(</span><span class="br0">{</span> <span class="">title</span><span class="sy0">:</span> <span class=""></span> <span class="st0">'React Redux Tutorial for Beginners'</span><span class="sy0">,</span> <span class="">id</span><span class="sy0">:</span> <span class=""></span> <span class="nu0">1</span> <span class=""></span> <span class="br0">}</span><span class="br0">)</span> <span class=""></span> <span class="br0">)</span>

<pre style="display: none;">store.dispatch( addArticle({ title: 'React Redux Tutorial for Beginners', id: 1 }) )</pre>

<div class="EnlighterJSToolbar"><a class="EnlighterJSInfoButton" title="EnlighterJS Syntax Highlighter"></a><a class="EnlighterJSRawButton" title="Toggle RAW Code"></a><a class="EnlighterJSWindowButton" title="Open Code in new Window"></a><span class="clear"></span></div>

</div>

Right after running the above code you should see:

<pre class="EnlighterJSRAW" data-enlighter-language="js" style="display: none;">Look ma, Redux!!</pre>

<div class="EnlighterJSWrapper enlighterEnlighterJSWrapper">

1.  <span class="">Look ma</span><span class="sy0">,</span> <span class="">Redux</span><span class="sy0">!</span><span class="sy0">!</span>

<pre style="display: none;">Look ma, Redux!!</pre>

<div class="EnlighterJSToolbar"><a class="EnlighterJSInfoButton" title="EnlighterJS Syntax Highlighter"></a><a class="EnlighterJSRawButton" title="Toggle RAW Code"></a><a class="EnlighterJSWindowButton" title="Open Code in new Window"></a><span class="clear"></span></div>

</div>

To verify that the state changed run again:

<pre class="EnlighterJSRAW" data-enlighter-language="js" style="display: none;">store.getState()</pre>

<div class="EnlighterJSWrapper enlighterEnlighterJSWrapper">

1.  <span class="">store</span><span class="sy0">.</span><span class="me0">getState</span><span class="br0">(</span><span class="br0">)</span>

<pre style="display: none;">store.getState()</pre>

<div class="EnlighterJSToolbar"><a class="EnlighterJSInfoButton" title="EnlighterJS Syntax Highlighter"></a><a class="EnlighterJSRawButton" title="Toggle RAW Code"></a><a class="EnlighterJSWindowButton" title="Open Code in new Window"></a><span class="clear"></span></div>

</div>

The output should be:

<pre class="EnlighterJSRAW" data-enlighter-language="js" style="display: none;">{articles: Array(1)}</pre>

<div class="EnlighterJSWrapper enlighterEnlighterJSWrapper">

1.  <span class="br0">{</span><span class="">articles</span><span class="sy0">:</span> <span class="">Array</span><span class="br0">(</span><span class="nu0">1</span><span class="br0">)</span><span class="br0">}</span>

<pre style="display: none;">{articles: Array(1)}</pre>

<div class="EnlighterJSToolbar"><a class="EnlighterJSInfoButton" title="EnlighterJS Syntax Highlighter"></a><a class="EnlighterJSRawButton" title="Toggle RAW Code"></a><a class="EnlighterJSWindowButton" title="Open Code in new Window"></a><span class="clear"></span></div>

</div>

And that’s it. This is Redux in its simplest form.

Was that difficult?

Take your time to explore these three Redux methods as an exercise. Play with them from the console:

*   getState for **accessing the current state** of the application
*   dispatch for **dispatching an action**
*   subscribe for **listening on state changes**

That’s everything you need to know for getting started with Redux.

Once you feel confident head over the next section. We’ll go straight to connecting React with Redux!

## <span class="ez-toc-section" id="React_Redux_tutorial_connecting_React_with_Redux">React Redux tutorial: connecting React with Redux</span>

After learning Redux I realized it wasn’t so complex. I knew how to access the current state with getState. I knew how to dispatch an action with dispatch and how to listen for state changes with subscribe.

Yet I didn’t know how to couple **React and Redux** together.

I was asking myself: should I call getState within a React component? How do I dispatch an action from a React component? And so on.

Redux on its own is framework agnostic. You can use it with vanilla Javascript. Or with Angular. Or with React. There are bindings for joining together Redux with your favorite framework/library.

For React there is **react-redux**.

Before moving forward install react-redux by running:

<pre class="EnlighterJSRAW" data-enlighter-language="shell" style="display: none;">npm i react-redux --save-dev</pre>

<div class="EnlighterJSWrapper enlighterEnlighterJSWrapper">

1.  <span class="">npm i react-redux --save-dev</span>

<pre style="display: none;">npm i react-redux --save-dev</pre>

<div class="EnlighterJSToolbar"><a class="EnlighterJSInfoButton" title="EnlighterJS Syntax Highlighter"></a><a class="EnlighterJSRawButton" title="Toggle RAW Code"></a><a class="EnlighterJSWindowButton" title="Open Code in new Window"></a><span class="clear"></span></div>

</div>

To demonstrate how React and Redux work together we’ll build a super simple application. The application is made of the following components:

*   an App component
*   a List component for displaying articles
*   a Form component for adding new articles

(The application is a toy and it does nothing serious other than displaying a list and a form for adding new items. Nonetheless it’s still a good starting point for learning Redux)

## <span class="ez-toc-section" id="React_Redux_tutorial_what_is_react-redux">React Redux tutorial: what is react-redux?</span>

**react-redux** is a Redux binding for React. It’s a small library for connecting Redux and React in an efficient way.

The most important method you’ll work with is **connect.**

What does react-redux’s **connect** do? Unsurprisingly it connects a React component with the Redux store.

You will use connect with two or three arguments depending on the use case. The fundamental things to know are:

*   the mapStateToProps function
*   the mapDispatchToProps function

**What does mapStateToProps do** in react-redux? mapStateToProps does exactly what its name suggests: it **connects a part of the Redux state** to the [props of a React component](https://reactjs.org/docs/components-and-props.html). By doing so a connected React component will have access to the exact part of the store it needs.

**And what about mapDispatchToProps**? mapDispatchToProps does something similar, but for actions. **mapDispatchToProps connects Redux actions to React props**. This way a connected React component will be able to dispatch actions.

Is everything clear? If not, stop and take your time to re-read the guide. I know it’s a lot to learn and it requires time. Don’t worry if you don’t get Redux right know. It will click sooner or later.

In the next section we’ll finally get our hands dirty!

## <span class="ez-toc-section" id="React_Redux_tutorial_App_component_and_Redux_store">React Redux tutorial: App component and Redux store</span>

We saw that mapStateToProps connects a portion of the Redux state to the props of a React component. You may wonder: is this enough for connecting Redux with React? No, it’s not.

To start off **connecting Redux with React we’re going to use Provider**.

Provider is an high order component coming from react-redux.

Using layman’s terms, Provider wraps up your React application and makes it aware of the entire Redux’s store.

Why so? We saw that in Redux the store manages everything. React must talk to the store for accessing the state and dispatching actions.

Enough theory.

Open up src/js/index.js, wipe out everything and update the file with the following code (**if you’re in create-react-app modify src/index.js instead**):

<pre class="EnlighterJSRAW" data-enlighter-language="js" style="display: none;">import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./store/index";
import App from "./components/App.jsx";
// if you're in create-react-app import the files as:
// import store from "./js/store/index";
// import App from "./js/components/App.jsx";

render(
  <Provider store={store}>
    <App />
  </Provider>,
  // The target element might be either root or app,
  // depending on your development environment
  // document.getElementById("app")
  document.getElementById("root")
);</pre>

<div class="EnlighterJSWrapper enlighterEnlighterJSWrapper">

1.  <span class="kw2">import</span> <span class="">React from</span> <span class="st0">"react"</span><span class="sy0">;</span><span class=""></span>
2.  <span class=""></span><span class="kw2">import</span> <span class=""></span> <span class="br0">{</span> <span class="">render</span> <span class="br0">}</span> <span class="">from</span> <span class="st0">"react-dom"</span><span class="sy0">;</span><span class=""></span>
3.  <span class=""></span><span class="kw2">import</span> <span class=""></span> <span class="br0">{</span> <span class="">Provider</span> <span class="br0">}</span> <span class="">from</span> <span class="st0">"react-redux"</span><span class="sy0">;</span><span class=""></span>
4.  <span class=""></span><span class="kw2">import</span> <span class="">store from</span> <span class="st0">"./store/index"</span><span class="sy0">;</span><span class=""></span>
5.  <span class=""></span><span class="kw2">import</span> <span class="">App from</span> <span class="st0">"./components/App.jsx"</span><span class="sy0">;</span><span class="co1"></span>
6.  <span class="co1">// if you're in create-react-app import the files as:</span><span class="co1"></span>
7.  <span class="co1">// import store from "./js/store/index";</span><span class="co1"></span>
8.  <span class="co1">// import App from "./js/components/App.jsx";</span><span class=""></span>
9.  <span class=""></span>
10.  <span class="">render</span><span class="br0">(</span><span class=""></span>
11.  <span class=""></span><span class="sy0"><</span><span class="">Provider store</span><span class="sy0">=</span><span class="br0">{</span><span class="">store</span><span class="br0">}</span><span class="sy0">></span><span class=""></span>
12.  <span class=""></span><span class="sy0"><</span><span class="">App</span> <span class="sy0">/</span><span class="sy0">></span><span class=""></span>
13.  <span class=""></span><span class="sy0"><</span><span class="sy0">/</span><span class="">Provider</span><span class="sy0">></span><span class="sy0">,</span><span class=""></span>
14.  <span class=""></span><span class="co1">// The target element might be either root or app,</span><span class=""></span>
15.  <span class=""></span><span class="co1">// depending on your development environment</span><span class=""></span>
16.  <span class=""></span><span class="co1">// document.getElementById("app")</span><span class=""></span>
17.  <span class="">document</span><span class="sy0">.</span><span class="me0">getElementById</span><span class="br0">(</span><span class="st0">"root"</span><span class="br0">)</span><span class=""></span>
18.  <span class=""></span><span class="br0">)</span><span class="sy0">;</span>

<pre style="display: none;">import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./store/index";
import App from "./components/App.jsx";
// if you're in create-react-app import the files as:
// import store from "./js/store/index";
// import App from "./js/components/App.jsx";

render(
  <Provider store={store}>
    <App />
  </Provider>,
  // The target element might be either root or app,
  // depending on your development environment
  // document.getElementById("app")
  document.getElementById("root")
);</pre>

<div class="EnlighterJSToolbar"><a class="EnlighterJSInfoButton" title="EnlighterJS Syntax Highlighter"></a><a class="EnlighterJSRawButton" title="Toggle RAW Code"></a><a class="EnlighterJSWindowButton" title="Open Code in new Window"></a><span class="clear"></span></div>

</div>

You see? Provider wraps up your entire React application. Moreover it gets the store as a prop.

Now let’s create the **App** component since we’re requiring it. It’s nothing special: App should import a List component and render itself.

Create a directory for holding the components:

<pre class="EnlighterJSRAW" data-enlighter-language="shell" style="display: none;">mkdir -p src/js/components</pre>

<div class="EnlighterJSWrapper enlighterEnlighterJSWrapper">

1.  <span class="">mkdir -p src/js/components</span>

<pre style="display: none;">mkdir -p src/js/components</pre>

<div class="EnlighterJSToolbar"><a class="EnlighterJSInfoButton" title="EnlighterJS Syntax Highlighter"></a><a class="EnlighterJSRawButton" title="Toggle RAW Code"></a><a class="EnlighterJSWindowButton" title="Open Code in new Window"></a><span class="clear"></span></div>

</div>

and a new file named App.jsx inside src/js/components:

<pre class="EnlighterJSRAW" data-enlighter-language="js" style="display: none;">// src/js/components/App.jsx
import React from "react";
import List from "./List";

const App = () => (
  <div className="row mt-5">
    <div className="col-md-4 offset-md-1">
    <h2>Articles</h2>
      <List />
    </div>
  </div>
);

export default App;</pre>

<div class="EnlighterJSWrapper enlighterEnlighterJSWrapper">

1.  <span class="co1">// src/js/components/App.jsx</span><span class=""></span>
2.  <span class=""></span><span class="kw2">import</span> <span class="">React from</span> <span class="st0">"react"</span><span class="sy0">;</span><span class=""></span>
3.  <span class=""></span><span class="kw2">import</span> <span class="">List from</span> <span class="st0">"./List"</span><span class="sy0">;</span><span class=""></span>
4.  <span class=""></span>
5.  <span class=""></span><span class="kw2">const</span> <span class="">App</span> <span class="sy0">=</span> <span class=""></span> <span class="br0">(</span><span class="br0">)</span> <span class=""></span> <span class="sy0">=</span><span class="sy0">></span> <span class=""></span> <span class="br0">(</span><span class=""></span>
6.  <span class=""></span><span class="sy0"><</span><span class="">div className</span><span class="sy0">=</span><span class="st0">"row mt-5"</span><span class="sy0">></span><span class=""></span>
7.  <span class=""></span><span class="sy0"><</span><span class="">div className</span><span class="sy0">=</span><span class="st0">"col-md-4 offset-md-1"</span><span class="sy0">></span><span class=""></span>
8.  <span class=""></span><span class="sy0"><</span><span class="">h2</span><span class="sy0">></span><span class="">Articles</span><span class="sy0"><</span><span class="sy0">/</span><span class="">h2</span><span class="sy0">></span><span class=""></span>
9.  <span class=""></span><span class="sy0"><</span><span class="">List</span> <span class="sy0">/</span><span class="sy0">></span><span class=""></span>
10.  <span class=""></span><span class="sy0"><</span><span class="sy0">/</span><span class="">div</span><span class="sy0">></span><span class=""></span>
11.  <span class=""></span><span class="sy0"><</span><span class="sy0">/</span><span class="">div</span><span class="sy0">></span><span class=""></span>
12.  <span class=""></span><span class="br0">)</span><span class="sy0">;</span><span class=""></span>
13.  <span class=""></span>
14.  <span class=""></span><span class="kw2">export</span> <span class=""></span> <span class="kw2">default</span> <span class="">App</span><span class="sy0">;</span>

<pre style="display: none;">// src/js/components/App.jsx
import React from "react";
import List from "./List";

const App = () => (
  <div className="row mt-5">
    <div className="col-md-4 offset-md-1">
    <h2>Articles</h2>
      <List />
    </div>
  </div>
);

export default App;</pre>

<div class="EnlighterJSToolbar"><a class="EnlighterJSInfoButton" title="EnlighterJS Syntax Highlighter"></a><a class="EnlighterJSRawButton" title="Toggle RAW Code"></a><a class="EnlighterJSWindowButton" title="Open Code in new Window"></a><span class="clear"></span></div>

</div>

Save and close the file, then move on to creating **List**.

## <span class="ez-toc-section" id="React_Redux_tutorial_List_component_and_Redux_state">React Redux tutorial: List component and Redux state</span>

We have done nothing special so far.

But our new component, List, will interact with the Redux store.

A brief recap: the key for connecting a React component with Redux is [connect](https://github.com/reactjs/react-redux/blob/master/docs/api.md#connectmapstatetoprops-mapdispatchtoprops-mergeprops-options).

Connect takes at least one argument.

Since we want List to get a list of articles it’s a matter of **connecting state.articles with the component**. How? With **mapStateToProps**.

Create a new file named List.jsx inside src/js/components. It should look like the following:

<pre class="EnlighterJSRAW" data-enlighter-language="js" style="display: none;">// src/js/components/List.jsx

import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return { articles: state.articles };
};

const ConnectedList = ({ articles }) => (
  <ul className="list-group list-group-flush">
    {articles.map(el => (
      <li className="list-group-item" key={el.id}>
        {el.title}
      </li>
    ))}
  </ul>
);

const List = connect(mapStateToProps)(ConnectedList);

export default List;</pre>

<div class="EnlighterJSWrapper enlighterEnlighterJSWrapper">

1.  <span class="co1">// src/js/components/List.jsx</span><span class=""></span>
2.  <span class=""></span>
3.  <span class=""></span><span class="kw2">import</span> <span class="">React from</span> <span class="st0">"react"</span><span class="sy0">;</span><span class=""></span>
4.  <span class=""></span><span class="kw2">import</span> <span class=""></span> <span class="br0">{</span> <span class="">connect</span> <span class="br0">}</span> <span class="">from</span> <span class="st0">"react-redux"</span><span class="sy0">;</span><span class=""></span>
5.  <span class=""></span>
6.  <span class=""></span><span class="kw2">const</span> <span class="">mapStateToProps</span> <span class="sy0">=</span> <span class="">state</span> <span class="sy0">=</span><span class="sy0">></span> <span class=""></span> <span class="br0">{</span><span class=""></span>
7.  <span class=""></span><span class="kw1">return</span> <span class=""></span> <span class="br0">{</span> <span class="">articles</span><span class="sy0">:</span> <span class="">state</span><span class="sy0">.</span><span class="me0">articles</span> <span class=""></span> <span class="br0">}</span><span class="sy0">;</span><span class=""></span>
8.  <span class=""></span><span class="br0">}</span><span class="sy0">;</span><span class=""></span>
9.  <span class=""></span>
10.  <span class=""></span><span class="kw2">const</span> <span class="">ConnectedList</span> <span class="sy0">=</span> <span class=""></span> <span class="br0">(</span><span class="br0">{</span> <span class="">articles</span> <span class="br0">}</span><span class="br0">)</span> <span class=""></span> <span class="sy0">=</span><span class="sy0">></span> <span class=""></span> <span class="br0">(</span><span class=""></span>
11.  <span class=""></span><span class="sy0"><</span><span class="">ul className</span><span class="sy0">=</span><span class="st0">"list-group list-group-flush"</span><span class="sy0">></span><span class=""></span>
12.  <span class=""></span><span class="br0">{</span><span class="">articles</span><span class="sy0">.</span><span class="me0">map</span><span class="br0">(</span><span class="">el</span> <span class="sy0">=</span><span class="sy0">></span> <span class=""></span> <span class="br0">(</span><span class=""></span>
13.  <span class=""></span><span class="sy0"><</span><span class="">li className</span><span class="sy0">=</span><span class="st0">"list-group-item"</span> <span class="">key</span><span class="sy0">=</span><span class="br0">{</span><span class="">el</span><span class="sy0">.</span><span class="me0">id</span><span class="br0">}</span><span class="sy0">></span><span class=""></span>
14.  <span class=""></span><span class="br0">{</span><span class="">el</span><span class="sy0">.</span><span class="me0">title</span><span class="br0">}</span><span class=""></span>
15.  <span class=""></span><span class="sy0"><</span><span class="sy0">/</span><span class="">li</span><span class="sy0">></span><span class=""></span>
16.  <span class=""></span><span class="br0">)</span><span class="br0">)</span><span class="br0">}</span><span class=""></span>
17.  <span class=""></span><span class="sy0"><</span><span class="sy0">/</span><span class="">ul</span><span class="sy0">></span><span class=""></span>
18.  <span class=""></span><span class="br0">)</span><span class="sy0">;</span><span class=""></span>
19.  <span class=""></span>
20.  <span class=""></span><span class="kw2">const</span> <span class="">List</span> <span class="sy0">=</span> <span class="">connect</span><span class="br0">(</span><span class="">mapStateToProps</span><span class="br0">)</span><span class="br0">(</span><span class="">ConnectedList</span><span class="br0">)</span><span class="sy0">;</span><span class=""></span>
21.  <span class=""></span>
22.  <span class=""></span><span class="kw2">export</span> <span class=""></span> <span class="kw2">default</span> <span class="">List</span><span class="sy0">;</span>

<pre style="display: none;">// src/js/components/List.jsx

import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return { articles: state.articles };
};

const ConnectedList = ({ articles }) => (
  <ul className="list-group list-group-flush">
    {articles.map(el => (
      <li className="list-group-item" key={el.id}>
        {el.title}
      </li>
    ))}
  </ul>
);

const List = connect(mapStateToProps)(ConnectedList);

export default List;</pre>

<div class="EnlighterJSToolbar"><a class="EnlighterJSInfoButton" title="EnlighterJS Syntax Highlighter"></a><a class="EnlighterJSRawButton" title="Toggle RAW Code"></a><a class="EnlighterJSWindowButton" title="Open Code in new Window"></a><span class="clear"></span></div>

</div>

The List component receives the prop articles which is a copy of the articles array we saw in the Redux state. It comes from the reducer:

<pre class="EnlighterJSRAW" data-enlighter-language="js" style="display: none;">const initialState = {
  articles: []
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_ARTICLE) {
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload)
    });
  }
  return state;
}</pre>

<div class="EnlighterJSWrapper enlighterEnlighterJSWrapper">

1.  <span class="kw2">const</span> <span class="">initialState</span> <span class="sy0">=</span> <span class=""></span> <span class="br0">{</span><span class=""></span>
2.  <span class="">articles</span><span class="sy0">:</span> <span class=""></span> <span class="br0">[</span><span class="br0">]</span><span class=""></span>
3.  <span class=""></span><span class="br0">}</span><span class="sy0">;</span><span class=""></span>
4.  <span class=""></span>
5.  <span class=""></span><span class="kw2">function</span> <span class="">rootReducer</span><span class="br0">(</span><span class="">state</span> <span class="sy0">=</span> <span class="">initialState</span><span class="sy0">,</span> <span class="">action</span><span class="br0">)</span> <span class=""></span> <span class="br0">{</span><span class=""></span>
6.  <span class=""></span><span class="kw1">if</span> <span class=""></span> <span class="br0">(</span><span class="">action</span><span class="sy0">.</span><span class="me0">type</span> <span class=""></span> <span class="sy0">=</span><span class="sy0">=</span><span class="sy0">=</span> <span class="">ADD_ARTICLE</span><span class="br0">)</span> <span class=""></span> <span class="br0">{</span><span class=""></span>
7.  <span class=""></span><span class="kw1">return</span> <span class="">Object</span><span class="sy0">.</span><span class="me0">assign</span><span class="br0">(</span><span class="br0">{</span><span class="br0">}</span><span class="sy0">,</span> <span class="">state</span><span class="sy0">,</span> <span class=""></span> <span class="br0">{</span><span class=""></span>
8.  <span class="">articles</span><span class="sy0">:</span> <span class="">state</span><span class="sy0">.</span><span class="me0">articles</span><span class="sy0">.</span><span class="me0">concat</span><span class="br0">(</span><span class="">action</span><span class="sy0">.</span><span class="me0">payload</span><span class="br0">)</span><span class=""></span>
9.  <span class=""></span><span class="br0">}</span><span class="br0">)</span><span class="sy0">;</span><span class=""></span>
10.  <span class=""></span><span class="br0">}</span><span class=""></span>
11.  <span class=""></span><span class="kw1">return</span> <span class="">state</span><span class="sy0">;</span><span class=""></span>
12.  <span class=""></span><span class="br0">}</span>

<pre style="display: none;">const initialState = {
  articles: []
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_ARTICLE) {
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload)
    });
  }
  return state;
}</pre>

<div class="EnlighterJSToolbar"><a class="EnlighterJSInfoButton" title="EnlighterJS Syntax Highlighter"></a><a class="EnlighterJSRawButton" title="Toggle RAW Code"></a><a class="EnlighterJSWindowButton" title="Open Code in new Window"></a><span class="clear"></span></div>

</div>

**Always remeber: the state in redux comes from reducers.** Now,it’s a matter of using the prop inside JSX for generating a list of articles:

<pre class="EnlighterJSRAW" data-enlighter-language="js" style="display: none;">{articles.map(el => (
  <li className="list-group-item" key={el.id}>
    {el.title}
  </li>
))}</pre>

<div class="EnlighterJSWrapper enlighterEnlighterJSWrapper">

1.  <span class="br0">{</span><span class="">articles</span><span class="sy0">.</span><span class="me0">map</span><span class="br0">(</span><span class="">el</span> <span class="sy0">=</span><span class="sy0">></span> <span class=""></span> <span class="br0">(</span><span class=""></span>
2.  <span class=""></span><span class="sy0"><</span><span class="">li className</span><span class="sy0">=</span><span class="st0">"list-group-item"</span> <span class="">key</span><span class="sy0">=</span><span class="br0">{</span><span class="">el</span><span class="sy0">.</span><span class="me0">id</span><span class="br0">}</span><span class="sy0">></span><span class=""></span>
3.  <span class=""></span><span class="br0">{</span><span class="">el</span><span class="sy0">.</span><span class="me0">title</span><span class="br0">}</span><span class=""></span>
4.  <span class=""></span><span class="sy0"><</span><span class="sy0">/</span><span class="">li</span><span class="sy0">></span><span class=""></span>
5.  <span class=""></span><span class="br0">)</span><span class="br0">)</span><span class="br0">}</span>

<pre style="display: none;">{articles.map(el => (
  <li className="list-group-item" key={el.id}>
    {el.title}
  </li>
))}</pre>

<div class="EnlighterJSToolbar"><a class="EnlighterJSInfoButton" title="EnlighterJS Syntax Highlighter"></a><a class="EnlighterJSRawButton" title="Toggle RAW Code"></a><a class="EnlighterJSWindowButton" title="Open Code in new Window"></a><span class="clear"></span></div>

</div>

**React protip**: take the habit of validating props with PropTypes or even better, use TypeScript

Finally the component gets exported as List. List is the result of connecting the stateless component ConnectedList with the Redux store.

Still confused? I was too. Understanding how **connect** works will take some time. Fear not, the road to learn Redux is paved with “ah-ha” moments.

I suggest taking a break for exploring both **connect** and **mapStateToProps.**

Once you’re confident about them head over the next section!

## <span class="ez-toc-section" id="React_Redux_tutorial_Form_component_and_Redux_actions">React Redux tutorial: Form component and Redux actions</span>

The Form component we’re going to create is a bit more complex than List. It’s a form for adding new items to our application.

Plus it is a **stateful component**.

_A stateful component in React is a component carrying its own local state._

A stateful component? “Valentino, we’re talking about Redux for managing the state! Why on earth would you give Form its own local state??”

**Even when using Redux it is totally fine to have stateful components**.

Not every piece of the application’s state should go inside Redux.

In this example I don’t want any other component to be aware of the Form local state.

The form component contains some logic for updating the local state upon a form submission.

It receives a Redux action as well. This way it can update the global state by **dispatching the addArticle action**.

Create a new file named Form.jsx inside src/js/components. It should look like the following:

<pre class="EnlighterJSRAW" data-enlighter-language="js" style="display: none;">// src/js/components/Form.jsx
import React, { Component } from "react";
import { connect } from "react-redux";
import uuidv1 from "uuid";
import { addArticle } from "../actions/index";

function mapDispatchToProps(dispatch) {
  return {
    addArticle: article => dispatch(addArticle(article))
  };
}

class ConnectedForm extends Component {
  constructor() {
    super();

    this.state = {
      title: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { title } = this.state;
    const id = uuidv1();
    this.props.addArticle({ title, id });
    this.setState({ title: "" });
  }

  render() {
    const { title } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={this.handleChange}
          />
        </div>
        <button type="submit" className="btn btn-success btn-lg">
          SAVE
        </button>
      </form>
    );
  }
}

const Form = connect(null, mapDispatchToProps)(ConnectedForm);

export default Form;</pre>

<div class="EnlighterJSWrapper enlighterEnlighterJSWrapper">

1.  <span class="co1">// src/js/components/Form.jsx</span><span class=""></span>
2.  <span class=""></span><span class="kw2">import</span> <span class="">React</span><span class="sy0">,</span> <span class=""></span> <span class="br0">{</span> <span class="">Component</span> <span class="br0">}</span> <span class="">from</span> <span class="st0">"react"</span><span class="sy0">;</span><span class=""></span>
3.  <span class=""></span><span class="kw2">import</span> <span class=""></span> <span class="br0">{</span> <span class="">connect</span> <span class="br0">}</span> <span class="">from</span> <span class="st0">"react-redux"</span><span class="sy0">;</span><span class=""></span>
4.  <span class=""></span><span class="kw2">import</span> <span class="">uuidv1 from</span> <span class="st0">"uuid"</span><span class="sy0">;</span><span class=""></span>
5.  <span class=""></span><span class="kw2">import</span> <span class=""></span> <span class="br0">{</span> <span class="">addArticle</span> <span class="br0">}</span> <span class="">from</span> <span class="st0">"../actions/index"</span><span class="sy0">;</span><span class=""></span>
6.  <span class=""></span>
7.  <span class=""></span><span class="kw2">function</span> <span class="">mapDispatchToProps</span><span class="br0">(</span><span class="">dispatch</span><span class="br0">)</span> <span class=""></span> <span class="br0">{</span><span class=""></span>
8.  <span class=""></span><span class="kw1">return</span> <span class=""></span> <span class="br0">{</span><span class=""></span>
9.  <span class="">addArticle</span><span class="sy0">:</span> <span class="">article</span> <span class="sy0">=</span><span class="sy0">></span> <span class="">dispatch</span><span class="br0">(</span><span class="">addArticle</span><span class="br0">(</span><span class="">article</span><span class="br0">)</span><span class="br0">)</span><span class=""></span>
10.  <span class=""></span><span class="br0">}</span><span class="sy0">;</span><span class=""></span>
11.  <span class=""></span><span class="br0">}</span><span class=""></span>
12.  <span class=""></span>
13.  <span class=""></span><span class="kw2">class</span> <span class="">ConnectedForm</span> <span class="kw2">extends</span> <span class="">Component</span> <span class="br0">{</span><span class=""></span>
14.  <span class="">constructor</span><span class="br0">(</span><span class="br0">)</span> <span class=""></span> <span class="br0">{</span><span class=""></span>
15.  <span class=""></span><span class="kw2">super</span><span class="br0">(</span><span class="br0">)</span><span class="sy0">;</span><span class=""></span>
16.  <span class=""></span>
17.  <span class=""></span><span class="kw1">this</span><span class="sy0">.</span><span class="me0">state</span> <span class=""></span> <span class="sy0">=</span> <span class=""></span> <span class="br0">{</span><span class=""></span>
18.  <span class="">title</span><span class="sy0">:</span> <span class=""></span> <span class="st0">""</span><span class=""></span>
19.  <span class=""></span><span class="br0">}</span><span class="sy0">;</span><span class=""></span>
20.  <span class=""></span>
21.  <span class=""></span><span class="kw1">this</span><span class="sy0">.</span><span class="me0">handleChange</span> <span class=""></span> <span class="sy0">=</span> <span class=""></span> <span class="kw1">this</span><span class="sy0">.</span><span class="me0">handleChange</span><span class="sy0">.</span><span class="me0">bind</span><span class="br0">(</span><span class="kw1">this</span><span class="br0">)</span><span class="sy0">;</span><span class=""></span>
22.  <span class=""></span><span class="kw1">this</span><span class="sy0">.</span><span class="me0">handleSubmit</span> <span class=""></span> <span class="sy0">=</span> <span class=""></span> <span class="kw1">this</span><span class="sy0">.</span><span class="me0">handleSubmit</span><span class="sy0">.</span><span class="me0">bind</span><span class="br0">(</span><span class="kw1">this</span><span class="br0">)</span><span class="sy0">;</span><span class=""></span>
23.  <span class=""></span><span class="br0">}</span><span class=""></span>
24.  <span class=""></span>
25.  <span class="">handleChange</span><span class="br0">(</span><span class="">event</span><span class="br0">)</span> <span class=""></span> <span class="br0">{</span><span class=""></span>
26.  <span class=""></span><span class="kw1">this</span><span class="sy0">.</span><span class="me0">setState</span><span class="br0">(</span><span class="br0">{</span> <span class=""></span> <span class="br0">[</span><span class="">event</span><span class="sy0">.</span><span class="me0">target</span><span class="sy0">.</span><span class="me0">id</span><span class="br0">]</span><span class="sy0">:</span> <span class="">event</span><span class="sy0">.</span><span class="me0">target</span><span class="sy0">.</span><span class="me0">value</span> <span class=""></span> <span class="br0">}</span><span class="br0">)</span><span class="sy0">;</span><span class=""></span>
27.  <span class=""></span><span class="br0">}</span><span class=""></span>
28.  <span class=""></span>
29.  <span class="">handleSubmit</span><span class="br0">(</span><span class="">event</span><span class="br0">)</span> <span class=""></span> <span class="br0">{</span><span class=""></span>
30.  <span class="">event</span><span class="sy0">.</span><span class="me0">preventDefault</span><span class="br0">(</span><span class="br0">)</span><span class="sy0">;</span><span class=""></span>
31.  <span class=""></span><span class="kw2">const</span> <span class=""></span> <span class="br0">{</span> <span class="">title</span> <span class="br0">}</span> <span class=""></span> <span class="sy0">=</span> <span class=""></span> <span class="kw1">this</span><span class="sy0">.</span><span class="me0">state</span><span class="sy0">;</span><span class=""></span>
32.  <span class=""></span><span class="kw2">const</span> <span class="">id</span> <span class="sy0">=</span> <span class="">uuidv1</span><span class="br0">(</span><span class="br0">)</span><span class="sy0">;</span><span class=""></span>
33.  <span class=""></span><span class="kw1">this</span><span class="sy0">.</span><span class="me0">props</span><span class="sy0">.</span><span class="me0">addArticle</span><span class="br0">(</span><span class="br0">{</span> <span class="">title</span><span class="sy0">,</span> <span class="">id</span> <span class="br0">}</span><span class="br0">)</span><span class="sy0">;</span><span class=""></span>
34.  <span class=""></span><span class="kw1">this</span><span class="sy0">.</span><span class="me0">setState</span><span class="br0">(</span><span class="br0">{</span> <span class="">title</span><span class="sy0">:</span> <span class=""></span> <span class="st0">""</span> <span class=""></span> <span class="br0">}</span><span class="br0">)</span><span class="sy0">;</span><span class=""></span>
35.  <span class=""></span><span class="br0">}</span><span class=""></span>
36.  <span class=""></span>
37.  <span class="">render</span><span class="br0">(</span><span class="br0">)</span> <span class=""></span> <span class="br0">{</span><span class=""></span>
38.  <span class=""></span><span class="kw2">const</span> <span class=""></span> <span class="br0">{</span> <span class="">title</span> <span class="br0">}</span> <span class=""></span> <span class="sy0">=</span> <span class=""></span> <span class="kw1">this</span><span class="sy0">.</span><span class="me0">state</span><span class="sy0">;</span><span class=""></span>
39.  <span class=""></span><span class="kw1">return</span> <span class=""></span> <span class="br0">(</span><span class=""></span>
40.  <span class=""></span><span class="sy0"><</span><span class="">form onSubmit</span><span class="sy0">=</span><span class="br0">{</span><span class="kw1">this</span><span class="sy0">.</span><span class="me0">handleSubmit</span><span class="br0">}</span><span class="sy0">></span><span class=""></span>
41.  <span class=""></span><span class="sy0"><</span><span class="">div className</span><span class="sy0">=</span><span class="st0">"form-group"</span><span class="sy0">></span><span class=""></span>
42.  <span class=""></span><span class="sy0"><</span><span class="">label htmlFor</span><span class="sy0">=</span><span class="st0">"title"</span><span class="sy0">></span><span class="">Title</span><span class="sy0"><</span><span class="sy0">/</span><span class="">label</span><span class="sy0">></span><span class=""></span>
43.  <span class=""></span><span class="sy0"><</span><span class="">input</span>
44.  <span class="">type</span><span class="sy0">=</span><span class="st0">"text"</span><span class=""></span>
45.  <span class="">className</span><span class="sy0">=</span><span class="st0">"form-control"</span><span class=""></span>
46.  <span class="">id</span><span class="sy0">=</span><span class="st0">"title"</span><span class=""></span>
47.  <span class="">value</span><span class="sy0">=</span><span class="br0">{</span><span class="">title</span><span class="br0">}</span><span class=""></span>
48.  <span class="">onChange</span><span class="sy0">=</span><span class="br0">{</span><span class="kw1">this</span><span class="sy0">.</span><span class="me0">handleChange</span><span class="br0">}</span><span class=""></span>
49.  <span class=""></span><span class="sy0">/</span><span class="sy0">></span><span class=""></span>
50.  <span class=""></span><span class="sy0"><</span><span class="sy0">/</span><span class="">div</span><span class="sy0">></span><span class=""></span>
51.  <span class=""></span><span class="sy0"><</span><span class="">button type</span><span class="sy0">=</span><span class="st0">"submit"</span> <span class="">className</span><span class="sy0">=</span><span class="st0">"btn btn-success btn-lg"</span><span class="sy0">></span><span class=""></span>
52.  <span class="">SAVE</span>
53.  <span class=""></span><span class="sy0"><</span><span class="sy0">/</span><span class="">button</span><span class="sy0">></span><span class=""></span>
54.  <span class=""></span><span class="sy0"><</span><span class="sy0">/</span><span class="">form</span><span class="sy0">></span><span class=""></span>
55.  <span class=""></span><span class="br0">)</span><span class="sy0">;</span><span class=""></span>
56.  <span class=""></span><span class="br0">}</span><span class=""></span>
57.  <span class=""></span><span class="br0">}</span><span class=""></span>
58.  <span class=""></span>
59.  <span class=""></span><span class="kw2">const</span> <span class="">Form</span> <span class="sy0">=</span> <span class="">connect</span><span class="br0">(</span><span class="kw2">null</span><span class="sy0">,</span> <span class="">mapDispatchToProps</span><span class="br0">)</span><span class="br0">(</span><span class="">ConnectedForm</span><span class="br0">)</span><span class="sy0">;</span><span class=""></span>
60.  <span class=""></span>
61.  <span class=""></span><span class="kw2">export</span> <span class=""></span> <span class="kw2">default</span> <span class="">Form</span><span class="sy0">;</span>

<pre style="display: none;">// src/js/components/Form.jsx
import React, { Component } from "react";
import { connect } from "react-redux";
import uuidv1 from "uuid";
import { addArticle } from "../actions/index";

function mapDispatchToProps(dispatch) {
  return {
    addArticle: article => dispatch(addArticle(article))
  };
}

class ConnectedForm extends Component {
  constructor() {
    super();

    this.state = {
      title: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { title } = this.state;
    const id = uuidv1();
    this.props.addArticle({ title, id });
    this.setState({ title: "" });
  }

  render() {
    const { title } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={this.handleChange}
          />
        </div>
        <button type="submit" className="btn btn-success btn-lg">
          SAVE
        </button>
      </form>
    );
  }
}

const Form = connect(null, mapDispatchToProps)(ConnectedForm);

export default Form;</pre>

<div class="EnlighterJSToolbar"><a class="EnlighterJSInfoButton" title="EnlighterJS Syntax Highlighter"></a><a class="EnlighterJSRawButton" title="Toggle RAW Code"></a><a class="EnlighterJSWindowButton" title="Open Code in new Window"></a><span class="clear"></span></div>

</div>

What can I say about the component? Besides **mapDispatchToProps** and **connect** it’s standard React stuff.

**mapDispatchToProps connects Redux actions to React props**. This way a connected component is able to dispatch actions.

You can see how the action gets dispatched in the handleSubmit method:

<pre class="EnlighterJSRAW" data-enlighter-language="js" style="display: none;">// ...
  handleSubmit(event) {
    event.preventDefault();
    const { title } = this.state;
    const id = uuidv1();
    this.props.addArticle({ title, id }); // Relevant Redux part!!
// ...
  }
// ...</pre>

<div class="EnlighterJSWrapper enlighterEnlighterJSWrapper">

1.  <span class="co1">// ...</span><span class=""></span>
2.  <span class="">handleSubmit</span><span class="br0">(</span><span class="">event</span><span class="br0">)</span> <span class=""></span> <span class="br0">{</span><span class=""></span>
3.  <span class="">event</span><span class="sy0">.</span><span class="me0">preventDefault</span><span class="br0">(</span><span class="br0">)</span><span class="sy0">;</span><span class=""></span>
4.  <span class=""></span><span class="kw2">const</span> <span class=""></span> <span class="br0">{</span> <span class="">title</span> <span class="br0">}</span> <span class=""></span> <span class="sy0">=</span> <span class=""></span> <span class="kw1">this</span><span class="sy0">.</span><span class="me0">state</span><span class="sy0">;</span><span class=""></span>
5.  <span class=""></span><span class="kw2">const</span> <span class="">id</span> <span class="sy0">=</span> <span class="">uuidv1</span><span class="br0">(</span><span class="br0">)</span><span class="sy0">;</span><span class=""></span>
6.  <span class=""></span><span class="kw1">this</span><span class="sy0">.</span><span class="me0">props</span><span class="sy0">.</span><span class="me0">addArticle</span><span class="br0">(</span><span class="br0">{</span> <span class="">title</span><span class="sy0">,</span> <span class="">id</span> <span class="br0">}</span><span class="br0">)</span><span class="sy0">;</span> <span class="co1">// Relevant Redux part!!</span><span class="co1"></span>
7.  <span class="co1">// ...</span><span class=""></span>
8.  <span class=""></span><span class="br0">}</span><span class="co1"></span>
9.  <span class="co1">// ...</span>

<pre style="display: none;">// ...
  handleSubmit(event) {
    event.preventDefault();
    const { title } = this.state;
    const id = uuidv1();
    this.props.addArticle({ title, id }); // Relevant Redux part!!
// ...
  }
// ...</pre>

<div class="EnlighterJSToolbar"><a class="EnlighterJSInfoButton" title="EnlighterJS Syntax Highlighter"></a><a class="EnlighterJSRawButton" title="Toggle RAW Code"></a><a class="EnlighterJSWindowButton" title="Open Code in new Window"></a><span class="clear"></span></div>

</div>

Finally the component gets exported as Form. Form is the result of connecting ConnectedForm with the Redux store.

Side note: the first argument for connect must be null when mapStateToProps is absent like in the Form example. Otherwise you’ll get TypeError: dispatch is not a function.

Our components are all set!

Update App to include the Form component:

<pre class="EnlighterJSRAW" data-enlighter-language="js" style="display: none;">import React from "react";
import List from "./List.jsx";
import Form from "./Form.jsx";

const App = () => (
  <div className="row mt-5">
    <div className="col-md-4 offset-md-1">
      <h2>Articles</h2>
      <List />
    </div>
    <div className="col-md-4 offset-md-1">
      <h2>Add a new article</h2>
      <Form />
    </div>
  </div>
);

export default App;</pre>

<div class="EnlighterJSWrapper enlighterEnlighterJSWrapper">

1.  <span class="kw2">import</span> <span class="">React from</span> <span class="st0">"react"</span><span class="sy0">;</span><span class=""></span>
2.  <span class=""></span><span class="kw2">import</span> <span class="">List from</span> <span class="st0">"./List.jsx"</span><span class="sy0">;</span><span class=""></span>
3.  <span class=""></span><span class="kw2">import</span> <span class="">Form from</span> <span class="st0">"./Form.jsx"</span><span class="sy0">;</span><span class=""></span>
4.  <span class=""></span>
5.  <span class=""></span><span class="kw2">const</span> <span class="">App</span> <span class="sy0">=</span> <span class=""></span> <span class="br0">(</span><span class="br0">)</span> <span class=""></span> <span class="sy0">=</span><span class="sy0">></span> <span class=""></span> <span class="br0">(</span><span class=""></span>
6.  <span class=""></span><span class="sy0"><</span><span class="">div className</span><span class="sy0">=</span><span class="st0">"row mt-5"</span><span class="sy0">></span><span class=""></span>
7.  <span class=""></span><span class="sy0"><</span><span class="">div className</span><span class="sy0">=</span><span class="st0">"col-md-4 offset-md-1"</span><span class="sy0">></span><span class=""></span>
8.  <span class=""></span><span class="sy0"><</span><span class="">h2</span><span class="sy0">></span><span class="">Articles</span><span class="sy0"><</span><span class="sy0">/</span><span class="">h2</span><span class="sy0">></span><span class=""></span>
9.  <span class=""></span><span class="sy0"><</span><span class="">List</span> <span class="sy0">/</span><span class="sy0">></span><span class=""></span>
10.  <span class=""></span><span class="sy0"><</span><span class="sy0">/</span><span class="">div</span><span class="sy0">></span><span class=""></span>
11.  <span class=""></span><span class="sy0"><</span><span class="">div className</span><span class="sy0">=</span><span class="st0">"col-md-4 offset-md-1"</span><span class="sy0">></span><span class=""></span>
12.  <span class=""></span><span class="sy0"><</span><span class="">h2</span><span class="sy0">></span><span class="">Add a</span> <span class="kw2">new</span> <span class="">article</span><span class="sy0"><</span><span class="sy0">/</span><span class="">h2</span><span class="sy0">></span><span class=""></span>
13.  <span class=""></span><span class="sy0"><</span><span class="">Form</span> <span class="sy0">/</span><span class="sy0">></span><span class=""></span>
14.  <span class=""></span><span class="sy0"><</span><span class="sy0">/</span><span class="">div</span><span class="sy0">></span><span class=""></span>
15.  <span class=""></span><span class="sy0"><</span><span class="sy0">/</span><span class="">div</span><span class="sy0">></span><span class=""></span>
16.  <span class=""></span><span class="br0">)</span><span class="sy0">;</span><span class=""></span>
17.  <span class=""></span>
18.  <span class=""></span><span class="kw2">export</span> <span class=""></span> <span class="kw2">default</span> <span class="">App</span><span class="sy0">;</span>

<pre style="display: none;">import React from "react";
import List from "./List.jsx";
import Form from "./Form.jsx";

const App = () => (
  <div className="row mt-5">
    <div className="col-md-4 offset-md-1">
      <h2>Articles</h2>
      <List />
    </div>
    <div className="col-md-4 offset-md-1">
      <h2>Add a new article</h2>
      <Form />
    </div>
  </div>
);

export default App;</pre>

<div class="EnlighterJSToolbar"><a class="EnlighterJSInfoButton" title="EnlighterJS Syntax Highlighter"></a><a class="EnlighterJSRawButton" title="Toggle RAW Code"></a><a class="EnlighterJSWindowButton" title="Open Code in new Window"></a><span class="clear"></span></div>

</div>

Install uuid with:

<pre class="EnlighterJSRAW" data-enlighter-language="shell" style="display: none;">npm i uuid --save-dev</pre>

<div class="EnlighterJSWrapper enlighterEnlighterJSWrapper">

1.  <span class="">npm i uuid --save-dev</span>

<pre style="display: none;">npm i uuid --save-dev</pre>

<div class="EnlighterJSToolbar"><a class="EnlighterJSInfoButton" title="EnlighterJS Syntax Highlighter"></a><a class="EnlighterJSRawButton" title="Toggle RAW Code"></a><a class="EnlighterJSWindowButton" title="Open Code in new Window"></a><span class="clear"></span></div>

</div>

Now run webpack (or Parcel) with:

<pre class="EnlighterJSRAW" data-enlighter-language="shell" style="display: none;">npm start</pre>

<div class="EnlighterJSWrapper enlighterEnlighterJSWrapper">

1.  <span class="">npm start</span>

<pre style="display: none;">npm start</pre>

<div class="EnlighterJSToolbar"><a class="EnlighterJSInfoButton" title="EnlighterJS Syntax Highlighter"></a><a class="EnlighterJSRawButton" title="Toggle RAW Code"></a><a class="EnlighterJSWindowButton" title="Open Code in new Window"></a><span class="clear"></span></div>

</div>

and head over to http://localhost:8080

You should see the following working POC:

![React Redux tutorial demo. Nothing fancy but still useful for showing React and Redux at work](https://www.valentinog.com/blog/wp-content/uploads/2017/12/react-redux-demo.png)

Nothing fancy but still useful for showing React and Redux at work!

The **List component on the left is connected to the Redux store**. It will re-render whenever you add a new item.

![React Redux demo ](https://www.valentinog.com/blog/wp-content/uploads/2017/12/react-redux-tutorial-demo-gif.gif)

Psst .. If you don’t see anything on the browser make sure that document.getElementById(“app”) in src/js/index.js matches a real element inside the page:

<pre class="EnlighterJSRAW" data-enlighter-language="html" style="display: none;"><!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" >
    <title>How to set up React, Webpack, and Babel</title>
</head>

<body>
    <div class="container">
        <div id="root">
        </div>
    </div>
</body>

</html></pre>

<div class="EnlighterJSWrapper enlighterEnlighterJSWrapper">

1.  <span class="st2"><!DOCTYPE html></span><span class=""></span>
2.  <span class=""></span><span class="kw1"><html</span> <span class=""></span> <span class="kw2">lang</span><span class="kw1">=</span><span class="st0">"en"</span><span class="kw1">></span><span class=""></span>
3.  <span class=""></span>
4.  <span class=""></span><span class="kw1"><head</span><span class="kw1">></span><span class=""></span>
5.  <span class=""></span><span class="kw1"><meta</span> <span class=""></span> <span class="kw2">charset</span><span class="kw1">=</span><span class="st0">"utf-8"</span><span class="kw1">></span><span class=""></span>
6.  <span class=""></span><span class="kw1"><link</span> <span class=""></span> <span class="kw2">rel</span><span class="kw1">=</span><span class="st0">"stylesheet"</span> <span class=""></span> <span class="kw2">href</span><span class="kw1">=</span><span class="st0">"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css"</span> <span class=""></span> <span class="kw1">></span><span class=""></span>
7.  <span class=""></span><span class="kw1"><title</span><span class="kw1">></span><span class="">How to set up React, Webpack, and Babel</span><span class="kw1"></title></span><span class=""></span>
8.  <span class=""></span><span class="kw1"></head></span><span class=""></span>
9.  <span class=""></span>
10.  <span class=""></span><span class="kw1"><body</span><span class="kw1">></span><span class=""></span>
11.  <span class=""></span><span class="kw1"><div</span> <span class=""></span> <span class="kw2">class</span><span class="kw1">=</span><span class="st0">"container"</span><span class="kw1">></span><span class=""></span>
12.  <span class=""></span><span class="kw1"><div</span> <span class=""></span> <span class="kw2">id</span><span class="kw1">=</span><span class="st0">"root"</span><span class="kw1">></span><span class=""></span>
13.  <span class=""></span><span class="kw1"></div></span><span class=""></span>
14.  <span class=""></span><span class="kw1"></div></span><span class=""></span>
15.  <span class=""></span><span class="kw1"></body></span><span class=""></span>
16.  <span class=""></span>
17.  <span class=""></span><span class="kw1"></html></span>

<pre style="display: none;"><!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" >
    <title>How to set up React, Webpack, and Babel</title>
</head>

<body>
    <div class="container">
        <div id="root">
        </div>
    </div>
</body>

</html></pre>

<div class="EnlighterJSToolbar"><a class="EnlighterJSInfoButton" title="EnlighterJS Syntax Highlighter"></a><a class="EnlighterJSRawButton" title="Toggle RAW Code"></a><a class="EnlighterJSWindowButton" title="Open Code in new Window"></a><span class="clear"></span></div>

</div>

(Don’t forget to include Bootstrap too). Whoaaa! You did it! But we’re not done yet! In the next section we’ll look at Redux middlewares. Hold tight!

<style type="text/css">.saboxplugin-wrap{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;-ms-box-sizing:border-box;box-sizing:border-box;border:1px solid #eee;width:100%;clear:both;display:block;overflow:hidden;word-wrap:break-word;position:relative}.saboxplugin-wrap .saboxplugin-gravatar{float:left;padding:20px}.saboxplugin-wrap .saboxplugin-gravatar img{max-width:100px;height:auto;border-radius:0;}.saboxplugin-wrap .saboxplugin-authorname{font-size:18px;line-height:1;margin:20px 0 0 20px;display:block}.saboxplugin-wrap .saboxplugin-authorname a{text-decoration:none}.saboxplugin-wrap .saboxplugin-authorname a:focus{outline:0}.saboxplugin-wrap .saboxplugin-desc{display:block;margin:5px 20px}.saboxplugin-wrap .saboxplugin-desc a{text-decoration:underline}.saboxplugin-wrap .saboxplugin-desc p{margin:5px 0 12px}.saboxplugin-wrap .saboxplugin-web{margin:0 20px 15px;text-align:left}.saboxplugin-wrap .sab-web-position{text-align:right}.saboxplugin-wrap .saboxplugin-web a{color:#ccc;text-decoration:none}.saboxplugin-wrap .saboxplugin-socials{position:relative;display:block;background:#fcfcfc;padding:5px;border-top:1px solid #eee}.saboxplugin-wrap .saboxplugin-socials a svg{width:20px;height:20px}.saboxplugin-wrap .saboxplugin-socials a svg .st2{fill:#fff}.saboxplugin-wrap .saboxplugin-socials a svg .st1{fill:rgba(0,0,0,.3)}.saboxplugin-wrap .saboxplugin-socials a:hover{opacity:.8;-webkit-transition:opacity .4s;-moz-transition:opacity .4s;-o-transition:opacity .4s;transition:opacity .4s;box-shadow:none!important;-webkit-box-shadow:none!important}.saboxplugin-wrap .saboxplugin-socials .saboxplugin-icon-color{box-shadow:none;padding:0;border:0;-webkit-transition:opacity .4s;-moz-transition:opacity .4s;-o-transition:opacity .4s;transition:opacity .4s;display:inline-block;color:#fff;font-size:0;text-decoration:inherit;margin:5px;-webkit-border-radius:0;-moz-border-radius:0;-ms-border-radius:0;-o-border-radius:0;border-radius:0;overflow:hidden}.saboxplugin-wrap .saboxplugin-socials .saboxplugin-icon-grey{text-decoration:inherit;box-shadow:none;position:relative;display:-moz-inline-stack;display:inline-block;vertical-align:middle;zoom:1;margin:10px 5px;color:#444}.clearfix:after,.clearfix:before{content:' ';display:table;line-height:0;clear:both}.ie7 .clearfix{zoom:1}.saboxplugin-socials.sabox-colored .saboxplugin-icon-color .sab-twitch{border-color:#38245c}.saboxplugin-socials.sabox-colored .saboxplugin-icon-color .sab-addthis{border-color:#e91c00}.saboxplugin-socials.sabox-colored .saboxplugin-icon-color .sab-behance{border-color:#003eb0}.saboxplugin-socials.sabox-colored .saboxplugin-icon-color .sab-delicious{border-color:#06c}.saboxplugin-socials.sabox-colored .saboxplugin-icon-color .sab-deviantart{border-color:#036824}.saboxplugin-socials.sabox-colored .saboxplugin-icon-color .sab-digg{border-color:#00327c}.saboxplugin-socials.sabox-colored .saboxplugin-icon-color .sab-dribbble{border-color:#ba1655}.saboxplugin-socials.sabox-colored .saboxplugin-icon-color .sab-facebook{border-color:#1e2e4f}.saboxplugin-socials.sabox-colored .saboxplugin-icon-color .sab-flickr{border-color:#003576}.saboxplugin-socials.sabox-colored .saboxplugin-icon-color .sab-github{border-color:#264874}.saboxplugin-socials.sabox-colored .saboxplugin-icon-color .sab-google{border-color:#0b51c5}.saboxplugin-socials.sabox-colored .saboxplugin-icon-color .sab-googleplus{border-color:#96271a}.saboxplugin-socials.sabox-colored .saboxplugin-icon-color .sab-html5{border-color:#902e13}.saboxplugin-socials.sabox-colored .saboxplugin-icon-color .sab-instagram{border-color:#1630aa}.saboxplugin-socials.sabox-colored .saboxplugin-icon-color .sab-linkedin{border-color:#00344f}.saboxplugin-socials.sabox-colored .saboxplugin-icon-color .sab-pinterest{border-color:#5b040e}.saboxplugin-socials.sabox-colored .saboxplugin-icon-color .sab-reddit{border-color:#992900}.saboxplugin-socials.sabox-colored .saboxplugin-icon-color .sab-rss{border-color:#a43b0a}.saboxplugin-socials.sabox-colored .saboxplugin-icon-color .sab-sharethis{border-color:#5d8420}.saboxplugin-socials.sabox-colored .saboxplugin-icon-color .sab-skype{border-color:#00658a}.saboxplugin-socials.sabox-colored .saboxplugin-icon-color .sab-soundcloud{border-color:#995200}.saboxplugin-socials.sabox-colored .saboxplugin-icon-color .sab-spotify{border-color:#0f612c}.saboxplugin-socials.sabox-colored .saboxplugin-icon-color .sab-stackoverflow{border-color:#a95009}.saboxplugin-socials.sabox-colored .saboxplugin-icon-color .sab-steam{border-color:#006388}.saboxplugin-socials.sabox-colored .saboxplugin-icon-color .sab-user_email{border-color:#b84e05}.saboxplugin-socials.sabox-colored .saboxplugin-icon-color .sab-stumbleUpon{border-color:#9b280e}.saboxplugin-socials.sabox-colored .saboxplugin-icon-color .sab-tumblr{border-color:#10151b}.saboxplugin-socials.sabox-colored .saboxplugin-icon-color .sab-twitter{border-color:#0967a0}.saboxplugin-socials.sabox-colored .saboxplugin-icon-color .sab-vimeo{border-color:#0d7091}.saboxplugin-socials.sabox-colored .saboxplugin-icon-color .sab-windows{border-color:#003f71}.saboxplugin-socials.sabox-colored .saboxplugin-icon-color .sab-wordpress{border-color:#0f3647}.saboxplugin-socials.sabox-colored .saboxplugin-icon-color .sab-yahoo{border-color:#14002d}.saboxplugin-socials.sabox-colored .saboxplugin-icon-color .sab-youtube{border-color:#900}.saboxplugin-socials.sabox-colored .saboxplugin-icon-color .sab-xing{border-color:#000202}.saboxplugin-socials.sabox-colored .saboxplugin-icon-color .sab-mixcloud{border-color:#2475a0}.saboxplugin-socials.sabox-colored .saboxplugin-icon-color .sab-vk{border-color:#243549}.saboxplugin-socials.sabox-colored .saboxplugin-icon-color .sab-medium{border-color:#00452c}.saboxplugin-socials.sabox-colored .saboxplugin-icon-color .sab-quora{border-color:#420e00}.saboxplugin-socials.sabox-colored .saboxplugin-icon-color .sab-meetup{border-color:#9b181c}.saboxplugin-socials.sabox-colored .saboxplugin-icon-color .sab-goodreads{border-color:#000}.saboxplugin-socials.sabox-colored .saboxplugin-icon-color .sab-snapchat{border-color:#999700}.saboxplugin-socials.sabox-colored .saboxplugin-icon-color .sab-500px{border-color:#00557f}.saboxplugin-socials.sabox-colored .saboxplugin-icon-color .sab-mastodont{border-color:#185886}.sabox-plus-item{margin-bottom:20px}@media screen and (max-width:480px){.saboxplugin-wrap{text-align:center}.saboxplugin-wrap .saboxplugin-gravatar{float:none;padding:20px 0;text-align:center;margin:0 auto;display:block}.saboxplugin-wrap .saboxplugin-gravatar img{float:none;display:inline-block;display:-moz-inline-stack;vertical-align:middle;zoom:1}.saboxplugin-wrap .saboxplugin-desc{margin:0 10px 20px;text-align:center}.saboxplugin-wrap .saboxplugin-authorname{text-align:center;margin:10px 0 20px}}body .saboxplugin-authorname a,body .saboxplugin-authorname a:hover{box-shadow:none;-webkit-box-shadow:none}a.sab-profile-edit{font-size:16px!important;line-height:1!important}.sab-edit-settings a,a.sab-profile-edit{color:#0073aa!important;box-shadow:none!important;-webkit-box-shadow:none!important}.sab-edit-settings{margin-right:15px;position:absolute;right:0;z-index:2;bottom:10px;line-height:20px}.sab-edit-settings i{margin-left:5px}.saboxplugin-socials{line-height:1!important}.rtl .saboxplugin-wrap .saboxplugin-gravatar{float:right}.rtl .saboxplugin-wrap .saboxplugin-authorname{display:flex;align-items:center}.rtl .saboxplugin-wrap .saboxplugin-authorname .sab-profile-edit{margin-right:10px}.rtl .sab-edit-settings{right:auto;left:0}img.sab-custom-avatar{max-width:75px;}.saboxplugin-wrap .saboxplugin-desc a, .saboxplugin-wrap .saboxplugin-desc {color:0 !important;}.saboxplugin-wrap .saboxplugin-socials .saboxplugin-icon-grey {color:0;}.saboxplugin-wrap .saboxplugin-authorname a,.saboxplugin-wrap .saboxplugin-authorname span {color:0;}.saboxplugin-wrap {margin-top:0px; margin-bottom:0px; padding: 0px 0px }.saboxplugin-wrap .saboxplugin-authorname {font-size:18px; line-height:25px;}.saboxplugin-wrap .saboxplugin-desc p, .saboxplugin-wrap .saboxplugin-desc {font-size:14px !important; line-height:21px !important;}.saboxplugin-wrap .saboxplugin-web {font-size:14px;}.saboxplugin-wrap .saboxplugin-socials a svg {width:18px;height:18px;}</style> <script type="text/javascript">/* <![CDATA[ */ var ct_ultimate_gdpr_cookie = {"ajaxurl":"https:\/\/www.valentinog.com\/blog\/wp-admin\/admin-ajax.php","readurl":"https:\/\/www.valentinog.com\/blog\/redux\/","readurl_new_tab":"off","consent":"1","reload":"","consent_expire_time":"1586926888","consent_time":"1555390888","consent_default_level":"4","consent_accept_level":"5"}; /* ]]> */</script> <script type="text/javascript">/* <![CDATA[ */ var twentyseventeenScreenReaderText = {"quote":"<svg class=\"icon icon-quote-right\" aria-hidden=\"true\" role=\"img\"> <use href=\"#icon-quote-right\" xlink:href=\"#icon-quote-right\"><\/use> <\/svg>","expand":"Expand child menu","collapse":"Collapse child menu","icon":"<svg class=\"icon icon-angle-down\" aria-hidden=\"true\" role=\"img\"> <use href=\"#icon-angle-down\" xlink:href=\"#icon-angle-down\"><\/use> <span class=\"svg-fallback icon-angle-down\"><\/span><\/svg>"}; /* ]]> */</script> <script type="text/javascript">/* <![CDATA[ */ var ezTOC = {"smooth_scroll":"1","visibility_hide_by_default":"1","width":"auto","scroll_offset":"30"}; /* ]]> */</script> <script type="text/javascript">/* <![CDATA[ */ var llcstrings = {"loading_error":"Error occurred while loading comments. Please reload this page."}; /* ]]> */</script> <script type="text/javascript">/* <![CDATA[ */EnlighterJS_Config = {"selector":{"block":"pre.EnlighterJSRAW","inline":"code.EnlighterJSRAW"},"language":"generic","theme":"enlighter","indent":2,"hover":"hoverEnabled","showLinenumbers":true,"rawButton":true,"infoButton":true,"windowButton":true,"rawcodeDoubleclick":false,"grouping":true,"cryptex":{"enabled":false,"email":"mail@example.tld"}};!function(){var a=function(a){var b="Enlighter Error: ";console.error?console.error(b+a):console.log&&console.log(b+a)};return window.addEvent?"undefined"==typeof EnlighterJS?void a("Javascript Resources not loaded yet!"):"undefined"==typeof EnlighterJS_Config?void a("Configuration not loaded yet!"):void window.addEvent("domready",function(){EnlighterJS.Util.Init(EnlighterJS_Config.selector.block,EnlighterJS_Config.selector.inline,EnlighterJS_Config)}):void a("MooTools Framework not loaded yet!")}();;/* ]]> */</script>