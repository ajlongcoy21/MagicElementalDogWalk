<template>
  <q-layout view="hHh lpR fFf">

    <q-page-container>
      <q-page class="fixed-top row justify-center items-center">
        <div class="column justify-center items-center">
          <q-icon :name="matHandyman" size="300px" class="col">
          </q-icon>
          <p class="row">UNDER CONSTRUCTION</p>
        </div>
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

<script setup>
  import { matHandyman } from '@quasar/extras/material-icons'
</script>