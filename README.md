<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="./css/main.css">
    <link rel="stylesheet" href="./css/home.css">
    <link rel="stylesheet" href="./css/products.css">
    <link rel="stylesheet" href="./css/footer.css">

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="./imgonline-com-ua-favicon-eI2Vby7JSz1l.ico" type="image/png">
    <title>BigSell</title>
</head>
<body>
    <div class="wrapper">
        <!-- header + navbar -->
        <div class="nav_bar_close">
            <div class="nav_bar_container">
                <ul class="nav_bar_list">
                    <li class="nav_bar_item" onclick="myfunction()"><h3><a href="#">Home</a></h3></li>
                    <li class="nav_bar_item" onclick="about_us_function()"><h3><a href="#">About us</a></h3></li>
                    <li class="nav_bar_item" onclick="Contacts_function()"><h3><a href="#">Contacts</a></h3></li>
                    <li class="nav_bar_item" onclick="News_function()"><h3><a href="#">News</a></h3></li>
                </ul>
                <div class="about_us_info_close">
                    Это цифровой магазин &#128513;
                </div>
                <div class="Contacts_info_close">
                    Вот дс наших администраторо<h3>>Frospik#0440</h3> <h3>>twinkiwinki.#8389</h3>
                </div>
                <div class="News_info_close">
                    Переходите на наш <h3><a href="https://discord.gg/dwgss9xD3U">Discord</a></h3>сервер, или на <h3><a href="https://t.me/Big_Sell_Top">тг канал</a></h3> и узнавайте всю интересующую информацию &#128522;
                </div>
            </div>
        </div>
        <header class="header">
            <div class="icon">
                <a href="index.html">
                    <h1><p>BigSell</p></h1>
                </a>
            </div>

            <div class="burger_btn" onclick="myfunction()">
                <div class="burger_container">
                    <span class="burger_item"></span>
                    <span class="burger_item"></span>
                    <span class="burger_item"></span>
                </div>
            </div>
        </header>
        <!-- header + navbar -->

        <!-- main 'home' -->
        <main class="main_block">
            <div class="sell_stocks">
                <h1>Акции</h1>
                <p>Не упусти возможность сэкономить!</p>
            </div>
            <div class="slider_container"> 
                <div class="slider">
                    <img src="./img_main_page/17718274-4140-42f8-afcc-c167f93d81a7.jpg" alt="fortnite">
                    <img src="./img_main_page/7eccf914-adfc-4923-b292-baa222a3df21.jpg" alt="minecraft">
                    <img src="./img_main_page/8a797aef-1c88-40a5-bf1b-7a1a9479df46.jpg" alt="roblox">
                </div>
                <button class="prev_btn" aria-label="предыдущий слайд">&lt;</button>
                <button class="next_btn" aria-label="следующий слайд">&gt</button>
            </div>
        </main>
        <!-- main 'home' -->

        <!-- products -->
        <div class="products">

            <div class="products_cards_container">
                <div class="title">
                    <h1>Discord</h1>
                </div>
                <div class="nitro_container">
                    <div class="product_card_nitro">
                        <img class="img_nitro" src="./img_main_page/products_img/EGS_Discord_Nitro_Mobile_1200x1600_1200x1600-98bc3f097023a53fca0c6a6c6781c9f5.png" alt="Nitro">
                        <div class="product_nitro_info">
                            <h3>Nitro Full 1 Month</h3>
                            <p>Со входом на аккаунт</p>
                            <h2>650₽</h2>
                        </div>
                        <div class="buy_btn">
                            <h2><a href="https://payok.io/pay?amount=650&payment=120&desc=Nitro%20Full%201%20Month%20&shop=8485&sign=9b7977887ac670d144af5f529a7b2b00">Купить</a></h2>
                        </div>
                    </div>
    
                    <div class="product_card_nitro_basic" id="basic">
                        <img class="img_nitro" src="./img_main_page/products_img/EGS_Discord_Nitro_Mobile_1200x1600_1200x1600-98bc3f097023a53fca0c6a6c6781c9f5.png" alt="Nitro">
                        <div class="product_nitro_info">
                            <h3>Nitro Basic 1 Month</h3>
                            <p>Со входом на аккаунт</p>
                            <h2>130₽</h2>
                        </div>
                        <div class="buy_btn">
                            <h2><a href="https://payok.io/pay?amount=130&payment=122&desc=Nitro%20Basic%201%20Month&shop=8485&sign=fc30fcdc566109e43ea95cd849319cbb">Купить</a></h2>
                        </div>
                    </div>
                </div>

                <div class="title">
                    <h1>Fortnite</h1>
                </div>

                <div class="fortnite_container">
                    <div class="product_card_v_bucks">
                        <img class="img_v_bucks" src="./1000.jpg" alt="V-Bucks">
                        <div class="product_v_bucks_info">
                            <h3>1000 V-BUCKS</h3>
                            <p>Со входом на аккаунт</p>
                            <h2>590₽</h2>
                        </div>
                        <div class="buy_btn">
                            <h2><a href="https://payok.io/pay?amount=590&payment=123&desc=1000&shop=8485&sign=adec429013ec25ae5a865bfab2b2804e">Купить</a></h2>
                        </div>
                    </div>
                    <div class="product_card_v_bucks">
                        <img class="img_v_bucks" src="./2800.jpg" alt="V-Bucks">
                        <div class="product_v_bucks_info">
                            <h3>2800 V-BUCKS</h3>
                            <p>Со входом на аккаунт</p>
                            <h2>800₽</h2>
                        </div>
                        <div class="buy_btn">
                            <h2><a href="https://payok.io/pay?amount=800&payment=124&desc=2800&shop=8485&sign=1e749e53449672fc7b92a85297046c0e">Купить</a></h2>
                        </div>
                    </div>
                    <div class="product_card_v_bucks">
                        <img class="img_v_bucks" src="./5000.jpg" alt="V-Bucks">
                        <div class="product_v_bucks_info">
                            <h3>5000 V-BUCKS</h3>
                            <p>Со входом на аккаунт</p>
                            <h2>1300₽</h2>
                        </div>
                        <div class="buy_btn">
                            <h2><a href="https://payok.io/pay?amount=1300&payment=125&desc=5000&shop=8485&sign=43f0b275614dfb6c826a11c9d7460aa7">Купить</a></h2>
                        </div>
                    </div>
                    <div class="product_card_v_bucks">
                        <img class="img_v_bucks" src="./13500.jpg" alt="V-Bucks">
                        <div class="product_v_bucks_info">
                            <h3>13500 V-BUCKS</h3>
                            <p>Со входом на аккаунт</p>
                            <h2>2300₽</h2>
                        </div>
                        <div class="buy_btn">
                            <h2><a href="https://payok.io/pay?amount=2300&payment=126&desc=13500&shop=8485&sign=977b005bac93880610fecd0336d7e973">Купить</a></h2>
                        </div>
                    </div>
                </div>

                <div class="crew">
                    <div class="product_card_crew">
                        <img class="img_v_bucks" src="./img_main_page/products_img/ru-15br-subs-followup-social-1920x1080-1920x1080-2df06d9be16b.jpg" alt="V-Bucks">
                        <div class="product_v_bucks_info">
                            <h3>FORTNITE CREW</h3>
                            <p>Со входом на аккаунт</p>
                            <h2>670₽</h2>
                        </div>
                        <div class="buy_btn">
                            <h2><a href="https://payok.io/pay?amount=670&payment=127&desc=FORTNITE%20CREW%20&shop=8485&sign=3976da0a36aae6a498a957a06ddffa20">Купить</a></h2>
                        </div>
                    </div>
                </div>

            </div>
            
        </div>
        <!-- products -->

        <footer class="footer">
            <div class="footer_text">
                <div class="text_info_footer">
                    <p>©2023-2024</p>
                    <p> Все права защищены. BigSell.</p>
                    <a href="https://telegra.ph/Politika-Konfidencialnosti-BigSell-03-13">
                        <p>Политика Конфиденциальности</p>
                    </a>
                    <a href="https://telegra.ph/Polzovatelskoe-Soglashenie-dlya-sajta-magazina-BigSell-03-17">
                        <p>Пользовательское Соглашение</p>
                    </a>
                </div>
                <div class="tg_ds_link">
                    <a class="tg_link" href="https://discord.gg/9FusyPJYxb">
                        <svg width="30px" height="30px" viewBox="0 -28.5 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid">
                            <g>
                                <path d="M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z" fill="#fff" fill-rule="nonzero">
                        
                        </path>
                            </g>
                        </svg>
                        <p>Наш Discord</p>
                    </a>
                    <a class="ds_link" href="https://t.me/Big_Sell_Top">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
                            <path fill="#fff" d="M5.83,23.616c12.568-5.529,28.832-12.27,31.077-13.203c5.889-2.442,7.696-1.974,6.795,3.434 c-0.647,3.887-2.514,16.756-4.002,24.766c-0.883,4.75-2.864,5.313-5.979,3.258c-1.498-0.989-9.059-5.989-10.7-7.163 c-1.498-1.07-3.564-2.357-0.973-4.892c0.922-0.903,6.966-6.674,11.675-11.166c0.617-0.59-0.158-1.559-0.87-1.086 c-6.347,4.209-15.147,10.051-16.267,10.812c-1.692,1.149-3.317,1.676-6.234,0.838c-2.204-0.633-4.357-1.388-5.195-1.676 C1.93,26.43,2.696,24.995,5.83,23.616z"></path>
                        </svg>
                        <p>Наш Telegram</p>
                    </a>
                </div>
            </div>
        </footer>
    </div>
    <script src="./js/main.js"></script>
    <script src="./js/main_page.js"></script>
</body>
</html>
