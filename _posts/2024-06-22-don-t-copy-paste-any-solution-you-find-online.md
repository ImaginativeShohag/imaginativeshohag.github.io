---
layout: post.liquid
type: standard
title: "Don't copy-paste any solution you find online. Here's why."
excerpt: "Discussion about how to solve “popBackStack()” blank screen issue in Jetpack Compose."
tags: android jetpack-compose kotlin navigation
categories: android kotlin jetpack-compose
image: /assets/image/2024/06/don-t-copy-paste-any-solution-you-find-online-cover.png
issue_id: 10
---

Recently I saw this video of [Philipp Lackner](https://www.linkedin.com/in/philipp-lackner/). Where he shows "Why he Stopped Using `popBackStack()` to Navigate Back" ([The video](https://www.youtube.com/watch?v=y2zLFONuk7c)).

# The problem

If `popBackStack()` is called multiple times and there is nothing on the back stack, then Jetpack Compose shows a blank screen! Because it mistakenly also removes the root stack.

# The discussion

In the video, Philipp suggested `navigationUp()` in replace of `popBackStack()`. But though it looks like `navigationUp()` solves the 
issue in the simple app, it may introduce some new problems in complex apps. And `popBackStack()` is the recommended way for navigating back. 
For the black screen issue, there is a workaround suggested in the official documentation [here](https://developer.android.com/guide/navigation/backstack#handle-failure).

Let's talk about `navigationUp()`. One big problem is, that the method restarts the activity! Here is a sample app to show you the issue: [gist](https://gist.github.com/ImaginativeShohag/350674f91dc67ff72b0c7852f24a508d#file-mainactivity-kt)

This example indicates that calling `navigateUp()` multiple times will recreate the `Activity`.

Here is the Logcat output:

```bash
// destination: onCreate called <----
// destination: Destination(0x2ac563dd) route=screen_c
// destination: Destination(0x2ac563db) route=screen_a
// destination: Destination(0x2ac563dc) route=screen_b
// destination: Destination(0x2ac563db) route=screen_a
// destination: x: true, y: true
// destination: onCreate called <----
// destination: Destination(0x2ac563dd) route=screen_c
// destination: yes
```

Here you can see `onCreate` is called twice. If I am not wrong it will create more issues if we use `navigationUp()` instead of `popBackStack()` all the time.

# The solution

I found 2 solutions. One solution will finish the activity if no more back-stack is left, and another one will only allow to call the `popBackStack()` after the screen is in `RESUMED` state.

The extensions are [here](https://gist.github.com/ImaginativeShohag/350674f91dc67ff72b0c7852f24a508d#file-extnavcontroller-kt).

Enjoy.