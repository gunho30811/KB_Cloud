<template>
  <div class="row ">
    <BlogPost
    class="col mx-1 mt-4 py-3"
      v-for="(post, index) in posts"
      :key="index"
      :imageSrc="post.imageSrc"
      :category="post.category"
      :title="post.title"
      :description="post.description"
    />
  </div>
</template>

<script>
import BlogPost from "@/components/BlogPost.vue";

export default {
  name: "BlogPostGrid",
  components: {
    BlogPost
  },
  data() {
    return {
      posts: [
        {
          imageSrc: require('@/assets/img/news1.png'),
          category: "금융",
          title: "코스피, 미 물가 둔화에 장중 연고점 근접…2750대 마감",
          description: "코스피가 미국의 물가 둔화 신호 및 인공지능(AI) 반도체 랠리를 타고 종가 기준 연고점 부근까지 다가섰다. 13일 한국거래소에서 코스피는 장중 1% 넘는 상승세를 유지하다가 장 막판에 오름폭을 줄여 전 거래일보다 26.72(0.98%) 오른 2754.89로 마감했다. 장 초반에는 1.78%까지 오른 2776.72를 기록하며 장중 연고점(3월 26일 2779.40)에 근접했다."
        },
        {
          imageSrc: require('@/assets/img/news2.png'),
          category: "기업PR",
          title: "국민대, 한국파스퇴르연구소와 연구·기술사업화 위한 MOU 체결",
          description: "국민대학교(총장 정승렬) 산학협력단이 ㈜국민대학교기술지주(대표이사 이인형), (재)한국파스퇴르연구소(소장 장승기)와 지난 6월 11일(목) 한국파스퇴르연구소에서 공동 연구개발 및 기술사업화의 활성화를 위한 업무협약 체결식을 진행했다."
        },
        {
          imageSrc: require('@/assets/img/news3.png'),
          category: "산업",
          title: "이재용 “삼성답게 미래 개척”…미국 2주 출장 마치며",
          description: "이재용 삼성전자 회장이 메타(페이스북·인스타그램 운영사), 아마존, 퀄컴 등 미국 빅테크 최고경영자(CEO·시이오)를 잇달아 만나 사업 협력 방안을 논의했다. 이 회장은 최근 삼성전자가 반도체 사업 등에서 위기에 놓인 상황을 의식한 듯 출장을 마치며 “삼성답게 미래를 개척하자”고 말했다.",
        },
        {
          imageSrc: require('@/assets/img/news4.png'),
          category: "금융",
          title: "한국거래소 사외이사에 민병덕 전 국민은행장·김성환 한투증권 대표",
          description: "한국거래소가 민병덕 전 국민은행장과 김성환 한국투자증권 대표이사를 사외이사로 신규 선임했다. 한국거래소는 13일 서울사옥에서 제2차 임시 주주총회를 열고 두 사람을 사외이사로 선임하는 안건을 통과시켰다. 민 전 은행장은 공익대표 사외이사, 김 대표는 업계대표다."
        }
      ]
    };
  }
};
</script>

<style scoped>
.blog-post-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 네개씩 정렬 */
  gap: 20px;
}

.blog-post {
  width: 100%; 
  
}
</style>
