<template>
  <div class='login'>
    <div class='form'>
      <div class='tab-content'>
        <div id='signup'>
          <h1>Login</h1>
          <form action='/' method='post'>
            <div class='field-wrap'>
              <label> Email Address<span class='req'>*</span> </label>
              <input type='email' required autocomplete='off' />
            </div>

            <div class='field-wrap'>
              <label> Set A Password<span class='req'>*</span> </label>
              <input type='password' required autocomplete='off' />
            </div>

            <button type='submit' class='button button-block'>
              Sign in
            </button>
          </form>
        </div>

        <div id='login'>
          <h1>Welcome Back!</h1>

          <form action='/' method='post'>
            <div class='field-wrap'>
              <label> Email Address<span class='req'>*</span> </label>
              <input type='email' required autocomplete='off' />
            </div>

            <div class='field-wrap'>
              <label> Password<span class='req'>*</span> </label>
              <input type='password' required autocomplete='off' />
            </div>

            <p class='forgot'><a href='#'>Forgot Password?</a></p>

            <button class='button button-block'>Log In</button>
          </form>
        </div>
      </div>
      <!-- tab-content -->
    </div>
    <!-- /form -->
  </div>
</template>

<style lang='scss' scoped>
.login{
  height: 80vh;
}

</style>
