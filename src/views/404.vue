<template>
    <template>
  <div class="grid justify-center">
    <h2 class="text-7xl text-center font-Roboto text-red-500 py-8">
      Erreur 404
    </h2>
    <strong class="text-4xl text-center font-Roboto text-red-500 py-8"
      >Nous n'avons pas trouvé ce que vous cherchiez</strong
    >
  </div>

  <div class="grid justify-center mb-20">
    <form
      action="https://duckduckgo.com/"
      method="GET"
      x-data="{ q:'', }"
      x-on:submit="q = q + ' site:mmimontbeliard.com'"
    >
      <label class="text-white font-Readex-Pro text-2xl py-8" for="q"
        >Vous recherchez quelque chose ?</label
      >
      <br />
      <button class="pr-4 py-8" type="submit">Rechercher :</button>
      <input type="text" id="q" name="q" x-model="q" />
    </form>
  </div>
</template>
</template>