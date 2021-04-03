<?php
include_once "header.php";
?>
<body>
<div class="container">
    <div class="wrapper">
        <section class="form login">
            <header>RealTime Chat App</header>
            <form action="#">
                <div class="error-text"></div>
                <div class="field input">
                    <label>Email Address</label>
                    <input type="email" name="email" placeholder="Enter your email">
                </div>
                <div class="field input">
                    <label>Password</label>
                    <input type="password" name="password" placeholder="Enter your password">
                    <i class="fas fa-eye"></i>
                </div>
                <div class="field button">
                    <input type="submit" value="Continue to Chat">
                </div>
            </form>
            <div class="link">Not yet signed up? <a href="index.php">Signup now</a></div>
        </section>
    </div>
</div>
<script src="/js/passwordShowHide.js" defer type="module"></script>
<script src="/js/login.js" defer type="module"></script>

</body>
</html>
