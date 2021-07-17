---
layout: post.liquid
type: standard
title: "Kotlin - কেন শিখবেন? কিভাবে শুরু করবেন?"
excerpt: "বর্তমানে Java থেকে Kotlin এ আসার প্রয়োজনীয়তা এবং দ্রুত Kotlin আয়ত্তে কিভাবে আনবেন তা নিয়েই আলোচনা রয়েছে আজকের এ লেখায়।"
tags: kotlin java inspiration jetpack-compose
categories: android kotlin
image: /assets/image/2021/07/kotlin-why-learn-how-to-start-cover.png
issue_id: 3
---

বর্তমানে Java থেকে Kotlin এ আসার প্রয়োজনীয়তা এবং দ্রুত Kotlin আয়ত্তে কিভাবে আনবেন তা নিয়েই আলোচনা রয়েছে আজকের এ লেখায়।

--------

<img class="max-w-xs" src="/assets/image/2021/07/Kotlin_logo_2021.svg" alt="Kotlin">

[Kotlin](https://kotlinlang.org) হল একটি Open-source, মডার্ন ভাষা, যা তৈরি করেছে [JetBrains](https://www.jetbrains.com)।
এটি মূলত Java এর পরিপুরক ভাষা, মানে এটি JVM এই চলে। JavaScript এর জন্য TypeScript যেরকম আর কি। তবে Kotlin আরো শক্তিশালী
এবং robust।

Kotlin এর যাত্রা শুরু ২০১১ তে। তবে Kotlin এর নাম-ডাক শুরু হয় ২০১৭ তে Android এ Kotlin কে যুক্ত করার পর থেকে।

Kotlin একটি cross-platform ভাষা। এটি মূলত JVM কে টার্গেট করে তৈরি হলেও, এটিকে ওয়েব এর জন্য JavaScript এবং অন্য প্লাটফর্ম
যেমন iOS ইত্যাদির জন্য native code এ কম্পাইল করা যায়। মোবাইল, ফ্রন্টএন্ড, ব্যাকএন্ড, ডেস্কটপ সব যায়গাতেই পদার্পণ আছে
Kotlin এর। বর্তমানে Java সাপোর্ট করা অনেক জনপ্রিয় ফ্রেমওয়ার্ক যেমনঃ Spring ইত্যাদিও Kotlin সাপোর্ট যুক্ত করেছে। এছাড়া
Kotlin এর [Standard Library](https://kotlinlang.org/api/latest/jvm/stdlib/) তে পাবেন দৈনন্দিন প্রয়োজনীয় অনেক ইউটিলিটি
ফাংশন এবং [এক্সটেনশন](https://kotlinlang.org/docs/extensions.html)।

Android এখন Kotlin কেন্দ্রিক। বর্তমান এবং ভবিষ্যৎ এর সব নতুন ফিচার এবং (Jetpack) লাইব্রেরির প্রাথমিক সাপোর্ট দেওয়া হবে
Kotlin এ। পরে হয়ত Java তে সাপোর্ট দেওয়া হতেও পারে নাও পারে।

> "...Android development will be increasingly Kotlin-first..."
> <cite>[Android Developers](https://developer.android.com/kotlin/first)</cite>

KMM, Kotlin Multiplatform Mobile, হলো একটি SDK, যা দিয়ে একই Kotlin কোড একই সাথে Android এবং iOS এ ব্যবহার করা যাবে।
বেশীর ভাগ অ্যাপেরই বিজনেস লজিক একই থাকে। KMM ব্যবহার করে একই বিজনেস লজিক কোড Android এবং iOS এ ব্যবহার করা যাবে। কি মজা
তাই না! ডেস্কটপ এবং ওয়েব প্লাটফর্মেও KMM এর সাপোর্ট নিয়ে কাজ চলছে।

<div class="iw-gallery-2">
    <img class="img-viewer" src="/assets/image/2021/07/kotlin_kmm_1.png" alt="KMM">
    <img class="img-viewer" src="/assets/image/2021/07/kotlin_kmm_2.png" alt="KMM">
</div>

Kotlin এর একটি বড় ফিচার হল null-safety। null কে বলা
হয় [billion-dollar mistake](https://en.wikipedia.org/wiki/Tony_Hoare#Apologies_and_retractions)।
`NullPointerExceptions` এর পাল্লায় পড়েননি এরকম Android Developer পাওয়া অসম্ভব। Kotlin ডিফল্ট ভাবে not-null, ফলে
অনেক `NullPointerExceptions` থেকে সহজেই রক্ষা পাওয়া যায়।

> "...Kotlin helps you avoid `NullPointerExceptions`. Android apps that use Kotlin are 20% less likely to crash."
>
> <cite>[Android Developers](https://developer.android.com/kotlin)</cite>

Kotlin এত অসাধারণ একটা ভাষা যে Java নিজেই বর্তমানে Kotlin থেকে ~~ফিচার কপি করছে~~ inspired হচ্ছে। যেমনঃ Kotlin
এর `data class` এর বদলে `Record`, `sealed class` ইত্যাদি। এছাড়া Kotlin দিয়ে কোড হয় clean এবং এর extension function,
coroutine, flow, first class function ইত্যাদি ব্যবহার করা শিখলে Java বিরক্ত লাগবেই।

কিছু উদাহরন কোড দিচ্ছি, নিজেই দেখুন।

```kotlin
// --------------------------------
// Named parameter & Listener
// --------------------------------

// Define
fun CustomDialog(
    title: String,
    message: String? = null,
    positiveBtnText: String,
    onPositiveClicked: () -> Unit // Function as a parameter :)
) {
    AlertDialog.Builder(this)
        .apply {
            setTitle(title)

            if (message != null) {
                setMessage(message)
            }

            setPositiveButton(positiveBtnText) { _, _ ->
                onPositiveClicked()
            }

            show()
        }
}

// Usage
CustomDialog(
    title = "Smile, it's Sunnah.",
    positiveBtnText = "Ok",
    onPositiveClicked = {
        // ...
    }
)


// --------------------------------
// Kotlin Coroutine: streamline asynchronous programming
// --------------------------------

// Forget about AsyncTask, Handler, Runnable etc.
viewModelScope.launch {
    showLoading()

    val response = ApiCall()

    if (response.success) {
        showMessage.value = "Rocket successfully sent on Mars!"
    }

    hideLoading()
}

// Splash screen delay
lifecycleScope.launch {
    delay(2000) // Wait for 2 seconds.
    
    startActivity(Intent(this@SplashActivity, MainAcitivity::class.java))
}


// --------------------------------
// Extension Function: Expressive and concise
// --------------------------------

// [toast] is an extension function of [Context].
fun Context.toast(message: String): Toast = Toast
    .makeText(this, message, Toast.LENGTH_SHORT)
    .apply {
        show()
    }

// We can access [toast] from any context just like this.
context.toast("Kotlin is awesome!")


// --------------------------------
// Null safety
// --------------------------------

// Kotlin এ default হচ্ছে not null.
var notNullVariable: String = "I love Kotlin"

// কোনো ভেরিয়েবল এ null রাখতে হলে নিজে থেকে বলে দিতে হবে `?` মার্ক দিয়ে।
var nullVariable: String? = null


// --------------------------------
// data class
// --------------------------------

// Forget about the getter-setter boilerplate code for POJO type classes.
data class User(
    val id: Int,
    val name: String,
    val email: String,
)

// It automatically generates constructor, getter-setter, toString(), equals(), hashCode() etc. for you.
val newUser = User(1, "Shohag", "xyz@example.com")

Log.d(TAG, "newUser: $newUser")
// newUser: User(id=1, name=Shohag, email=xyz@example.com)
```

Android দুনিয়ায় যুগান্তকারী নতুন টেকনোলজি হলো Jetpack Compose. যা ভবিষ্যৎ এ XML এর বদলে recommended করবে বলে ইঙ্গিত
দিয়েছে গুগল। যা সম্পুর্ন Kotlin exclusive। Single Activity এবং Fragment মুক্ত অ্যাপ তৈরিতে Jetpack Compose সহায়তা করবে।
এটিকে iOS এর SwiftUI এর Android রূপ বলা যেতে পারে।

> Jetpack Compose নিয়ে আরো জানতে জয়েন করতে পারেন [Jetpack Compose Developers Bangladesh](https://www.facebook.com/groups/256767412869420/) ফেসবুক গ্রুপে।

# কিভাবে Kotlin দ্রুত শিখতে পারবেন? 🚀

আপনি যদি ইতিমধ্যে Java-Android ডেভেলপিং এ ভালো হয়ে থাকেন, তাহলে Kotlin এ আসতে আপনার এক সপ্তাহের বেশি সময় লাগবেনা। এক
সপ্তাহ বেশি ই বলে ফেলেছি 😉।

একেকজনের শিখার ধরন একেক রকম। তাই আমি আলাদা কোনো পদ্ধতি না বলে কিছু ম্যাটেরিয়াল দিচ্ছি। আশা করি শিখতে খোঁজা-খুঁজি করে সময়
নষ্ট করতে হবে না।

## ১. চিটশিট

যদি হন খুব অলস তাহলে একটু সময় নিয়ে দেখে চোখ বুলিয়ে নিন যে কোনো একটি চিটশিট। আর সরাসরি শুরু করে দিন ডেভেলপিং।

* [devhints.io](https://devhints.io/kotlin)
* [MindOrks](https://github.com/MindorksOpenSource/from-java-to-kotlin)
* [kotlin-academy.com](https://blog.kotlin-academy.com/kotlin-cheat-sheet-1137588c75a)
* [raywenderlich.com](https://koenig-media.raywenderlich.com/uploads/2019/11/RW-Kotlin-Cheatsheet-1.1.pdf)

## ২. Kotlin Koans

আপনি যদি কোড প্র্যাকটিস করতে করতে Kotlin এর সাথে পরিচিত হতে চান তাহলে আপনার জন্য বেষ্ট হবে Kotlin Koans. এখানে আছে
বর্ণনা এবং অনুশীলনের ব্যাবস্থা। যা করা যাবে সরাসরি অনলাইনে বা IDE তে।

বিস্তারিতঃ [Kotlin Koans](https://kotlinlang.org/docs/koans.html)

## ৩. Code Labs

Android ডেভেলপারদের সুবিধার জন্য প্রায় সব Android এর Codelabs গুলো Kotlin এ রুপান্তর করা হয়েছে। নতুন Codelab গুলোও
Kotlin এই করা হয়। Kotlin এ করা Codelab গুলোর পাশে ব্র্যাকেটে Kotlin লিখা আছে।

- [সব Android কোডল্যাব](https://codelabs.developers.google.com/?cat=android)
- [Codelab: Build Your First Android App in Kotlin](https://developer.android.com/codelabs/build-your-first-android-app-kotlin)

## ৪. Simple MVVM

Android এর recommended pattern হল MVVM. MVVM pattern এর উদাহরণ এবং Best-practice এর সাথে Android Jetpack এর অনেক গুলো
লাইব্রেরির উদাহরণ নিয়ে আমি তৈরি করেছি Simple MVVM স্যাম্পল অ্যাপ রিপোজিটরি। এতে রয়েছে Kotlin Coroutine, Dagger (for Hilt
see `dev` branch), View Binding, Data Binding, Common Binding Adapters, Room, Navigation Component, Paging, Utility
Extension Functions ইত্যাদি সহ আরো অনেক কিছু। আপনারা চাইলে Kotlin এর বেসিক সিনট্যাক্স শিখে রিপোজিটরিটি ক্লোন করে কোড
গুলো দেখতে পারেন। কোনো প্রশ্ন বা সাজেশন থাকলে [issue](https://github.com/ImaginativeShohag/Simple-MVVM/issues) তে অবশ্যই
জানাবেন।

গিটহাবঃ [Simple-MVVM](https://github.com/ImaginativeShohag/Simple-MVVM)

## ৬. Run Code

Kotlin এর রয়েছে নিজস্ব অনলাইন এবং Command Line REPL কম্পাইলার। Kotlin প্র্যাকটিস করার সময় এগুলো ব্যবহার করতে পারেন।

- [Online Kotlin Compiler](https://play.kotlinlang.org)
- [Kotlin Command-line compiler](https://kotlinlang.org/docs/command-line.html)

# Special Suggestions

শিখবেন কিনা চিন্তা বাদ
দিয়ে [Build Your First Android App in Kotlin](https://developer.android.com/codelabs/build-your-first-android-app-kotlin)
টি ফলো করে Kotlin দিয়ে প্রথম অ্যাপ বানিয়ে ফেলুন। অথবা [Kotlin Koans](https://kotlinlang.org/docs/koans.html) দিয়ে সরাসরি
Kotlin এ ডুবে পড়ুন। তারপর চিন্তা করুন শিখবেন কিনা!

আশা করি এবার আপনাকে Kotlin শিখতে কেউ ধরে রাখতে পারবেনা 🥳।

শুভ কামনা।