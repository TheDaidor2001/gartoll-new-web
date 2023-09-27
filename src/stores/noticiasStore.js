import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "../config/firebase";
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'



export const useNoticiasStore = defineStore('noticias', () => {

    const noticiasIndex = ref([])
    const noticiasRef = collection(db, "noticias");

    async function getNoticias() {
        const q = query(noticiasRef, orderBy("fecha", "desc"));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            noticiasIndex.value.push(doc.data())
        });
        console.log(noticiasIndex.value)
    }

    const noticiasCortadas = computed(() => {
        const filteredArrayNoticias = noticiasIndex.value.slice(1, 4)
        return filteredArrayNoticias
    })


    return {
        noticiasIndex,
        getNoticias,
        noticiasCortadas
    }
})  