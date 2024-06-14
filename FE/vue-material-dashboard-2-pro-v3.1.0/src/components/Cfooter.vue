<template>
  <q-footer class="bg-white text-black q-pa-md footer" elevated>
    <div class="q-container q-gutter-md">
      <q-card class="q-ma-md q-pa-sm q-card">
        <div class="footer-links q-my-md">
          <q-btn flat label="제휴문의" class="footer-link" />
          <q-separator vertical />
          <q-btn flat label="이용약관" class="footer-link" />
          <q-separator vertical />
          <q-btn flat label="개인정보처리방침" class="footer-link" />
          <q-separator vertical />
          <q-btn flat label="회원탈퇴" class="footer-link" />
        </div>
        <q-separator />
        <div class="footer-info q-my-md">
          <p>클라우덕(주) | 대표자: 라건호, 김현진, 박인용 | 주소: 서울 광진구 능동로 195-16 | 사업자등록번호: 000-00-00000</p>
          <p>이메일: gunho30811@naver.com</p>
          <p>Copyright ©2010 Realbyte Inc. All rights reserved.</p>
        </div>
      </q-card>
    </div>
  </q-footer>
</template>

<script>
export default {
  name: 'Cfooter',
}
</script>

<style scoped>
.footer {
  border-top: 1px solid #ddd;
  padding: 20px 0;
}

.q-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.footer-links {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  flex-wrap: wrap;
}

.footer-link {
  color: #333;
  text-decoration: none;
  margin: 0 5px;
}

.footer-info {
  text-align: center;
  font-size: 14px;
  color: #666;
  margin-bottom: 20px;
  line-height: 1.5;
}

.q-card {
  width: 100%;
  max-width: 800px;
}
</style>
