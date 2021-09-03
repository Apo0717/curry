
  <div class="container" id="curryAll">
    <div class="search-bar">
      <input class="search-input" type="text" placeholder="輸入店家名稱" v-model="searchText" @keyup.enter="searchName(searchText)" @keyup="reset(searchText)">
      <div class="search-btn" @click="searchName(searchText)">開始找</div>
    </div>

    <div class="curryAll">
      <!-- 頭 -->
      <div class="row-head">
        <div class="title-box bd-r eat-check cursor">
          <i class="fas fa-sort-down"></i>
        </div>
        <div class="title-box bd-r location cursor" @click="isDrop = !isDrop">
          地點&nbsp&nbsp<i class="fas fa-sort-down"></i>
          <div class="dropdown-btn">
            <div class="dropdown-content" v-show="isDrop" v-for="(lo,key) in selectLocation" :key="key" @click="filterLocation(lo,key)">{{lo}}</div>
          </div>
        </div>
        <div class="dropdown-menu" id="locationAll"></div>
        <div class="title-box bd-r food-img">圖片</div>
        <div class="title-box bd-r name">店名</div>
        <div class="title-box bd-r web">網站</div>
        <div class="title-box bd-r adress">地址</div>
        <div class="title-box bd-r phone">電話</div>
        <div class="title-box bd-r open">營業時間</div>
        <div class="title-box repo">心得</div>
      </div>
      <!-- 身體 -->
      <div class="row-body" v-for="(item,k) in filterArray" :key="k">
        <div class="d-f">
          <div class="store-box eat-check">
            <input type="checkbox" v-model="item.isTasted">
          </div>
          <div class="store-box location">{{item.location}}</div>
          <div class="store-box food-img"><img :src="imgSrc" alt="/"></div>
          <div class="store-box name">{{item.name}}</div>
          <div class="store-box web">
            <a :href='item.web' target="_blank" title="店家網站">
              <i class="sns-i fas fa-home" title="店家網頁" v-show="item.web"></i>
            </a>
            <a :href='item.fb' target="_blank" title="FB粉絲專頁">
              <i class="sns-i fab fa-facebook-square" title="Facebook粉絲專頁" v-show="item.fb"></i>
            </a>
            <a :href='item.ig' target="_blank" title="">
              <i class="sns-i fab fa-instagram" title="官方Instagram" v-show="item.ig"></i>
            </a>
          </div>
          <div class="store-box adress">{{item.adress}}</div>
          <div class="store-box phone">{{item.phone}}</div>
          <div class="store-box open" v-html="item.open"></div>
          <div class="store-box repo">
            <i class=" cursor fas chevron fa-chevron-down" :class="item.objClass" @click="clickRepo(item)" v-show="item.repo[0].repoText"></i>
          </div>
        </div>
        <!-- 身體-展開的心得 -->
        <div class="row-repo d-f" :class="item.repoClass">
          <div class="repoImg">
            <img class="repoImg-100" :src="item.repo[0].repoImg" alt="/">
          </div>
          <div class="repo-text-area">
            <div class="day-time">2021-0825</div>
            <div class="recommend">個人推薦度：{{item.repo[0].repoStar}}</div>
            <div>
              {{item.repo[0].repoText}}
            </div>
            <div class="d-f-b">
              <div class="close cursor" @click="clickRepo(item)">
                收起 <i class="fas fa-chevron-up"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 頁碼 -->
      <div class="d-f pages-num">
        <button class="btn-page">上一頁</button>
        <!-- {{pageNumber}}
        {{pageNumArr}} -->
        <!-- <div v-for="page in pageNum">{{page}}??</div> -->
        <button class="btn-page">下一頁</button>
      </div>
    </div>