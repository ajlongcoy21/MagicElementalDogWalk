<template>
  <q-layout view="hHh lpR fFf">

    <q-page-container>
      <q-page class="fixed-top row justify-center items-center">
        <q-card
          class="my-card text-black bg-warning"
        >
          <q-card-section class="text-center">
            <div class="text-h6">Magic Elemental Dog Walk</div>
            <div class="text-subtitle2">Woodland Elementary School Hawk Bots (2023/2024)</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            Please click on the tabs below to see the designs
                        the team has made. The app is still under contruction
                        and will continue to be built following their desing specs.
                        This is an initial demo.
          </q-card-section>
        </q-card>
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

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 400px
</style>
