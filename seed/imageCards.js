const ImageCard = require('../server/db/models/imageCard');

const imageCards = [
   new ImageCard ({
    image: "https://pmcdeadline2.files.wordpress.com/2019/10/shutterstock_editorial_10434333bm.jpg?crop=0px%2C0px%2C2903px%2C1627px&resize=681%2C383",
}),
  new ImageCard({
    image: "https://si.wsj.net/public/resources/images/AR-AM060_JORDAN_P_20160203123002.jpg",
}),
  new ImageCard({
    image: "https://i.pinimg.com/originals/70/a5/fc/70a5fcc9738f9bb8b58bd7b66c6e0946.png",
}),
  new ImageCard({
    image: "https://pics.me.me/thumb_meme-dad-a-quick-and-easy-meme-generator-free-51894659.png",
}),
new ImageCard ({
  image: "https://i1.wp.com/www.sydneyjanebaily.com/wp-content/uploads/2014/12/0tsVo2k.gif?resize=500%2C375",
}),
new ImageCard({
  image: "https://www.meme-arsenal.com/memes/072e3bda503faa894d1688ac48554fe1.jpg",
}),
new ImageCard({
  image: "https://totalibrods.files.wordpress.com/2014/05/nowordmeme8.jpg",
}),
new ImageCard({
  image: "https://thehowler.org/wp-content/uploads/2018/01/roll-safe-meme-1.jpg",
}),
new ImageCard ({
  image: "https://miro.medium.com/focal/768/404/80/38/1*nTpz3l7JRujBP_qWxyzt8w.jpeg",
}),
new ImageCard({
  image: "https://i.pinimg.com/236x/84/ea/d8/84ead82d054064ee6f2e2a2ea5cb70e7.jpg",
}),

new ImageCard({
  image: "https://i.pinimg.com/474x/f8/e5/91/f8e5915cca583fec39a026e1998c3e45.jpg",
}),

new ImageCard({
  image: "https://cdn.cnn.com/cnnnext/dam/assets/190517103414-01-grumpy-cat-file-restricted-super-tease.jpg"
}), 
new ImageCard({
  image: "https://i.kym-cdn.com/entries/icons/original/000/006/236/1stWorld.jpg"
}), 
new ImageCard({
  image: "https://media.wired.com/photos/59a459d3b345f64511c5e3d4/master/pass/MemeLoveTriangle_297886754.jpg"
}),
new ImageCard({
  image: "https://upload.wikimedia.org/wikipedia/en/thumb/6/62/Kermit_the_Frog.jpg/220px-Kermit_the_Frog.jpg"
}), 
new ImageCard({
  image: "https://www.memesmonkey.com/images/memesmonkey/65/65c64b06abd292c176b408f19a5436d9.jpeg"
}),
new ImageCard({
  image: "https://i.kym-cdn.com/entries/icons/original/000/000/745/success.jpg",
}),
new ImageCard({
  image: "https://i.imgflip.com/35t925.jpg"
}), 
new ImageCard({
  image: "https://i.kym-cdn.com/entries/icons/original/000/016/546/hidethepainharold.jpg"
}),
new ImageCard({
  image: "https://i.kym-cdn.com/photos/images/newsfeed/000/839/182/45a.gif"
}),
new ImageCard({
  image: "https://upload.wikimedia.org/wikipedia/en/2/2b/Bad_Luck_Brian.jpg",
}),
new ImageCard({
  image: "https://i.kym-cdn.com/entries/icons/original/000/034/156/9KH8aOe.jpg",
}),
new ImageCard ({
  image: "https://i.pinimg.com/474x/33/eb/18/33eb18a9662394b3b6d453fa1e809c4e.jpg",
}),
new ImageCard({
  image: "https://i.pinimg.com/474x/69/7f/ca/697fca32e9f2823bb4ae4094155b1959.jpg",
}),
new ImageCard({
  image: "https://i.pinimg.com/474x/fc/34/dd/fc34ddd8021e316c873e01adaaa97301.jpg",
}),
new ImageCard({
  image: "https://i.pinimg.com/474x/8a/1f/16/8a1f16b6d3e0440cb73f49c4f93ca735--funny-sayings-funny-memes.jpg",
}),
new ImageCard({
  image: "https://i.pinimg.com/474x/61/04/59/610459ef342c1a9f1aadc7a466789bf1.jpg",
}),
new ImageCard({
  image: "https://i.pinimg.com/474x/f0/2e/d6/f02ed6538e2b7327df8aa2e7aed46cea.jpg",
}),
new ImageCard({
  image: "https://cdn.pocket-lint.com/r/s/970x/assets/images/140427-apps-news-the-best-stupidest-and-most-famous-internet-memes-around-image1-fsppftjqo1-jpg.webp?v1",
}),
new ImageCard({
  image: "https://i.imgflip.com/lphlq.jpg"
}),
new ImageCard({
  image: "https://imgflip.com/s/meme/Shut-Up-And-Take-My-Money-Fry.jpg"
}),
new ImageCard({
  image: "https://cdn.pocket-lint.com/r/s/660x/assets/images/140427-apps-news-the-best-stupidest-and-most-famous-internet-memes-around-image14-t8xdzkveuw-jpg.webp?v1",
}),
new ImageCard({
  image: "https://assets.londonist.com/uploads/2016/04/pelican.jpg",
}),
new ImageCard ({
  image: "https://everywherewild.com/wp-content/uploads/2019/04/Weird-Animals.jpg",
}),
new ImageCard({
  image: "https://www.travelportland.com/wp-content/uploads/fly-images/15169/Weird-Division-Street-Festival-1440x864-c.jpg",
}),
new ImageCard({
  image: "https://api.time.com/wp-content/uploads/2016/11/evil-kermit-the-frog-meme-dark-side.jpg?quality=85&w=1024&h=512&crop=1",
}),
new ImageCard({
  image: "https://i.imgflip.com/bnjpn.jpg",
}),
new ImageCard({
  image: "https://cdn.pocket-lint.com/r/s/660x/assets/images/140427-apps-news-the-best-stupidest-and-most-famous-internet-memes-around-image41-87kjmgtukv-jpg.webp?v1",
}),
new ImageCard({
  image: "https://i.pinimg.com/originals/ae/0e/e7/ae0ee790f336747a3c128bcfde015264.jpg",
}),
new ImageCard({
  image: "https://i.pinimg.com/originals/f7/7e/19/f77e1918eaff8d2931a0ec1bf74499ef.jpg",
}),
new ImageCard({
  image: "https://i.pinimg.com/474x/75/2f/66/752f665aa569f7c6a54840b4ca20ba37--food-memes-gym-memes.jpg",
}),
new ImageCard({
  image: "https://www.memecreator.org/static/images/templates/939683.jpg",
}),
new ImageCard({
  image: "https://pbs.twimg.com/media/C_golC4V0AAQFta.jpg",
}), 
new ImageCard({
  image: "https://pbs.twimg.com/media/C74PO82VMAAErXP.jpg:large"
}),
new ImageCard({
  image: "https://memegenerator.net/img/images/300x300/12173/spongebob-rage.jpg"
}),
new ImageCard({
  image: "https://i.ytimg.com/vi/pL9T5fWdprk/hqdefault.jpg",
}),
new ImageCard ({
  image: "https://imgflip.com/s/meme/Third-World-Skeptical-Kid.jpg",
}),
new ImageCard({
  image: "https://www.bradenton.com/news/local/health-care/tx0hn8/picture157093474/alternates/LANDSCAPE_1140/IMG_ThinkstockPhotos-520_2_1_QTBH9PSP_L318577712",
}),
new ImageCard({
  image: "https://149366112.v2.pressablecdn.com/wp-content/uploads/2016/05/polar-bear.jpg",
}),
new ImageCard({
  image: "https://i.pinimg.com/564x/00/8a/c3/008ac382d43f8c04b9f7cc711d97cece--like-a-rolling-stone-les-simpson.jpg",
}),
new ImageCard({
  image: "https://i.redd.it/c5i3r33rl4m41.png",
}),
new ImageCard({
  image: "https://i.pinimg.com/474x/c2/49/4e/c2494ec9fe48113e7ee5716fba8e9a70.jpg",
}),
new ImageCard({
  image: "https://i.pinimg.com/originals/26/c7/57/26c7574ccce0d6ce1521333a278f01f0.png",
}),
new ImageCard({
  image: "https://i.pinimg.com/474x/b1/69/b7/b169b7d1965563d37e66a4e6734cce05.jpg",
}),
new ImageCard({
  image: "https://i.pinimg.com/474x/f9/dc/e3/f9dce36b7d78e824d16b909fa9a0b5ad.jpg",
}),
new ImageCard({
  image: "https://i.pinimg.com/474x/50/24/19/5024199908279c1e301fbcfd095e1899.jpg",
}),
new ImageCard({
  image: "https://i.pinimg.com/474x/bb/44/82/bb4482c9c7637c6c817982588a00c86a--ghetto-funny-funny-mems.jpg",
}),
new ImageCard({
  image: "https://i.pinimg.com/474x/27/b2/47/27b2470594b3da1f23038a6c6ef8329f.jpg",
}),
new ImageCard({
  image: "https://cnet1.cbsistatic.com/img/irF52Znf5NeRuwx0362lZ4kNP-E=/940x0/2019/11/30/a27dba74-8c14-4d5b-aedb-f44a449d699e/baby-yoda-soup-mandalorian.jpg",
}),
new ImageCard({
  image: "https://i.pinimg.com/originals/cb/c5/56/cbc556f8005ec43e7bebbd82365b7bef.jpg",
}),
new ImageCard({
  image: "https://i.kym-cdn.com/entries/icons/original/000/012/175/dissapointed.jpg",
}),
new ImageCard({
  image: "https://imgflip.com/s/meme/Leonardo-Dicaprio-Cheers.jpg",
}),
new ImageCard({
  image: "https://i.kym-cdn.com/entries/icons/original/000/027/140/rolf.jpg",
}),
new ImageCard({
  image: "https://thumbs.gfycat.com/InsistentFirstAtlasmoth-size_restricted.gif",
}),
new ImageCard({
  image: "https://assets.zoom.us/images/en-us/desktop/generic/gallery-view-recording-notification.png",
}),
new ImageCard({
  image: "https://pbs.twimg.com/media/D8tA8W7WwAABTLj.jpg",
}),
new ImageCard({
  image: "https://www.abc.net.au/cm/rimage/12008266-16x9-large.jpg?v=2",
}),
new ImageCard({
  image: "https://i.imgflip.com/y6yug.jpg",
}),
new ImageCard({
  image: "https://www.mygeekconfessions.com/wp-content/uploads/2012/08/654-e1343835413558-242x300.jpg",
}),

new ImageCard({
  image: "https://etcanada.com/wp-content/uploads/2016/06/58c0500b2ac4c342c6fc4ab096ada150.jpg?quality=80&strip=all&crop=0px%2C21px%2C500px%2C333px&resize=720%2C480",
}),
new ImageCard({
  image: "https://img.buzzfeed.com/buzzfeed-static/static/2015-08/24/11/campaign_images/webdr15/how-well-do-you-remember-willy-wonkas-epic-rant-2-25826-1440429431-2_dblbig.jpg",
}),
new ImageCard({
  image: "https://wompampsupport.azureedge.net/fetchimage?siteId=7575&v=2&jpgQuality=100&width=700&url=https%3A%2F%2Fi.kym-cdn.com%2Fentries%2Ficons%2Ffacebook%2F000%2F022%2F497%2Fmmmm.jpg",
}),
new ImageCard({
  image: "https://i.kym-cdn.com/entries/icons/facebook/000/033/470/200401165532-ina-garten-cocktail-cosmo.jpg",
}),
new ImageCard({
  image: "https://akns-images.eonline.com/eol_images/Entire_Site/2020313/rs_600x600-200413145437-600.tyra.jpg?fit=around|1080:1080&output-quality=90&crop=1080:1080;center,top",
}),
new ImageCard({
  image: "https://i.ytimg.com/vi/q_YxKeTxTtk/maxresdefault.jpg",
}),
new ImageCard({
  image: "https://www.sarahtylerphotography.com/wp-content/uploads/2015/12/27-3881-post/funny-faces-kids-make.jpg",
}),
new ImageCard({
  image: "https://images.ctfassets.net/x4nvfpejxuu4/1NvTagrtEd54IQJurNSIc2/bd199bd6abc155f8a3e2b8ecb45dd9d7/Funny_Faces.png?w=800&q=50",
}),
new ImageCard({
  image: "https://imgix.bustle.com/uploads/shutterstock/2019/9/20/b738bcd2-fb8e-4f07-88e6-28f00d302cf8-shutterstock-436940638.jpg?w=960&h=540&fit=crop&crop=faces&auto=format%2Ccompress&cs=srgb&q=70",
}),
new ImageCard({
  image: "https://images.unsplash.com/photo-1515536765-9b2a70c4b333?ixlib=rb-1.2.1&w=1000&q=80",
}),
new ImageCard({
  image: "https://cdn.cdnparenting.com/articles/2020/01/23181558/464300804.jpg",
}),
new ImageCard({
  image: "https://assets.wbeme.com/1000/image/a6/o/2018/03/12/a6654f8310d34a37aad58869ba5a6870.png",
}),
new ImageCard({
  image: "https://www.foxharbr.com/wp-content/uploads/2019/05/PND8TF.jpg",
}),
new ImageCard({
  image: "https://images.pexels.com/photos/1183434/pexels-photo-1183434.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
}),
new ImageCard({
  image: "https://static.boredpanda.com/blog/wp-content/uploads/2020/01/funny-dog-teeth-toofers-coverimage.jpg",
}),
new ImageCard({
  image: "https://cdn.cnn.com/cnnnext/dam/assets/190913153756-comedy-wildlife-photography-awards-9.jpg",
}),
new ImageCard({
  image: "https://media1.popsugar-assets.com/files/thumbor/N5DZcJIlVmBmbqWbk0OPBvzldjo/0x0:1660x1660/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2019/10/29/927/n/44701584/0fd997f65db8abf1796548.77940914_/i/short-funny-pet-videos.png",
}),
new ImageCard({
  image: "https://i.ytimg.com/vi/oMAn1AXXEu0/maxresdefault.jpg",
}),
new ImageCard({
  image: "https://www.legacy.com/wp-content/uploads/2019/09/funny-obituaries-1600x500-1-1200x900.jpg",
}),
new ImageCard({
  image: "https://s.yimg.com/lo/api/res/1.2/GJXQ_z9DJTAAWZZUozhuBg--/YXBwaWQ9YXBlY21lZGlhO3NtPTE7dz04MDA-/https://media.zenfs.com/en-US/reuters.com/ea32207a427d6781a947dbb3440415af",
}),
new ImageCard({
  image: "https://wagandtrain.com/wp-content/uploads/2015/11/aggressive-dogs.jpg",
}),
new ImageCard({
  image: "https://oldprimaryhead.files.wordpress.com/2013/08/crazy.jpg",
}),
new ImageCard({
  image: "https://akm-img-a-in.tosshub.com/indiatoday/styles/photo_slider_753x543/public/images/photogallery/201406/sleep_061214054645.jpg?FvCjgBZq15FB6V.P_bdXHc0CxRPb9r0Y",
}),
new ImageCard({
  image: "https://i.insider.com/522fab04eab8eaad08897f50?width=600&format=jpeg&auto=webp",
}),
new ImageCard({
  image: "https://runt-of-the-web.com/wordpress/wp-content/uploads/2016/04/weird-pictures.jpg",
}),
new ImageCard({
  image: "https://www.dictionary.com/e/wp-content/uploads/2017/10/Mad_Habits3.jpg",
}),
new ImageCard({
  image: "https://azbigmedia.com/wp-content/uploads/2019/12/CATS2.jpg",
}),
new ImageCard({
  image: "https://www.nationalgeographic.com/content/dam/animals/2019/09/tira-zebra-rare/01-frank-zebra-tira-8.adapt.885.1.jpg",
}),
new ImageCard({
  image: "https://nexter.org/wp-content/uploads/2019/07/weird-stock-images-photos-funny-pic.jpg",
}),
new ImageCard({
  image: "https://images.ctfassets.net/cnu0m8re1exe/7915luIvTadwvgyO1wNvdL/750e77a5404cbd97f0493d3cebf5c60f/shutterstock_1673017684__2_.jpg?w=650&h=433&fit=fill",
}),
new ImageCard({
  image: "https://miro.medium.com/max/1080/1*8qEmetB3_KwVnrZdjsr6cw.jpeg",
}),
new ImageCard({
  image: "https://www.cbc.ca/parents/content/imgs/weird-kids-youtube.jpg",
}),
new ImageCard({
  image: "https://d2ebzu6go672f3.cloudfront.net/media/content/images/woman-late-night-snacking-refridgerator-eating-food-iStock_000069204943_Medium.jpg",
}),
new ImageCard({
  image: "https://assets.firstbeat.com/firstbeat/uploads/2017/11/stress-eating-header.jpg",
}),
new ImageCard({
  image: "https://www.oxygen.com/sites/oxygen/files/field_media_items/2015/04/funny-girls-episode-101-05_0.jpg",
}),
new ImageCard({
  image: "https://www.oxygen.com/sites/oxygen/files/styles/media-gallery-computer/public/field_media_items/2015/04/funny-girls-funny-faces-gallery-22.jpg?itok=YJ8Agho3",
}),
new ImageCard({
  image: "https://www.oxygen.com/sites/oxygen/files/styles/media-gallery-computer/public/field_media_items/2015/04/funny-girls-funny-faces-gallery-07.jpg?itok=3BQpfLdi",
}),
new ImageCard({
  image: "https://i.ytimg.com/vi/afKBOFONecE/maxresdefault.jpg",
}),
new ImageCard({
  image: "https://quoteswell.com/wp-content/uploads/2017/09/84046848.jpg",
}),
new ImageCard({
  image: "https://images.livemint.com/img/2020/03/06/600x338/FG1_1583505701931.jpg",
}),
new ImageCard({
  image: "https://www.funnygirlsshow.co.uk/app/funnygirls/assets/images/7a8c026b568bce1a658b6ec2a7d6bc21.jpg?v=1568024538",
}),
new ImageCard({
  image: "https://www.oxygen.com/sites/oxygen/files/styles/media-gallery-computer/public/field_media_items/2015/04/funny-girls-funny-faces-gallery-01.jpg?itok=moRhKJX2",
}),
new ImageCard({
  image: "https://i.ytimg.com/vi/Nbwktco6qT4/hqdefault.jpg",
}),
new ImageCard({
  image: "https://res.cloudinary.com/twenty20/private_images/t_watermark-criss-cross-10/v1464884161000/photosp/099f391f-d98b-4c41-98dc-16a71b2302de/stock-photo-people-friendship-happiness-boys-boy-selfie-face-smile-friends-099f391f-d98b-4c41-98dc-16a71b2302de.jpg",
}),
new ImageCard({
  image: "https://assets.rappler.com/612F469A6EA84F6BAE882D2B94A4B421/img/21843AEA16694A02BE9DD186A9EB780F/bad-boys-for-life_21843AEA16694A02BE9DD186A9EB780F.jpg",
}),
new ImageCard({
  image: "https://dompict.com/wp-content/uploads/2016/10/TOP-45-Funny-Kids-and-Babies-31.jpg",
}),
new ImageCard({
  image: "https://cdn.someecards.com/posts/tweets-funniest-dad-twitter-funny-kids-w38.png",
}),
new ImageCard({
  image: "https://static.freemake.com/blog/wp-content/uploads/2014/07/funny-kids-videos-198-1024x681.jpg",
}),
new ImageCard({
  image: "https://static.boredpanda.com/blog/wp-content/uploads/2014/05/funny-animals-doing-yoga-2.jpg",
}),
new ImageCard({
  image: "https://www.rd.com/wp-content/uploads/2010/09/8E48B159-64C8-41F6-89FC-897A4D487E9C_ScottNuccio.jpeg",
}),
new ImageCard({
  image: "https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2013/8/15/1376577365503/dog-eating-ice-cream-009.jpg?width=300&quality=85&auto=format&fit=max&s=f24a0183124969e84569a2d63467a47f",
}),
new ImageCard({
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRzUj3KlKdTfx7M2mGZP9mc68yipcwkJFjLkw&usqp=CAU",
}),
new ImageCard({
  image: "https://besthqwallpapers.com/Uploads/21-6-2019/96336/thumb2-small-french-bulldog-funny-animals-dogs-puppy-pets.jpg",
}),
new ImageCard({
  image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/60661820-bb8e-4038-993d-1213dfae1b45/dc9kmtl-b8629a7f-d4db-4785-bd11-9d0c6baac21b.jpg/v1/fill/w_1024,h_820,q_75,strp/full_domination_by_kycolv08_dc9kmtl-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD04MjAiLCJwYXRoIjoiXC9mXC82MDY2MTgyMC1iYjhlLTQwMzgtOTkzZC0xMjEzZGZhZTFiNDVcL2RjOWttdGwtYjg2MjlhN2YtZDRkYi00Nzg1LWJkMTEtOWQwYzZiYWFjMjFiLmpwZyIsIndpZHRoIjoiPD0xMDI0In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.F_I_xLn63RhsnU3ZkOvR6dBXFWmzQXLf78klRaIVIL4",
}),
new ImageCard({
  image: "https://www.theladders.com/wp-content/uploads/stress-work-191008-800x450.jpg",
}),
new ImageCard({
  image: "https://a57.foxnews.com/media2.foxnews.com/BrightCove/694940094001/2019/01/22/931/524/694940094001_5992454956001_5992450756001-vs.jpg?ve=1&tl=1",
}),
new ImageCard({
  image: "https://www.inquirer.com/resizer/A6d_kGVyTjdUqyHxvnTK-F-CUpc=/1400x932/smart/arc-anglerfish-arc2-prod-pmn.s3.amazonaws.com/public/APUFD4GMH5CUDLUC6K6H7E4JG4.jpg",
}),
new ImageCard({
  image: "https://broadviewuniversity.edu/wp-content/uploads/2017/06/iStock-521611936.jpg",
}),
new ImageCard({
  image: "https://i.gifer.com/Ht3s.gif",
}),
new ImageCard({
  image: "https://i.pinimg.com/originals/ff/b3/0e/ffb30ea09a0576699f99d13110924c4d.gif",
}),
new ImageCard({
  image: "https://media.tenor.com/images/6c2cda3d364bb30bada456deae08e792/tenor.gif",
}),
new ImageCard({
  image: "https://i.chzbgr.com/full/9487292928/hDB21DBDC/gif-baby-animal-hippo-in-a-shallow-pool-smelling-the-air",
}),
new ImageCard({
  image: "https://vignette.wikia.nocookie.net/twicenation/images/5/5f/Nayeonface.gif/revision/latest/top-crop/width/300/height/300?cb=20190222232845",
}),
new ImageCard({
  image: "https://teamjimmyjoe.com/wp-content/uploads/2018/08/funny-boy-shoots-face-hose.gif",
}),
new ImageCard({
  image: "https://ruinmyweek.com/wp-content/uploads/2016/03/free-animated-gifs-of-kids-getting-hurt-kid-fails-Air-mattress-Kid.gif",
}),
new ImageCard({
  image: "https://usersnap.com/blog/wp-content/uploads/2015/12/funny-cat-year2015-web-dev.gif",
}),
new ImageCard({
  image: "https://thinkingmeme.com/wp-content/uploads/2018/07/Top-18-Funny-gifs-humor17.gif",
}),
new ImageCard({
  image: "https://worklad.co.uk/wp-content/uploads/2015/11/daily_gifdump_13.gif",
}),
new ImageCard({
  image: "https://cdn.lowgif.com/full/efe3b702d8e9e713-disney-funny-gifs-find-share-on-giphy.gif",
}),
new ImageCard({
  image: "https://www.askideas.com/media/08/Funny-3d-Boy-Gif-Image.gif",
}),
]


  module.exports = imageCards;

