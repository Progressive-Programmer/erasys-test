commit 32ab1b93e356c0152396afa5c49026697b7ec479 (HEAD -> master, origin/master)
Author: Aman <aman.singh@subcodevs.com>
Date:   Sun Jul 11 17:57:42 2021 +0530

    routes folder removed

 src/Routes/Routes.js | 14 --------------
 src/Routes/index.js  |  1 -
 2 files changed, 15 deletions(-)

commit a8316e75d0fd23f5efe13786c621fc015a380c22
Author: Aman <aman.singh@subcodevs.com>
Date:   Sun Jul 11 17:50:25 2021 +0530

    modal popup view added

 src/App.css             |  2 --
 src/Screens/Profiles.js |  0
 src/Screens/Users.css   | 44 +++++++++++++++++++++++--
 src/Screens/Users.js    | 87 +++++++++++++++++++++++++++++++++++++++++++++++---
 src/Screens/index.js    |  1 -
 src/Services/Utils.js   |  8 ++++-
 6 files changed, 131 insertions(+), 11 deletions(-)

commit b1eef2094d375e5478a0045d909f0dcfcdd36b04
Author: Aman <aman.singh@subcodevs.com>
Date:   Sun Jul 11 15:19:20 2021 +0530

    headline added

 src/App.js            |  1 -
 src/Screens/Users.css | 13 +++++++++++--
 src/Screens/Users.js  |  4 ++--
 3 files changed, 13 insertions(+), 5 deletions(-)

commit 0e5324ed0e650ff6aab637b068cf4bf89d350463
Author: Aman <aman.singh@subcodevs.com>
Date:   Sun Jul 11 14:47:36 2021 +0530

    userGrid  col size changed to 180px+ cursor added to topbar

 README.md              | 6 ++++--
 src/Screens/NavBar.css | 6 +++++-
 src/Screens/NavBar.js  | 4 ++--
 src/Screens/Users.css  | 7 +++++--
 src/Screens/Users.js   | 7 +++----
 5 files changed, 19 insertions(+), 11 deletions(-)

commit 06e79231d283325b5fd1fbda459d69bb6d85e4f2
Author: Aman <aman.singh@subcodevs.com>
Date:   Sun Jul 11 14:16:53 2021 +0530

    showskeleton added for refresh

 src/Screens/NavBar.js | 14 ++++++++++----
 1 file changed, 10 insertions(+), 4 deletions(-)

commit c0d12cfdb39df8d2fd506d1209d950961b738d95
Author: Aman <aman.singh@subcodevs.com>
Date:   Sun Jul 11 14:05:02 2021 +0530

    lastloginDuration view added

 package-lock.json     |  5 +++++
 package.json          |  4 +++-
 src/Screens/Users.css | 35 +++++++++++++++++++++++++----------
 src/Screens/Users.js  | 25 +++++++++++++++++++++----
 src/Services/Utils.js | 50 ++++++++++++++++++++++++++++++++++++++++++++++++++
 src/Services/index.js |  3 ++-
 6 files changed, 106 insertions(+), 16 deletions(-)

commit 83ac92a38302b0b31069edca467a3c6d38262518
Merge: 93750a8 d5be304
Author: Aman <aman.singh@subcodevs.com>
Date:   Sat Jul 10 23:31:22 2021 +0530

    pull conflict resolved- README.md

commit 93750a89315c360b4d33a5da53f306f7a47b11ae
Author: Aman <aman.singh@subcodevs.com>
Date:   Sat Jul 10 23:29:51 2021 +0530

    header logo + logoMobile added

 README.md              |   2 +-
 package-lock.json      | 542 ++++++++++++++++++++++++++++++++++++++++++++++++++
 package.json           |   1 +
 src/App.js             |  13 +-
 src/Context/Reducer.js |   7 +
 src/Screens/NavBar.css |  18 +-
 src/Screens/NavBar.js  |  14 +-
 7 files changed, 579 insertions(+), 18 deletions(-)

commit d5be30485ad05bc3bd43636fabce4b6acd622ea5
Author: Aman Singh <v4vendetta5v@gmail.com>
Date:   Sat Jul 10 03:49:43 2021 +0530

    Update README.md
    
    updates added

 README.md | 6 ++++++
 1 file changed, 6 insertions(+)

commit 1cc38365f1674823d4278acd03b5a3b3712a0080
Author: Aman Singh <v4vendetta5v@gmail.com>
Date:   Sat Jul 10 03:47:48 2021 +0530

    Update README.md
    
    removed old text

 README.md | 63 +--------------------------------------------------------------
 1 file changed, 1 insertion(+), 62 deletions(-)

commit 3c7bdcaa03026b0cbccb1cfc5fc01613f5920a76
Author: Aman Singh <v4vendetta5v@gmail.com>
Date:   Sat Jul 10 03:46:14 2021 +0530

    Update README.md
    
    current image+ update added

 README.md | 5 +++++
 1 file changed, 5 insertions(+)

commit fce4085c992176b122eb0f7664c45bb3fde8240b
Author: Aman <aman.singh@subcodevs.com>
Date:   Sat Jul 10 03:41:44 2021 +0530

    readme update

 README.md | 4 ++++
 1 file changed, 4 insertions(+)

commit 281c5e238f5b1cd48bc83b758746f67459961d8e
Author: Aman <aman.singh@subcodevs.com>
Date:   Sat Jul 10 03:36:43 2021 +0530

    online-status added

 src/Screens/NavBar.css | 14 +++++++++++++-
 src/Screens/NavBar.js  |  2 +-
 src/Screens/Users.css  | 10 ++++++++--
 src/Screens/Users.js   | 10 +++++++++-
 4 files changed, 31 insertions(+), 5 deletions(-)

commit 4a0bc360d150718b6fbeb0cb1287826e4d9a776c
Author: Aman <aman.singh@subcodevs.com>
Date:   Sat Jul 10 02:53:25 2021 +0530

    skeleton added im NAvBar.js

 package-lock.json     | 100 +++++++++++++++++++++++++++++++++++++++++++++++++++
 package.json          |   1 +
 src/App.js            |   5 +--
 src/Screens/NavBar.js |  24 +++++++++----
 src/Screens/Users.js  |   4 +--
 5 files changed, 121 insertions(+), 13 deletions(-)

commit 67e2e7cb5e7aad700a37d6bbb761815a9fff511f
Author: Aman <aman.singh@subcodevs.com>
Date:   Sat Jul 10 01:45:18 2021 +0530

    user detials combined from apis+ user data display updated

 src/Screens/NavBar.js | 29 +++++++++++++++++++++++------
 src/Screens/Users.js  | 11 ++++++-----
 2 files changed, 29 insertions(+), 11 deletions(-)

commit 2f715536092e8c2b82d2b036fc8f29d66f672cad
Author: Aman <aman.singh@subcodevs.com>
Date:   Sat Jul 10 01:19:42 2021 +0530

    fetch user profile based in id function added

 package-lock.json          | 278 ++++++++++++++++++++++++++++++++++++++++++++++
 package.json               |   3 +
 src/App.js                 |   5 +-
 src/Context/Reducer.js     |  18 ++-
 src/Screens/NavBar.js      |  76 ++++++++++++-
 src/Screens/Users.js       |  32 +-----
 src/Services/ApiService.js |   2 +-
 7 files changed, 380 insertions(+), 34 deletions(-)

commit 396a50dee4744ee10048ce590da11a2f58536a8d
Author: Aman <aman.singh@subcodevs.com>
Date:   Fri Jul 9 20:08:38 2021 +0530

    StateProvider added to index.js

 src/index.js | 6 +++++-
 1 file changed, 5 insertions(+), 1 deletion(-)

commit 44a80cbf7f450925180da8c4a5b01b7cb88793dc
Author: Aman <aman.singh@subcodevs.com>
Date:   Fri Jul 9 20:06:20 2021 +0530

    React Contect API setup- reducer.js

 src/Context/Reducer.js | 24 ++++++++++++++++++++++++
 1 file changed, 24 insertions(+)

commit f6175abde41e305cc03458107c6c206ed8cfbcb9
Author: Aman <aman.singh@subcodevs.com>
Date:   Fri Jul 9 20:05:12 2021 +0530

    React Context API setup - StateProvider.js

 src/Context/Reducer.js       |  0
 src/Context/StateProvider.js | 14 ++++++++++++++
 src/Screens/NavBar.css       |  7 ++++---
 src/Screens/NavBar.js        | 16 ++++++++++++----
 4 files changed, 30 insertions(+), 7 deletions(-)

commit 97fc9c94d727a2966b51ab08c0831fc890b98555
Author: Aman <aman.singh@subcodevs.com>
Date:   Fri Jul 9 19:40:51 2021 +0530

    dynamic data-api + banar logo added

 src/App.css                                         |  6 ++-
 src/App.js                                          |  3 +-
 src/Assets/romeo_img.svg                            |  1 +
 ...8e4d58c794913584af8d7707d.svg => romeo_logo.svg} |  0
 ...ffacd9449dd657028b6cc7c1.svg => romeo_logo2.svg} |  0
 src/Assets/romeo_logo3.svg                          |  1 +
 src/Screens/NavBar.css                              | 18 +++++++-
 src/Screens/NavBar.js                               | 17 +++++++-
 src/Screens/Users.css                               |  5 ++-
 src/Screens/Users.js                                | 50 +++++++++++++---------
 10 files changed, 73 insertions(+), 28 deletions(-)

commit 020d29d54e061d6e55f56a9fcc393998c427e11e
Author: Aman <aman.singh@subcodevs.com>
Date:   Fri Jul 9 16:51:07 2021 +0530

    static-userpage headers footer added

 package-lock.json                               | 272 +++++++++++++++++++++++++
 package.json                                    |   5 +-
 public/index.html                               |   3 +
 src/App.css                                     |  47 ++---
 src/App.js                                      |  22 +-
 src/Assets/5721e7b8e4d58c794913584af8d7707d.svg |   1 +
 src/Assets/eb7c992bffacd9449dd657028b6cc7c1.svg |   1 +
 src/Routes/Routes.js                            |  14 ++
 src/Routes/index.js                             |   1 +
 src/Screens/Footer.css                          |   7 +
 src/Screens/Footer.js                           |  10 +
 src/Screens/NavBar.css                          |  61 ++++++
 src/Screens/NavBar.js                           |  31 +++
 src/Screens/Profiles.js                         |   0
 src/Screens/Users.css                           |  54 +++++
 src/Screens/Users.js                            |  50 +++++
 src/Screens/index.js                            |   4 +
 src/index.css                                   |   7 +
 src/index.js                                    |   2 +
 19 files changed, 550 insertions(+), 42 deletions(-)

commit ef75d5901af50608124c7f30ae49620770403d30
Author: Aman <aman.singh@subcodevs.com>
Date:   Wed Jul 7 16:56:10 2021 +0530

    ApiService.js: api services added

 package-lock.json          |  8 ++++++++
 package.json               |  4 +++-
 src/Services/ApiService.js | 14 ++++++++++++++
 src/Services/index.js      |  1 +
 4 files changed, 26 insertions(+), 1 deletion(-)

commit 311cc41ffd7de0af3ec9af7675e37481eb771925
Author: Aman <aman.singh@subcodevs.com>
Date:   Wed Jul 7 14:44:21 2021 +0530

    Initialize project using Create React App

 .gitignore             |    23 +
 README.md              |    70 +
 package-lock.json      | 16246 ++++++++++++++++++++++++++++++++++++++++++++++++
 package.json           |    38 +
 public/favicon.ico     |   Bin 0 -> 3870 bytes
 public/index.html      |    43 +
 public/logo192.png     |   Bin 0 -> 5347 bytes
 public/logo512.png     |   Bin 0 -> 9664 bytes
 public/manifest.json   |    25 +
 public/robots.txt      |     3 +
 src/App.css            |    38 +
 src/App.js             |    25 +
 src/App.test.js        |     8 +
 src/index.css          |    13 +
 src/index.js           |    17 +
 src/logo.svg           |     1 +
 src/reportWebVitals.js |    13 +
 src/setupTests.js      |     5 +
 18 files changed, 16568 insertions(+)