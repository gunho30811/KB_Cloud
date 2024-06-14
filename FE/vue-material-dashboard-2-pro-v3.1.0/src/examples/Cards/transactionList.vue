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
                    <tr
                        v-for="(
                            { date, code, name, type, quantity, price, amount, profit }, index
                        ) in paginate(transations)"
                        :key="index"
                    >
                        <td>
                            <p class="text-center mb-0 text-sm font-weight-bold">
                            {{ code }}
                            </p>
                        </td>
                        <td>
                            <p class="text-center mb-0 text-sm font-weight-bold">
                                <span class="text-success">{{ date }}</span>
                            </p>
                        </td>
                        <td>
                            <p class="text-center mb-0 text-sm font-weight-bold">
                            {{ name }}
                            </p>
                        </td>
                        <td class="text-sm align-middle">
                            <p class="text-center mb-0 text-sm font-weight-bold">
                            {{ type }}
                            </p>
                        </td>
                        <td class="align-middle text-center">
                            <div
                            class="text-center px-3 py-1 d-flex justify-content-center align-items-center"
                            >
                            <p class="mb-0 text-sm font-weight-bold">
                                {{ quantity }}
                            </p>
                            </div>
                        </td>
                        <td>
                            <p class="text-center mb-0 text-sm font-weight-bold">
                            {{ price }}
                            </p>
                        </td>
                        <td>
                            <p class="text-center mb-0 text-sm font-weight-bold">
                            {{ amount }}
                            </p>
                        </td>
                        <td>
                            <p class="text-center mb-0 text-sm font-weight-bold"
                            :style="{ color: profit > 0 ? 'red' : 'blue' }">
                            {{ profit }}
                            </p>
                        </td>
                    </tr>
                </tbody>
                </table>
                <nav v-if="pageCount > 1">
                    <ul class="pagination justify-content-end">
                        <li :class="{'page-item': true, 'disabled': currentPage === 1}">
                            <a class="page-link" href="#" @click.prevent="changePage(currentPage - 1)">이전</a>
                        </li>
                        <li v-for="page in pageCount" :key="page" :class="{'page-item': true, 'active': currentPage === page}">
                            <a class="page-link" href="#" @click.prevent="changePage(page)">{{ page }}</a>
                        </li>
                        <li :class="{'page-item': true, 'disabled': currentPage === pageCount}">
                            <a class="page-link" href="#" @click.prevent="changePage(currentPage + 1)">다음</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</template>

<script setup>
import {ref, onMounted, computed} from 'vue';
import axios from 'axios';

const headers = ['종목코드', '거래일자', '종목명', '구분', '거래수량', '거래단가', '거래금액', '수익률']
const transations = ref([]);
const currentPage = ref(1);
const itemsPerPage = 10;

onMounted(async () => {
    await fetchTransactions();
});

const fetchTransactions = async () => {
try {
    const response = await axios.get('/api/transactions');
    transations.value = response.data;
} catch (error) {
    console.error('Failed to fetch transations:', error);
}
};

const paginate = (transactions) => {
    const startIndex = (currentPage.value - 1) * itemsPerPage;
    return transactions.slice(startIndex, startIndex + itemsPerPage);
};

const pageCount = computed(() => {
    return Math.ceil(transations.value.length / itemsPerPage);
});

const changePage = (page) => {
    currentPage.value = page;
};
</script>