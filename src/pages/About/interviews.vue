<script setup>
import {onMounted} from 'vue'
import HeroSection from "@/components/HeroSection.vue";
import InterviewVideo from "@/components/InterviewVideo.vue";
import Heading from '@/components/Heading.vue';
import Container from "@/components/Container.vue";
import InterviewImage from "@/assets/interview_banner.jpg"
import {ref} from "vue";

// const currentTab = ref("videos")
</script>

<template>
  <main class="">
    <!-- about hero section -->
    <HeroSection
        :imageUrl="InterviewImage"
        page="Interviews"
    >
      <template v-slot:overlay>
        <div class="absolute inset-0 bg-black opacity-50"></div>
      </template>
    </HeroSection>

    <Container>
        <div class="text-center mt-[7.7rem]">
        <Heading title="Interviews"/>
        <h1 class="text-[2rem] font-[500] leading-[32px] text-[#151515]">Watch the exclusive interviews of Bright Uk </h1>
    </div>
    <div class="mt-[4.4rem]">
     <InterviewVideo  key="videos"/>
    </div>
</Container>
    
    
  </main>
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