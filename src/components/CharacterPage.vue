<template>
  <q-layout view="hHh lpR fFf">

    <div>CHARACTER PAGE</div>

    <q-footer reveal elevated class="bg-warning text-black">
      <q-tabs align="center">
          <q-route-tab to="/character" name="character" icon="person" label="Character" />
          <q-route-tab to="/dog" name="dog" icon="pets" label="Dog" />
          <q-route-tab to="/shop" name="shop" icon="shopping_bag" label="Shop" />
      </q-tabs>
    </q-footer>
  </q-layout>
</template>