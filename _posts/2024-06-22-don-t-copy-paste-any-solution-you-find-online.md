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

The extensions are given below:

```kotlin
import android.app.Activity
import android.content.Context
import androidx.lifecycle.Lifecycle
import androidx.navigation.NavController

/**
 * Attempts to pop the controller's back stack.
 * If the back stack is empty, it will finish the activity.
 *
 * @param context Activity context.
 */
fun NavController.popBackStackOrFinish(context: Context) {
    if (!popBackStack()) {
        (context as Activity).finish()
    }
}

/**
 * Attempts to pop the controller's back stack.
 * It will check the current lifecycle and only allow the pop
 * if the current state is RESUMED.
 *
 * See [reference](https://github.com/google/accompanist/issues/1408#issuecomment-1673011548)
 */
fun NavController.popBackStackOrIgnore() {
    if (currentBackStackEntry?.lifecycle?.currentState == Lifecycle.State.RESUMED) {
        popBackStack()
    }
}
```

We can also use `dropUnlessResumed {}` like the following. It is related to the `popBackStackOrIgnore()` solution.

```kotlin
@Composable
fun DropUnlessResumed() {
    Button(
        onClick =
            dropUnlessResumed {
                // Run on clicks only when the lifecycle is at least RESUMED.
                navController.popBackStack()
            },
    ) {
        Text(text = "Go Back")
    }
}

```

I added all the solutions to my **Why Not Compose!** app. Check out and run the app from [here](https://github.com/ImaginativeShohag/Why-Not-Compose/blob/a13b819aba7a51ce474ea8f7177b40b3c293b995/popbackstack/src/main/java/org/imaginativeworld/whynotcompose/popbackstack/PopBackStackActivity.kt). You can also try the app from Google Play Store from [here](https://play.google.com/store/apps/details?id=org.imaginativeworld.whynotcompose) (Check the tutorials section from the app).

Enjoy.