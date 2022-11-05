import { Product } from "../models/rest.models"

export const categoryMock = {
    "id": '5',
    "slug": "beauty-garden",
    "name": "Beauty & Garden"
}

export const userLoginMock = {
    data:{
        token: "token",
        user: {
            id:6,
            email: "email",
            name: "mockname"
        }
    }
}

export const productMock =  {
    "id": 40,
    "slug": "hersheys-chocolate-1597252920",
    "name": "Hershey's Chocolate",
    "description": "Chocolate Bar",
    "active": 1,
    "likes_count": 3,
    "likes_up_count": 3,
    "likes_down_count": 0,
    "published_at": "2020-08-12T17:22:00.156Z",
    "master": {
        "id": 40,
        "sku": "357159",
        "price": "1.11",
        "promotional_price": "0.0",
        "stock": 55,
        "is_master": 1,
        "position": 0
    },
    "category": {
        "id": 30,
        "slug": "books-movies-music",
        "name": "Books, Movies & Music"
    },
    "image": {
        "id": 39,
        "url": "https://trainee-program.csdibanavyn2.us-east-1.rds.amazonaws.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBMQT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--0465ea06d3bcbb3369bc36b31502560cbe31a729/Hershey_s%20Chocolate.jpg"
    }
}

export const getCategoriesResponseMock = {
    "data": [
        {
            "id": '5',
            "slug": "beauty-garden",
            "name": "Beauty & Garden"
        },
        {
            "id": '30',
            "slug": "books-movies-music",
            "name": "Books, Movies & Music"
        },
        {
            "id": '11',
            "slug": "baby-movies",
            "name": "Baby & Movies"
        },
        {
            "id": '24',
            "slug": "computers",
            "name": "Computers"
        },
        {
            "id": '26',
            "slug": "kids-toys-garden",
            "name": "Kids, Toys & Garden"
        },
        {
            "id": '23',
            "slug": "books-grocery-shoes",
            "name": "Books, Grocery & Shoes"
        },
        {
            "id": '21',
            "slug": "grocery",
            "name": "Grocery"
        },
        {
            "id": '22',
            "slug": "health-industrial-grocery",
            "name": "Health, Industrial & Grocery"
        },
        {
            "id": '27',
            "slug": "industrial-kids-clothing",
            "name": "Industrial, Kids & Clothing"
        },
        {
            "id": '10',
            "slug": "books-beauty",
            "name": "Books & Beauty"
        },
        {
            "id": '1',
            "slug": "movies",
            "name": "Movies"
        },
        {
            "id": '8',
            "slug": "electronics-grocery",
            "name": "Electronics & Grocery"
        },
        {
            "id": '12',
            "slug": "music-shoes-kids",
            "name": "Music, Shoes & Kids"
        },
        {
            "id": '2',
            "slug": "clothing-shoes-baby",
            "name": "Clothing, Shoes & Baby"
        },
        {
            "id": '13',
            "slug": "books",
            "name": "Books"
        },
        {
            "id": '25',
            "slug": "outdoors",
            "name": "Outdoors"
        },
        {
            "id": '6',
            "slug": "home-shoes",
            "name": "Home & Shoes"
        },
        {
            "id": '15',
            "slug": "games",
            "name": "Games"
        },
        {
            "id": '29',
            "slug": "games-1597252906",
            "name": "Games"
        },
        {
            "id": '18',
            "slug": "automotive-jewelry",
            "name": "Automotive & Jewelry"
        },
        {
            "id": '9',
            "slug": "industrial-1597252906",
            "name": "Industrial"
        },
        {
            "id": '14',
            "slug": "automotive-health",
            "name": "Automotive & Health"
        },
        {
            "id": '20',
            "slug": "automotive",
            "name": "Automotive"
        },
        {
            "id": '19',
            "slug": "clothing-shoes",
            "name": "Clothing & Shoes"
        },
        {
            "id": '16',
            "slug": "jewelry",
            "name": "Jewelry"
        },
        {
            "id": '4',
            "slug": "tools",
            "name": "Tools"
        },
        {
            "id": '28',
            "slug": "music-kids",
            "name": "Music & Kids"
        },
        {
            "id": '3',
            "slug": "industrial",
            "name": "Industrial"
        },
        {
            "id": '17',
            "slug": "music-automotive-games",
            "name": "Music, Automotive & Games"
        },
        {
            "id": '7',
            "slug": "beauty",
            "name": "Beauty"
        }
    ],
    "meta": {
        "current_page": 1,
        "from": null,
        "last_page": 1,
        "per_page": 100,
        "to": null,
        "total": 30
    }
}

export const mockProducts = {
    "data": [
        {
            "id": 3,
            "slug": "snicker-almond-bar",
            "name": "Snicker Almond Bar",
            "description": "Candy Bar",
            "active": 1,
            "likes_count": 5,
            "likes_up_count": 4,
            "likes_down_count": 1,
            "published_at": "2020-08-12T17:21:47.441Z",
            "master": {
                "id": 3,
                "sku": "345678",
                "price": "0.92",
                "promotional_price": "0.0",
                "stock": 0,

                "is_master": 1,
                "position": 0
            },
            "category": {
                "id": 27,
                "slug": "industrial-kids-clothing",
                "name": "Industrial, Kids & Clothing"
            },
            "image": {
                "id": 3,
                "url": "https://trainee-program.csdibanavyn2.us-east-1.rds.amazonaws.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBDQT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--3ea795a8046b4858e913b967ea30777468705e39/Snicker%20Almond%20Bar.jpg"
            }
        },
        {
            "id": 9,
            "slug": "almanese-candy",
            "name": "Almanese Candy",
            "description": "Gummy Candy",
            "active": 1,
            "likes_count": 5,
            "likes_up_count": 3,
            "likes_down_count": 2,
            "published_at": "2020-08-12T17:21:49.603Z",
            "master": {
                "id": 9,
                "sku": "912345",
                "price": "12.99",
                "promotional_price": "0.0",
                "stock": 0,

                "is_master": 1,
                "position": 0
            },
            "category": {
                "id": 15,
                "slug": "games",
                "name": "Games"
            },
            "image": {
                "id": 9,
                "url": "https://trainee-program.csdibanavyn2.us-east-1.rds.amazonaws.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBEZz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--327c1d5ad287c036c9467c2eaace971e615f92e3/Albanese.jpg"
            }
        },
        {
            "id": 20,
            "slug": "lindt-chocolate",
            "name": "Lindt Chocolate",
            "description": "Chocolate Box",
            "active": 1,
            "likes_count": 2,
            "likes_up_count": 1,
            "likes_down_count": 1,
            "published_at": "2020-08-12T17:21:53.190Z",
            "master": {
                "id": 20,
                "sku": "472583",
                "price": "14.48",
                "promotional_price": "0.0",
                "stock": 11,

                "is_master": 1,
                "position": 0
            },
            "category": {
                "id": 1,
                "slug": "movies",
                "name": "Movies"
            },
            "image": {
                "id": 20,
                "url": "https://trainee-program.csdibanavyn2.us-east-1.rds.amazonaws.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBHUT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--04acc745b3b2d878ea039833e51ddfc5e4d40410/Lindt%20Chocolate.jpg"
            }
        },
        {
            "id": 13,
            "slug": "cavendish-harvey-tin",
            "name": "Cavendish & Harvey Tin",
            "description": "Hard Candy",
            "active": 1,
            "likes_count": 3,
            "likes_up_count": 3,
            "likes_down_count": 0,
            "published_at": "2020-08-12T17:21:50.878Z",
            "master": {
                "id": 13,
                "sku": "654321",
                "price": "10.75",
                "promotional_price": "0.0",
                "stock": 0,

                "is_master": 1,
                "position": 0
            },
            "category": {
                "id": 9,
                "slug": "industrial-1597252906",
                "name": "Industrial"
            },
            "image": {
                "id": 13,
                "url": "https://trainee-program.csdibanavyn2.us-east-1.rds.amazonaws.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBFZz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--c1837ccf582e609c976ae8a3b223620167619e03/Cavendish%20_%20Harvey.jpg"
            }
        },
        {
            "id": 23,
            "slug": "skittles",
            "name": "Skittles ",
            "description": "Mini Candy",
            "active": 1,
            "likes_count": 3,
            "likes_up_count": 1,
            "likes_down_count": 2,
            "published_at": "2020-08-12T17:21:54.152Z",
            "master": {
                "id": 23,
                "sku": "583691",
                "price": "6.980000000000001",
                "promotional_price": "0.0",
                "stock": 73,

                "is_master": 1,
                "position": 0
            },
            "category": {
                "id": 7,
                "slug": "beauty",
                "name": "Beauty"
            },
            "image": {
                "id": 23,
                "url": "https://trainee-program.csdibanavyn2.us-east-1.rds.amazonaws.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBIQT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--a3f7a703022ec2feac18c6832e8d0eb3d0bd17cc/Skittle.jpg"
            }
        },
        {
            "id": 11,
            "slug": "haribo-variety-packl",
            "name": "Haribo Variety Packl",
            "description": "Assorted Candy",
            "active": 1,
            "likes_count": 4,
            "likes_up_count": 2,
            "likes_down_count": 2,
            "published_at": "2020-08-12T17:21:50.218Z",
            "master": {
                "id": 11,
                "sku": "876543",
                "price": "17.99",
                "promotional_price": "0.0",
                "stock": 0,

                "is_master": 1,
                "position": 0
            },
            "category": {
                "id": 18,
                "slug": "automotive-jewelry",
                "name": "Automotive & Jewelry"
            },
            "image": {
                "id": 11,
                "url": "https://trainee-program.csdibanavyn2.us-east-1.rds.amazonaws.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBFQT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--5ec2e9c64280aec24f1852c8d1fdac2c63b6279b/Haribo%20Variety%20Pack.jpg"
            }
        },
        {
            "id": 22,
            "slug": "golden-state",
            "name": "Golden State ",
            "description": "Chocolate Box",
            "active": 1,
            "likes_count": 5,
            "likes_up_count": 3,
            "likes_down_count": 2,
            "published_at": "2020-08-12T17:21:53.863Z",
            "master": {
                "id": 22,
                "sku": "258369",
                "price": "29.95",
                "promotional_price": "0.0",
                "stock": 0,

                "is_master": 1,
                "position": 0
            },
            "category": {
                "id": 3,
                "slug": "industrial",
                "name": "Industrial"
            },
            "image": {
                "id": 22,
                "url": "https://trainee-program.csdibanavyn2.us-east-1.rds.amazonaws.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBHdz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--94a37a3ac08a25a02933fff17abf1dea079d1a4d/Golden%20State.jpg"
            }
        },
        {
            "id": 16,
            "slug": "trader-joes-cup",
            "name": "Trader Joe's Cup",
            "description": "Peanut Butter Cups",
            "active": 1,
            "likes_count": 1,
            "likes_up_count": 1,
            "likes_down_count": 0,
            "published_at": "2020-08-12T17:21:51.923Z",
            "master": {
                "id": 16,
                "sku": "321987",
                "price": "9.800000000000001",
                "promotional_price": "0.0",
                "stock": 0,

                "is_master": 1,
                "position": 0
            },
            "category": {
                "id": 20,
                "slug": "automotive",
                "name": "Automotive"
            },
            "image": {
                "id": 16,
                "url": "https://trainee-program.csdibanavyn2.us-east-1.rds.amazonaws.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBGUT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--dc7711b71b5d66faaf16aea08ecc13c469f81637/Trader%20Joe_s.jpg"
            }
        },
        {
            "id": 7,
            "slug": "haribo-gold-bears",
            "name": "Haribo Gold-Bears",
            "description": "Gummy Candy",
            "active": 1,
            "likes_count": 4,
            "likes_up_count": 4,
            "likes_down_count": 0,
            "published_at": "2020-08-12T17:21:48.671Z",
            "master": {
                "id": 7,
                "sku": "789123",
                "price": "12.15",
                "promotional_price": "0.0",
                "stock": 0,

                "is_master": 1,
                "position": 0
            },
            "category": {
                "id": 26,
                "slug": "kids-toys-garden",
                "name": "Kids, Toys & Garden"
            },
            "image": {
                "id": 7,
                "url": "https://trainee-program.csdibanavyn2.us-east-1.rds.amazonaws.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBEQT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--9d2e8ec57088e3ddd9b9dd87df3d70d96db31a7d/Haribo.jpg"
            }
        },
        {
            "id": 19,
            "slug": "godiva-chocolate",
            "name": "Godiva Chocolate",
            "description": "Chocolate Box",
            "active": 1,
            "likes_count": 2,
            "likes_up_count": 2,
            "likes_down_count": 0,
            "published_at": "2020-08-12T17:21:52.872Z",
            "master": {
                "id": 19,
                "sku": "147258",
                "price": "29.0",
                "promotional_price": "0.0",
                "stock": 0,

                "is_master": 1,
                "position": 0
            },
            "category": {
                "id": 28,
                "slug": "music-kids",
                "name": "Music & Kids"
            },
            "image": {
                "id": 19,
                "url": "https://trainee-program.csdibanavyn2.us-east-1.rds.amazonaws.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBHQT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--4ca7be1661e2a87f8ab30739d68612bf6518f9ad/Godiva%20Chocolate.jpg"
            }
        },
        {
            "id": 18,
            "slug": "barnetts-chocolate",
            "name": "Barnett's Chocolate",
            "description": "Chocolate Box",
            "active": 1,
            "likes_count": 4,
            "likes_up_count": 3,
            "likes_down_count": 1,
            "published_at": "2020-08-12T17:21:52.582Z",
            "master": {
                "id": 18,
                "sku": "198765",
                "price": "23.99",
                "promotional_price": "0.0",
                "stock": 0,

                "is_master": 1,
                "position": 0
            },
            "category": {
                "id": 30,
                "slug": "books-movies-music",
                "name": "Books, Movies & Music"
            },
            "image": {
                "id": 18,
                "url": "https://trainee-program.csdibanavyn2.us-east-1.rds.amazonaws.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBGdz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--1ae1cd223b23c9e3eb3c5a388b43de714160a551/Barnett_s%20Chocolate%20Box.jpg"
            }
        },
        {
            "id": 32,
            "slug": "sour-patch-kids",
            "name": "Sour Patch Kids",
            "description": "Sour Candy",
            "active": 1,
            "likes_count": 3,
            "likes_up_count": 3,
            "likes_down_count": 0,
            "published_at": "2020-08-12T17:21:56.923Z",
            "master": {
                "id": 32,
                "sku": "527419",
                "price": "3.17",
                "promotional_price": "0.0",
                "stock": 43,

                "is_master": 1,
                "position": 0
            },
            "category": {
                "id": 21,
                "slug": "grocery",
                "name": "Grocery"
            },
            "image": {
                "id": 31,
                "url": "https://trainee-program.csdibanavyn2.us-east-1.rds.amazonaws.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBKQT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--0bcf6e76c5b5a84db0854c1929b69655c8a018ad/Sour%20Patch%20Kids.jpg"
            }
        },
        {
            "id": 14,
            "slug": "life-savers",
            "name": "Life Savers",
            "description": "Hard Candy",
            "active": 1,
            "likes_count": 4,
            "likes_up_count": 2,
            "likes_down_count": 2,
            "published_at": "2020-08-12T17:21:51.227Z",
            "master": {
                "id": 14,
                "sku": "543219",
                "price": "6.490000000000001",
                "promotional_price": "0.0",
                "stock": 61,

                "is_master": 1,
                "position": 0
            },
            "category": {
                "id": 3,
                "slug": "industrial",
                "name": "Industrial"
            },
            "image": {
                "id": 14,
                "url": "https://trainee-program.csdibanavyn2.us-east-1.rds.amazonaws.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBFdz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--d43e21a30772d1a51be8738f346f72dc3e593f8f/Life%20Savers.jpg"
            }
        },
        {
            "id": 29,
            "slug": "barnetts-mega-sour",
            "name": "Barnett's Mega Sour",
            "description": "Sour Candy",
            "active": 1,
            "likes_count": 4,
            "likes_up_count": 3,
            "likes_down_count": 1,
            "published_at": "2020-08-12T17:21:55.912Z",
            "master": {
                "id": 29,
                "sku": "638527",
                "price": "10.98",
                "promotional_price": "0.0",
                "stock": 0,

                "is_master": 1,
                "position": 0
            },
            "category": {
                "id": 26,
                "slug": "kids-toys-garden",
                "name": "Kids, Toys & Garden"
            },
            "image": {
                "id": 28,
                "url": "https://trainee-program.csdibanavyn2.us-east-1.rds.amazonaws.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBJUT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--1f8bf821bc38e5fdaf5aac66f096c969023e3531/Barnett_s%20Mega%20Sour.jpg"
            }
        },
        {
            "id": 40,
            "slug": "hersheys-chocolate-1597252920",
            "name": "Hershey's Chocolate",
            "description": "Chocolate Bar",
            "active": 1,
            "likes_count": 3,
            "likes_up_count": 3,
            "likes_down_count": 0,
            "published_at": "2020-08-12T17:22:00.156Z",
            "master": {
                "id": 40,
                "sku": "357159",
                "price": "1.11",
                "promotional_price": "0.0",
                "stock": 55,

                "is_master": 1,
                "position": 0
            },
            "category": {
                "id": 30,
                "slug": "books-movies-music",
                "name": "Books, Movies & Music"
            },
            "image": {
                "id": 39,
                "url": "https://trainee-program.csdibanavyn2.us-east-1.rds.amazonaws.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBMQT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--0465ea06d3bcbb3369bc36b31502560cbe31a729/Hershey_s%20Chocolate.jpg"
            }
        }
    ],
    "meta": {
        "current_page": 2,
        "from": 1,
        "last_page": 3,
        "per_page": 15,
        "to": 3,
        "total": 42
    }
}