<template>
    <q-layout view="hHh lpR fFf">
      <q-page-container>
        <q-page 
          class="fixed-top row justify-center items-center"
          style='max-height: 498px'
        >
          <q-carousel
            animated
            v-model="slide"
            arrows
            navigation
            infinite
            style='height: 70cqh; width: 70vw;'
          >
            <q-carousel-slide :name="1" class="column bg-green justify-center items-center">
              <q-img
                src="@/assets/images/earth_map_final.png"
                spinner-color="white"
                fit="scale-down"
              >
                <div class="absolute-top text-subtitle1 text-weight-bolder text-center">
                  EARTH
                </div>
              </q-img>
            </q-carousel-slide>  
            <q-carousel-slide :name="2" class="column bg-orange justify-center items-center">
              <q-img
                src="@/assets/images/fire_map_final.png"
                spinner-color="white"
                fit="scale-down"
              >
                <div class="absolute-top text-subtitle1 text-weight-bolder text-center">
                  FIRE
                </div>
              </q-img>
            </q-carousel-slide>  
            <q-carousel-slide :name="3" class="column bg-teal justify-center items-center">
              <q-img
                src="@/assets/images/water_map_final.png"
                spinner-color="white"
                fit="scale-down"
              >
                <div class="absolute-top text-subtitle1 text-weight-bolder text-center">
                  WATER
                </div>
              </q-img>
            </q-carousel-slide>  
            <q-carousel-slide :name="4" class="column bg-grey justify-center items-center">
              <q-img
                src="@/assets/images/air_map_final.png"
                spinner-color="white"
                fit="scale-down"
              >
                <div class="absolute-top text-subtitle1 text-weight-bolder text-center">
                  WIND
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