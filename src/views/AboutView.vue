<template>
  <q-layout view="hHh lpR fFf">

    <q-page-container>
      <q-page class="fixed-top row justify-center items-center">
        <div class="column justify-center items-center">
          <p class="row text-bold text-underlined">UNDER CONSTRUCTION</p>
          <pre class="row">
                  App: Magic Elemental Dog Walk
            Designers: Woodland Elementary School - Lego League Students
                 Team: Hawk Bots
               Season: 2023/2024
                 Info: Please click on the tabs below to see the designs
                       the team has made. The app is still under contruction
                       and will continue to be built following their desing specs.
                       This is an initial demo.

          </pre>
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
