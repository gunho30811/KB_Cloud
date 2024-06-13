<template>
    <div class="mb-4 card">
        <div class="px-0 pt-0 pb-2 card-body">
            <div class="p-0 table-responsive">
                <table class="table mb-0 align-items-center">
                <thead>
                    <tr>
                        <th
                        v-for="(header, index) of headers"
                        :key="index"
                        :class="index >= 1 ? 'text-center ps-2' : ''"
                        class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                        >
                        {{ header }}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th v-for="(item, index) of members" :key="index">
                            {{ item }}
                        </th>
                    </tr>
                </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script setup>
import {ref, onMounted} from 'vue';
import axios from 'axios';

const members = ref([]);

onMounted(async () => {
    await fetchMembers();
});

const fetchMembers = async () => {
try {
    const response = await axios.get('/api/members');
    members.value = response.data;
} catch (error) {
    console.error('Failed to fetch members:', error);
}
};
</script>