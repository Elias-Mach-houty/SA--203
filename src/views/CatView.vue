<template>
    <div class="container">
        <div class="card-header">
            <h5>Liste des Catégories</h5>
        </div>    
        <hr/>
          <h6>Nouvelle catégorie</h6>
        <form >
          <div class="input-group">
            <input class="border text-black border-black" type="text"  v-model='categories.cat' required />
            <button class="" type="button" @click='createCategories()' title="Création">
              Créer
            </button>
          </div>
        </form>

        <div class="card-body table-responsive">
            <table class="table text-light">
                <thead>
                    <tr>                      
                        <th scope="col">
                          <div class="text-black font-Corps">Liste des Catégories actuels</div>                          
                          <span class="">
                            <div class="" >
                                <div class="">
                                  <span class="font-Corps" >Filtrage</span>
                                </div>
                                <input class="border" type="text" v-model="filter0" />
                                <button type="button"  title="Filtrage" class="p-10">
                                    <SearchIcon class="w-8 h-8 fill-black" />
                                </button>
                              </div>
                          </span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                          <form 
                            v-for="categories in filterByName" :key="categories.id">
                            <div class="input-group" >
                              <div class="flex flex-col gap-1">
                                <span class="input-group-text">Nom</span>
                                <input class="border" type="text" v-model="categories.cat" />
                              </div>
                              <button class="btn btn-light" type="button"  @click="updateCategories(categories)" title="Modification">
                                Modifier
                              </button>
                              <button class="btn btn-light" type="button" @click="deleteCategories(categories)" title="Suppression">
                                Supprimer
                              </button>
                            </div>
                          </form>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
// Bibliothèque Firestore : import des fonctions
import { 
    getFirestore, 
    collection, 
    doc, 
    getDocs, 
    addDoc, 
    updateDoc, 
    deleteDoc, 
    onSnapshot, 
    orderBy
    } from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js'

import { SearchIcon } from "@heroicons/react/outline";

export default {
  name:'ListeView',
  components: {
      SearchIcon,
  },
  data() {
    return {
      listeCategories:[],  // Liste des pays - collection pays Firebase
      categories: {
        cat:null, // Pour la création d'un nouveau pays
      },
      filter:''
    }
  },
  computed:{
    // Tri des pays par nom en ordre croissant
    orderByName:function(){
      // Parcours et tri des pays 2 à 2
      return this.listeCategories.sort(function(a,b){
        // Si le nom du pays est avant on retourne -1
        if(a.cat < b.cat) return -1;
        // Si le nom du pays est après on retourne 1
        if(a.cat > b.cat) return 1;
        // Sinon ni avant ni après (homonyme) on retourne 0
        return 0;
      });
    },
    // Filtrage de la propriété calculée de tri
    filterByName:function(){
      // On effectue le fitrage seulement si le filtre est rnseigné
      if(this.filter.length > 0){
        // On récupère le filtre saisi en minuscule (on évite les majuscules)
        let filter = this.filter.toLowerCase();
        // Filtrage de la propriété calculée de tri
        return this.orderByName.filter(function(categories){
          // On ne renvoie que les pays dont le nom contient 
          // la chaine de caractère du filtre
          return categories.cat.toLowerCase().includes(filter);
        })
      }else{
        // Si le filtre n'est pas saisi
        // On renvoie l'intégralité de la liste triée
        return this.orderByName;
      }
    }
  },
  mounted(){ // Montage de la vue
    // Appel de la liste des pays synchronisée
    this.getCategories();
  },
  methods: {
    async getCategories(){
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document pays
      const dbCategories= collection(firestore, "categories");
      // Liste des pays synchronisée
      const query = await onSnapshot(dbCategories, (snapshot) =>{
      console.log('query', query);
        //  Récupération des résultats dans listePaysSynchro
        // On utilse map pour récupérer l'intégralité des données renvoyées
        // on identifie clairement le id du document
        // les rest parameters permet de préciser la récupération de toute la partie data
        this.listeCategories = snapshot.docs.map(doc => ({id:doc.id, ...doc.data()}));
        console.log('listeCategories', this.listeCategories);
      })      
    },

    async createCategories(){
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document pays
      const dbCategories= collection(firestore, "categories");
      // On passe en paramètre format json
      // Les champs à mettre à jour
      // Sauf le id qui est créé automatiquement    
      const docRef = await addDoc(dbCategories,{
          cat: this.categories.cat,
      })
      console.log('document créé avec le id : ', docRef.id);
    },

    async updateCategories(categories){
        // Obtenir Firestore
        const firestore = getFirestore();
        // Base de données (collection)  document pays
        // Reference du pays à modifier
        const docRef = doc(firestore, "categories", categories.id);
        // On passe en paramètre format json
        // Les champs à mettre à jour
        await updateDoc(docRef, {
            cat: categories.cat
        }) 
      },

      async deleteCategories(categories){
          // Obtenir Firestore
          const firestore = getFirestore();
          // Base de données (collection)  document pays
          // Reference du pays à supprimer
          const docRef = doc(firestore, "categories", categories.id);
          // Suppression du pays référencé
          await deleteDoc(docRef);
        },

  }
}
</script>

<style scoped>
</style>


