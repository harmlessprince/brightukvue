<script setup>
import Container from "@/components/Container.vue";
import {useEntrepreneurStore} from "@/store/entrepreneur.store.js";
import {gsap} from "gsap";
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {onBeforeMount, onMounted} from "vue";
import HeroSection from "@/components/HeroSection.vue";

const store = useEntrepreneurStore()
gsap.registerPlugin(ScrollTrigger);

// const swipeInAnimation = (classname) => {
//   console.log(classname)
//   gsap.fromTo(classname,
//       {x: 100},
//       {
//         x: 0,
//         duration: 1,
//         scrollTrigger: {
//           trigger: classname,
//           start: 'top 85%'
//         },
//       });
// }

onMounted(() => {
  // gsap.fromTo(".0",
  //     {x: 100},
  //     {
  //       x: 0,
  //       duration: 1,
  //       scrollTrigger: {
  //         trigger: ".0",
  //         start: 'top 85%'
  //       },
  //     });

      // gsap.fromTo(".slideText",
      // {x: 100},
      // {
      //   x: 0,
      //   duration: 1,
      //   scrollTrigger: {
      //     trigger: ".slideText",
      //     start: 'top 85%'
      //   },
      // });
})
onBeforeMount(() => {
  store.getEntrepreneurs();
});


</script>

<template>

  <HeroSection
       imageUrl="https://res.cloudinary.com/dcr1pvlh3/image/upload/v1731492454/1280_by_631_v1px_pjygvk.jpg"
      page="Entrepreneur"
  />


    <Container>

      <!-- scribe div flex -->
      <div v-for="(item, index) in store.entrepreneurs" :key="index">
        <div v-if="index%2 === 0">
          <div class="grid grid-cols-2 max-large:grid-cols-1 gap-4 medium:max-large:px-[5rem] my-[5rem] max-medium:my-[3.7rem]">
            <!-- <div class="animate-slideInLeft delay-200"> -->
              <div>
              <!-- <div class="w-[47.7rem] medium:max-large:w-full max-medium:w-full"> -->
                <div class="w-[40.7rem] medium:max-large:w-full max-medium:w-full">
                <img :src="item.logo" class="w-full rounded-[10px]" :class="store.entrepreneurs.length < 1 ? 'animate-pulse': '' " alt="bright"/>
              </div>
            </div>
            <!-- <div class="animate-slideInRight delay-200"> -->
              <div>
              <div class="slideText w-[47.8rem] max-medium:w-full max-large:w-full p-[1.5rem] bg-secondary rounded-[10px] text-basicColor flex flex-col justify-between h-full">
                <header class="font-header text-xlg">{{item.title}}</header>
                <p class="font-sm text-xsm mb-[1rem]">
                  {{item.body}}
                </p>
                <a class="hover:scale-[1.1] w-[20.4rem] h-[4.3rem] bg-primary text-secondary font-sm text-xsm rounded-[8px] flex items-center justify-center" :href="item.website" target="_blank">Visit  Website</a>
              </div>
            </div>
          </div>
        </div>
        <div v-else>
          <div class="grid grid-cols-2 max-large:grid-cols-1 medium:max-large:px-[5rem] gap-4">
            <!-- this logo shows for mobile only -->
            <div class="medium:hidden">
              <div class="w-[47.7rem] max-large:w-full">
                <img :src="item.logo" class="w-full  rounded-[10px]" alt="bright"/>
              </div>
            </div>
            <!-- <div class="animate-slideInLeft delay-400"> -->
              <div>
              <div class="w-[47.8rem] max-large:w-full p-[1.5rem] bg-secondary rounded-[10px] text-basicColor flex flex-col justify-between h-full">
                <header class="font-header text-xlg">{{item.title}}</header>
                <p class="font-sm text-xsm mb-[1rem]">
                  {{item.body}}
                </p>
                <a class="hover:scale-[1.1] w-[20.4rem] h-[4.3rem] bg-primary text-secondary font-sm text-xsm rounded-[8px] flex items-center justify-center" :href="item.website" target="_blank">Visit Website</a>
              </div>
            </div>
            <!-- <div class="animate-slideInRight delay-400"> -->
              <div class="max-medium:hidden">
              <!-- <div class="w-[47.7rem] max-large:w-full"> -->
                <div class="w-[40.7rem] max-large:w-full">
                <img :src="item.logo" class="w-full  rounded-[10px]" alt="bright"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
</template>

<style scoped>
.aboutBanner::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 70vh;
  background-color: #000;
  opacity: 0.7;

}

</style>