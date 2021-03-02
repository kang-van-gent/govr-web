<template>
  <div class="home">
    <!-- Category News Start-->
    <div class="cat-news">
      <div class="container">
        <b-row class="row">
          <b-col
            v-for="content in contents"
            :key="content"
            class="col-lg-3 col-md-6"
          >
            <div class="cn-img">
              <img :src="content.image" />
              <div class="cn-title">
                <a href="">{{ content.title }}</a>
              </div>
            </div>
          </b-col>
        </b-row>
      </div>
    </div>
    <!-- Category News End-->
  </div>
</template>

<style scoped>
.cat-news {
  margin: 50px 0 50px 0;
}
.cat-news .cn-img {
  width: 100%;
  height: 100%;
}
/**********************************/
/******* Category News CSS ********/
/**********************************/
.cat-news {
  position: relative;
  width: 100%;
  padding: 0;
}

.cat-news .col-md-6 {
  margin-bottom: 20px;
  height: 300px;
}

.cat-news h2 {
  color: #000000;
  margin-bottom: 30px;
  padding-bottom: 15px;
  border-bottom: 3px double #000000;
}

.cat-news .cn-img {
  position: relative;
  overflow: hidden;
  cursor: pointer;
  border-radius: 10px;
}

.cat-news .cn-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.cat-news .cn-img:hover img {
  filter: blur(3px);
  -webkit-filter: blur(3px);
  transition: 0.5s;
}

.cat-news .cn-title {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 15px 10px 15px 20px;
  background-image: linear-gradient(
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.3),
    rgba(0, 0, 0, 0.9)
  );
  display: flex;
  align-items: flex-end;
}

.cat-news .cn-title a {
  display: block;
  width: 100%;
  color: #ffffff;
  font-size: 18px;
  font-weight: 400;
  transition: 0.3s;
}

.cat-news .cn-title a:hover {
  color: #ffa94c;
}

</style>

<script>
import contents from '@/data/contents'
export default {
  name: 'Home',
  data () {
    return {
      contents
    }
  }
}
</script>
