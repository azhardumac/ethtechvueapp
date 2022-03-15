<template>
  <section class="lg:pt-48 pt-12">
    <div class="flex items-center lg:flex-row flex-col">
      <div class="lg:w-1/2 w-full wow fadeInLeft" data-wow-duration="0.3s" data-wow-delay="0.8s">
        <div class="bg-gray-900 rounded-2xl overflow-hidden p-8 border border-gray-700">
          <section>
            <h3 class="font-bold gradient-text">The Safer & Simpler Crypto Locking Platform</h3>
            <p class="mt-3">
              The Locker Of Ananke makes it easy for any individual, project or community to lock up tokens and/or liquidity with full control over your funds and settings. Help make De-Fi a safer place and build trust with your community by locking
              your tokens today.
            </p>
          </section>
          <section>
            <h3 class="gradient-text mt-8">
              How to use
            </h3>
            <ul class="list-decimal space-y-2 text-sm pl-4 mt-3 text-gray-200">
              <li>Connect your wallet</li>
              <li>Head over to the type of locking you would like to do (token or liquidity)</li>
              <li>Enter your token or liquidity contract code</li>
              <li>Input the quantity of tokens you would like to lock</li>
              <li>Select the end date for your lockup<br /></li>
              <li>Hit “Lock”</li>
              <li>Congratulations your funds are now securely locked<br /></li>
              <li>To Redeem, wait until your timeframe is up. Head back to your locker and hit “Redeem”</li>
            </ul>
          </section>
          <section>
            <div class="gradient-text mt-8">
              <span>Low fee: use any of our locks for the industry low fee of 0.1 BNB</span>
            </div>
          </section>
        </div>
      </div>
      <div class="lg:w-1/2 w-full wow fadeInRight lg:mt-0 mt-10 flex place-content-center" data-wow-duration="0.3s" data-wow-delay="1s">
        <img src="@/assets/logo.png" class="w-full" style="max-width: 400px;" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "BottomBar",
};
</script>
