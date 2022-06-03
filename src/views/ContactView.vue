<template>
    <h2  class="text-5xl text-center text-black font-Title my-20 ">Contact</h2>
    <p class="text-base text-center text-black font-Corps my-10 mx-auto w-3/4 ">Cet évenement est organisé dans le cadre d’un exercice pédagogique au département 
        <span class="text-bleu">MMI de Montbéliard </span>. Je suis <span class="text-orange">Elias Mach-houty</span> et pendant plusieurs semaines nous 
        avons travaillé sur l’organisation d’un festival ainsi que son identité visuelle. 
        J’ai pensé à rendre hommage à ma région, <span class="text-rouge">la Bourgogne</span>, pour organisé le festival. 
        Si vous avez plus de question n’hésitez pas à m’envoyé une question par 
        l’intermédiaire du formulaire de contact ci-dessous.</p>

         <div>
        <form action="#" class="flex flex-col">
            <label for="name"></label>
            <input 
                class="bg-white text-black font-Corps text-base mb-5 p-1 w-5/12 border-2 border-black mx-auto rounded-lg"
                type="name"
                id="name"
                name="name"
                placeholder="Nom"
                />
            <label for="email"></label>
            <input 
            class="bg-white text-black font-Corps text-base mb-5 p-1 w-5/12 border-2 mx-auto border-black rounded-lg"
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            >
            <label for="message"></label>

            <textarea class="bg-white text-black font-Corps text-base mb-5 p-1 w-5/12 h-64 border-2 mx-auto border-black rounded-lg"
            type="message"
            id="message"
            name="message"
            placeholder="Votre Message"></textarea>

            <button type="submit" class="bg-bleu w-40 h-12 rounded-md justify-center items-center flex hover:bg-bleu  mx-auto">
                    <p class="font-Corps text-xl text-black">
                        Envoyer
                    </p>
            </button>
        </form>
    </div>
</template>