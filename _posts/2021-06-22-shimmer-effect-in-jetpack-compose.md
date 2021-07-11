---
layout: post.liquid
type: standard
title: "Shimmer effect in Jetpack Compose"
excerpt: "Let’s create a shimmer effect using Jetpack Compose."
tags: android fade jetpack-compose kotlin shimmer
categories: android kotlin
image: /assets/image/2021/06/shimmer-2.gif
issue_id: 1
---

Let’s create a shimmer effect using Jetpack Compose.

For a chat module, I tried to create a shimmer effect. The first attempt result is this:

![First attempt](/assets/image/2021/06/shimmer-3.gif)

```kotlin
@Preview
@Composable
fun LoadingChatItemsPreview() {
    Column {
        LoadingChatItem()
        LoadingChatItem()
        LoadingChatItem()
        LoadingChatItem()
        LoadingChatItem()
        LoadingChatItem()
    }
}
 
@Composable
fun LoadingChatItem(
    modifier: Modifier = Modifier
) {
    val infiniteTransition = rememberInfiniteTransition()
 
    val color by infiniteTransition.animateColor(
        initialValue = PlaceHolderStartColor,
        targetValue = PlaceHolderEndColor,
        animationSpec = infiniteRepeatable(
            animation = tween(1000, easing = LinearEasing),
            repeatMode = RepeatMode.Reverse
        )
    )
 
    Box(
        modifier = modifier
            .padding(start = Random.nextInt(16, 128).dp, top = 8.dp, end = 16.dp, bottom = 8.dp)
            .fillMaxWidth()
            .height(listOf(36.dp, 72.dp, 108.dp).random())
            .background(color, RoundedCornerShape(18.dp))
    )
}
```

See the glitching! The reason is that I forgot to use `remember`!

Here is the updated preview:

![First attempt](/assets/image/2021/06/shimmer-1.gif)

```kotlin
@Preview
@Composable
fun LoadingChatItemsPreview() {
    Column {
        LoadingChatItem()
        LoadingChatItem()
        LoadingChatItem()
        LoadingChatItem()
        LoadingChatItem()
        LoadingChatItem()
    }
}
 
@Composable
fun LoadingChatItem(
    modifier: Modifier = Modifier
) {
    val infiniteTransition = rememberInfiniteTransition()
    val height = remember { listOf(36.dp, 72.dp, 108.dp).random() }
    val startPadding = remember { Random.nextInt(16, 128).dp }
 
    val color by infiniteTransition.animateColor(
        initialValue = PlaceHolderStartColor,
        targetValue = PlaceHolderEndColor,
        animationSpec = infiniteRepeatable(
            animation = tween(1000, easing = LinearEasing),
            repeatMode = RepeatMode.Reverse
        )
    )
 
    Box(
        modifier = modifier
            .padding(start = startPadding, top = 8.dp, end = 16.dp, bottom = 8.dp)
            .fillMaxWidth()
            .height(height)
            .background(color, RoundedCornerShape(18.dp))
    )
}
```

I think it is ok now.

Recently [Accompanist](https://github.com/google/accompanist) added a new [placeholder](https://google.github.io/accompanist/placeholder/) library. Which makes it easier to create placeholders with a fade or  shimmer effect. After using the shimmer effect from the library final  look is the following.

![First attempt](/assets/image/2021/06/shimmer-2.gif)

```kotlin
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.runtime.Composable
import androidx.compose.runtime.remember
import androidx.compose.ui.Modifier
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import com.google.accompanist.placeholder.PlaceholderHighlight
import com.google.accompanist.placeholder.material.placeholder
import com.google.accompanist.placeholder.material.shimmer
import kotlin.random.Random
 
@Preview
@Composable
fun LoadingChatItemsWithShimmerPreview() {
    Column {
        LoadingChatItemNoTransition()
        LoadingChatItemNoTransition()
        LoadingChatItemNoTransition()
        LoadingChatItemNoTransition()
        LoadingChatItemNoTransition()
        LoadingChatItemNoTransition()
    }
}
 
@Composable
fun LoadingChatItemNoTransition(
    modifier: Modifier = Modifier
) {
    val height = remember { listOf(36.dp, 72.dp, 108.dp).random() }
    val startPadding = remember { Random.nextInt(16, 128).dp }
 
    Box(
        modifier = modifier
            .padding(start = startPadding, top = 8.dp, end = 16.dp, bottom = 8.dp)
            .fillMaxWidth()
            .height(height)
            .placeholder(
                shape = RoundedCornerShape(18.dp),
                visible = true,
                highlight = PlaceholderHighlight.shimmer(),
            )
    )
}
```

Now it is perfect!

Copy. Modify. Enjoy.
