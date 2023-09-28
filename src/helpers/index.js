import { toDate } from 'date-fns'

function formatDate (date) {
   const newDate = toDate(date)
   const options = {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
   }

   return newDate.toLocaleDateString('es-ES', options)
}



export {
    formatDate
}
