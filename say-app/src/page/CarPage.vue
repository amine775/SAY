<template>
    <div id="page">
        <div id="content">
            <CarList/>
            <CarDetails/>
        </div>
    </div>
</template>

<script>
import CarList from '../components/CarList.vue'
import CarDetails from '../components/CarDetails.vue'
export default {
    components: {CarList, CarDetails}
}
</script>