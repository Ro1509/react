import React from "react";
import ReactDOM from "react-dom/client";

/******* REACT ELEMENT(OBJRXT) ***** */
/*const head=React.createElement(
    "h1",
    {
        id:"head1"
    },
    "Hello React"
)
*/

/***************JSX**************** */

/*

*head=React Object 
*(....)->jsx expression


const head = (
    <div id="header">
        <h1> hello react </h1>
        <h2> this id rohit</h2>
    </div>
)

*/


/****Functional Component (Imp)**/

/**
 * Note 
 * 1.always starts with capital letter
 * 2.Act as a function 
 * 3.writen < />
 */
//const comp = (
//    <h1>React Element</h1>
//);

//const Comp= ()=>{
//    return (
//        <h1>Functional Component</h1>
//    )
//}

const returantList = [
    {
        "id": "613175",
        "name": "Restora",
        "cloudinaryImageId": "obpwecikpxnsgs4thvxc",
        "locality": "Nutanganj",
        "areaName": "Parbirhata",
        "costForTwo": "₹90 for two",
        "cuisines": [
          "Indian"
        ],
        "avgRating": 3.1,
        "feeDetails": {
          "restaurantId": "613175",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 600
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 600
        },
        "parentId": "169069",
        "avgRatingString": "3.1",
        "totalRatingsString": "100+",
        "sla": {
          "deliveryTime": 38,
          "lastMileTravel": 1.5,
          "serviceability": "SERVICEABLE",
          "slaString": "38 mins",
          "lastMileTravelString": "1.5 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-10-12 23:45:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "FREE ITEM"
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
    },
    {
        "id": "614501",
        "name": "Tasty Times",
        "cloudinaryImageId": "e6e970c8180f105e9f6d33820d4dda30",
        "locality": "Belbagan Rd",
        "areaName": "Burdwan",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "Pizzas",
          "South Indian",
          "Thai",
          "Chinese",
          "Fast Food",
          "Asian"
        ],
        "avgRating": 3.9,
        "feeDetails": {
          "restaurantId": "614501",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 1100
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 1100
        },
        "parentId": "202183",
        "avgRatingString": "3.9",
        "totalRatingsString": "50+",
        "sla": {
          "deliveryTime": 43,
          "lastMileTravel": 4,
          "serviceability": "SERVICEABLE",
          "slaString": "43 mins",
          "lastMileTravelString": "4.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-10-12 23:30:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "10% OFF",
          "subHeader": "UPTO ₹40"
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
    },
    {
    "id": "290512",
    "name": "Asha Sweets",
    "cloudinaryImageId": "v7bj4rrr4v0c5wr5avmg",
    "locality": "BC Road",
    "areaName": "Parbirhata",
    "costForTwo": "₹149 for two",
    "cuisines": [
      "Sweets",
      "South Indian",
      "Snacks"
    ],
    "avgRating": 4.2,
    "veg": true,
    "feeDetails": {
      "restaurantId": "290512",
      "fees": [
        {
          "name": "BASE_DISTANCE",
          "fee": 600
        },
        {
          "name": "BASE_TIME"
        },
        {
          "name": "ANCILLARY_SURGE_FEE"
        }
      ],
      "totalFee": 600
    },
    "parentId": "36741",
    "avgRatingString": "4.2",
    "totalRatingsString": "1K+",
    "sla": {
      "deliveryTime": 28,
      "lastMileTravel": 2.1,
      "serviceability": "SERVICEABLE",
      "slaString": "28 mins",
      "lastMileTravelString": "2.1 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2023-10-12 21:00:00",
      "opened": true
    },
    "badges": {
      "imageBadges": [
        {
          "imageId": "v1695133679/badges/Pure_Veg111.png",
          "description": "pureveg"
        }
      ]
    },
    "isOpen": true,
    "aggregatedDiscountInfoV2": {
      
    },
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          "badgeObject": [
            {
              "attributes": {
                "description": "pureveg",
                "imageId": "v1695133679/badges/Pure_Veg111.png"
              }
            }
          ]
        },
        "textBased": {
          
        },
        "textExtendedBadges": {
          
        }
      }
    },
    "orderabilityCommunication": {
      "title": {
        
      },
      "subTitle": {
        
      },
      "message": {
        
      },
      "customIcon": {
        
      }
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    }
    },
    {
        "id": "250804",
        "name": "Radhaballav Mistanna Bhandar",
        "cloudinaryImageId": "nfuu0rtbmcybb9o3pz6b",
        "locality": "BB Ghosh Road",
        "areaName": "B.B. Ghosh Road",
        "costForTwo": "₹100 for two",
        "cuisines": [
          "Sweets"
        ],
        "avgRating": 4.3,
        "veg": true,
        "feeDetails": {
          "restaurantId": "250804",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 600
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 600
        },
        "parentId": "164206",
        "avgRatingString": "4.3",
        "totalRatingsString": "100+",
        "sla": {
          "deliveryTime": 20,
          "lastMileTravel": 2,
          "serviceability": "SERVICEABLE",
          "slaString": "20 mins",
          "lastMileTravelString": "2.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-10-12 22:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {
          
        },
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
    },

]
const Logo=()=>(
    <a href="/">
        <img
        alt="logo png"
        className="logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhxSF3YnbGO83lkANWkY8nkwLKv7DFiLi88A&usqp=CAU"
        />
    </a>
);

const HeaderComponents= ()=>{
    return (
        <div className="top-component">
            <Logo/>   
            <div className="list-item">
                <ol className="item">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ol>
            </div>
        </div>
        
        );
};
const ResturantCard=({
    name,
    cuisines,
    locality,
    cloudinaryImageId
})=>{
    return (
    <div className="card" >
        <img
        src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} />
        <h2>{name}</h2>
        <h3>{cuisines.join(" ,")}</h3>
        <h4>{locality}</h4>
        </div>
    );
}

const Body=()=>{
    return (
        <div className="body-rest">{
           returantList.map((restaurant, index) => {
              console.log(restaurant);
                    return <ResturantCard {...restaurant} key={restaurant.id} />;
              })
          }
        </div>   
    );
}

const AppLayOut=() =>{
    return (
        <React.Fragment>
            <HeaderComponents />
            <Body/>
        </React.Fragment>
    );
};


const root=ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayOut />);