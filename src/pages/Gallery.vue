<script setup>

import Container from "@/components/Container.vue";
import {ref} from "vue";
import GalleryVideo from "@/components/GalleryVideo.vue";
import PictureGallery from "@/components/PictureGallery.vue";

const currentTab = ref("pictures")

function toggleTab(name) {
  currentTab.value = name;
}
</script>

<template>
  <section class="flex items-center justify-center relative h-[60rem] w-full bg-cover bg-no-repeat"
           :style="{ 'background-image': 'url(https://res.cloudinary.com/dcr1pvlh3/image/upload/v1729059216/trainerbanner_ljje9a.png)' }">
    <div class="w-[47.7rem] max-sm:w-full text-basic mx-auto text-center">
      <h1 class="text-forty max-sm:text-[3.0rem] font-xlg text-basicColor">Gallery</h1>
      <div class="font-lg text-basic">
        <span class="text-bannerNavColor">Home</span> <span class="text-primaryColor"> > Gallery</span><span
          class="text-primaryColor sentence"> > {{currentTab}}</span>
      </div>
    </div>
  </section>

  <Container class="mb-[10rem]">
    <div class="mt-[3.4rem] mb-[1.7rem] text-center">
      <div
          class="w-[48.1rem] max-sm:w-full mb-[1.7rem] h-[45px] mx-auto bg-[#dddddd] rounded-[6px] font-[500] leading-[1.69rem] text-[1.4rem] flex p-1">
        <button class="gallery_tab transition-all duration-300 ease-in-out transform" @click="toggleTab('videos')"
                :class="currentTab === 'videos' ? 'selected' : 'unselected'">Videos
        </button>
        <button class="gallery_tab transition-all duration-300 ease-in-out transform" @click="toggleTab('pictures')"
                :class="currentTab === 'pictures' ? 'selected' : 'unselected'">Pictures
        </button>
      </div>
    </div>

    <div>
      <transition name="fade" mode="out-in">
        <GalleryVideo v-if="currentTab === 'videos'" key="videos"/>
      </transition>
      <transition name="fade" mode="out-in">
        <PictureGallery v-if="currentTab === 'pictures'" key="pictures" />
      </transition>
    </div>
  </Container>
</template>

<style scoped>
.gallery_tab {
  @apply w-[24rem] h-[3.7rem] rounded-[6px]
}

.selected {
  background-color: #121212;
  color: white;
  transform: scale(1.1); /* Slight scale effect */
}

.unselected {
  background-color: transparent;
  color: #545454;
  transform: scale(1); /* Normal size when unselected */
}

.gallery_tab:hover {
  transform: scale(1.05); /* Slight grow on hover */
  background-color: #e0e0e0; /* Light background on hover */
  color: #545454;
}

.transition-all {
  transition: background-color 0.3s, color 0.3s, transform 0.3s;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter, .fade-leave-to
{
  opacity: 0;
}
</style>