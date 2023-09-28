import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "../config/firebase";
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'



export const useNoticiasStore = defineStore('noticias', () => {

    const noticiasIndex = ref([])
    const loading = ref(false)
    const noticiasRef = collection(db, "noticias");

    async function getNoticias() {
        loading.value = true
       try {
        const q = query(noticiasRef, orderBy("fecha", "desc"));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            noticiasIndex.value.push({...doc.data(), id: doc.id})
        });
       } catch (error) {
        console.log(error)
       }finally {
        loading.value = false;
       }
    }

    const noticiasCortadas = computed(() => {
        const filteredArrayNoticias = noticiasIndex.value.slice(1, 4)
        return filteredArrayNoticias
    })

    const deleteLatestNew = computed(()=> {
       const newArray = noticiasIndex.value.slice(1)
       return newArray
    })


    return {
        noticiasIndex,
        loading,
        getNoticias,
        noticiasCortadas,
        deleteLatestNew
    }
})  