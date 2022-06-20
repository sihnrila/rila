<template>
<!-- nav start -->
        <nav class="navbar fixed-top navbar-expand-lg bg-light">
            <div class="container-fluid">
              <a href="#" class="navbar-brand">RILA</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#aboutMe">ABOUT</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#skill">SKILLS</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#work">WORKS</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#contact">CONTACT</a>
                  </li>
                </ul>
              </div>
            </div>
        </nav>
        <!-- nav end -->
 <router-view/>
</template>


<style lang="scss">
@import '~@/assets/scss/style';
</style>
