<template>
  <q-layout view="hHh lpR fFf">

    <q-page-container>
      <q-page class="fixed-top row justify-center items-center">
        <q-carousel
          animated
          v-model="slide"
          arrows
          navigation
          infinite
          style='height: 70vh; width: 70vw;'
        >
          <q-carousel-slide :name="1" class="column bg-green">
            <q-img
              src="@/assets/images/male.png"
              spinner-color="white"
              fit="scale-down"
            >
              <div class="absolute-top text-subtitle1 text-weight-bolder text-center">
                MALE
              </div>
            </q-img>
          </q-carousel-slide>  
          <q-carousel-slide :name="2" class="column bg-orange">
            <q-img
              src="@/assets/images/female.png"
              spinner-color="white"
              fit="scale-down"
            >
              <div class="absolute-top text-subtitle1 text-weight-bolder text-center">
                FEMALE
              </div>
            </q-img>
          </q-carousel-slide>  
        </q-carousel>
      </q-page>
    </q-page-container>

    <q-footer reveal elevated class="bg-warning text-black">
      <q-tabs align="center">
          <q-route-tab to="/character" name="character" icon="person" label="Character" />
          <q-route-tab to="/dog" name="dog" icon="pets" label="Dog" />
          <q-route-tab to="/map" name="map" icon="map" label="Map" />
          <q-route-tab to="/walk" name="walk" icon="directions_walk" label="Walk" />
          <q-route-tab to="/shop" name="shop" icon="shopping_bag" label="Shop" />
      </q-tabs>
    </q-footer>
  </q-layout>
</template>

<script>
  import { QImg } from 'quasar';
import { ref } from 'vue'

  export default {
    setup() {
        return {
            slide: ref(1)
        };
    },
    components: { QImg }
}
</script>