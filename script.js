/* =====================================================
   SATYAM FASHION
   SHOWROOM JAVASCRIPT
===================================================== */


/* =====================================================
   GOOGLE SHEET URL
===================================================== */

const GOOGLE_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbwTIKEasi4Z8ptznqTs_ugXQotOKUUOBNaTLrNjAWrTpJL1ysa4ue8L7uQtSEPOFoxL/exec";


/* =====================================================
   MOBILE MENU
===================================================== */

const menuButton =
    document.getElementById("menuButton");

const navigation =
    document.getElementById("navigation");


if (menuButton) {

    menuButton.addEventListener(
        "click",
        function () {

            navigation.classList.toggle("active");

            if (
                navigation.classList.contains("active")
            ) {

                menuButton.innerHTML = "×";

            } else {

                menuButton.innerHTML = "☰";

            }

        }
    );

}


/* =====================================================
   CLOSE MOBILE MENU
===================================================== */

document
    .querySelectorAll(".navigation a")
    .forEach(function(link) {

        link.addEventListener(
            "click",
            function() {

                navigation.classList.remove("active");

                menuButton.innerHTML = "☰";

            }
        );

    });


/* =====================================================
   HEADER SCROLL
===================================================== */

const header =
    document.getElementById("header");


window.addEventListener(
    "scroll",
    function() {

        if (window.scrollY > 40) {

            header.style.boxShadow =
                "0 8px 30px rgba(0,0,0,0.08)";

        } else {

            header.style.boxShadow = "none";

        }

    }
);


/* =====================================================
   INTEREST SCROLL
===================================================== */

function scrollToInterest() {

    const section =
        document.getElementById("interest");

    if (!section) return;

    section.scrollIntoView({
        behavior: "smooth"
    });

}


/* =====================================================
   PRODUCT DATA
===================================================== */

const menProducts = [

    {
        name: "Classic Oxford Shirt",
        category: "SHIRTS",
        price: "₹599",
        type: "shirts",
        image:
        "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=900&q=85"
    },

    {
        name: "Essential White Shirt",
        category: "SHIRTS",
        price: "₹499",
        type: "shirts",
        image:
        "https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=900&q=85"
    },

    {
        name: "Oversized Essential",
        category: "T-SHIRTS",
        price: "₹99",
        type: "tshirts",
        image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=85"
    },

    {
        name: "Premium Black Tee",
        category: "T-SHIRTS",
        price: "₹199",
        type: "tshirts",
        image:
        "https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=900&q=85"
    },

    {
        name: "Relaxed Denim",
        category: "JEANS & PANTS",
        price: "₹699",
        type: "pants",
        image:
        "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=900&q=85"
    },

    {
        name: "Classic Straight Jeans",
        category: "JEANS & PANTS",
        price: "₹649",
        type: "pants",
        image:
        "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=900&q=85"
    },

    {
        name: "Urban Sneakers",
        category: "FOOTWEAR",
        price: "₹899",
        type: "shoes",
        image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=85"
    },

    {
        name: "Everyday Jacket",
        category: "JACKETS",
        price: "₹799",
        type: "jackets",
        image:
        "https://images.unsplash.com/photo-149624107-3f1b6e3f1f0e?auto=format&fit=crop&w=900&q=85"
    },

    {
        name: "Classic Watch",
        category: "ACCESSORIES",
        price: "₹399",
        type: "accessories",
        image:
        "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=900&q=85"
    },

    /* =========================
       MEN PERFUMES ₹99
    ========================= */

    {
        name: "Royal Oud Perfume",
        category: "PERFUMES • ₹99",
        price: "₹99",
        type: "perfumes",
        image:
        "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=900&q=85"
    },

    {
        name: "Fresh Aqua Perfume",
        category: "PERFUMES • ₹99",
        price: "₹99",
        type: "perfumes",
        image:
        "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=900&q=85"
    },

    {
        name: "Black Night Perfume",
        category: "PERFUMES • ₹99",
        price: "₹99",
        type: "perfumes",
        image:
        "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&w=900&q=85"
    }

];


const womenProducts = [

    {
        name: "Floral Summer Dress",
        category: "DRESSES",
        price: "₹499",
        type: "dresses",
        image:
        "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=85"
    },

    {
        name: "Elegant Evening Dress",
        category: "DRESSES",
        price: "₹699",
        type: "dresses",
        image:
        "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?auto=format&fit=crop&w=900&q=85"
    },

    {
        name: "Everyday Top",
        category: "TOPS",
        price: "₹299",
        type: "tops",
        image:
        "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&w=900&q=85"
    },

    {
        name: "Premium Crop Top",
        category: "TOPS",
        price: "₹249",
        type: "tops",
        image:
        "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&w=900&q=85"
    },

    {
        name: "Wide Leg Denim",
        category: "JEANS & PANTS",
        price: "₹699",
        type: "pants",
        image:
        "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=900&q=85"
    },

    {
        name: "Classic Heels",
        category: "FOOTWEAR",
        price: "₹799",
        type: "shoes",
        image:
        "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=900&q=85"
    },

    {
        name: "Elegant Handbag",
        category: "ACCESSORIES",
        price: "₹599",
        type: "accessories",
        image:
        "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=85"
    },

    {
        name: "Classic Sunglasses",
        category: "ACCESSORIES",
        price: "₹199",
        type: "accessories",
        image:
        "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=900&q=85"
    },

    /* =========================
       WOMEN PERFUMES ₹99
    ========================= */

    {
        name: "Rose Bloom Perfume",
        category: "PERFUMES • ₹99",
        price: "₹99",
        type: "perfumes",
        image:
        "https://images.unsplash.com/photo-1563170351-be82bc888aa4?auto=format&fit=crop&w=900&q=85"
    },

    {
        name: "Sweet Blossom Perfume",
        category: "PERFUMES • ₹99",
        price: "₹99",
        type: "perfumes",
        image:
        "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=900&q=85"
    },

    {
        name: "Elegant Mist Perfume",
        category: "PERFUMES • ₹99",
        price: "₹99",
        type: "perfumes",
        image:
        "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=900&q=85"
    }

];


/* =====================================================
   CURRENT COLLECTION
===================================================== */

let currentCollection = "men";

let currentProducts = menProducts;


/* =====================================================
   RENDER PRODUCTS
===================================================== */

function renderProducts(products) {

    const grid =
        document.getElementById("catalogGrid");

    grid.innerHTML = "";


    if (products.length === 0) {

        grid.innerHTML = `
            <div style="
                grid-column:1/-1;
                text-align:center;
                padding:60px;
                color:#777;
            ">
                No styles available in this category.
            </div>
        `;

        return;

    }


    products.forEach(function(product, index) {

        const card =
            document.createElement("article");


        card.className =
            "catalog-card";


        card.innerHTML = `

            <div
                class="catalog-photo"
                style="
                    background-image:url('${product.image}')
                "
            >

                <span class="catalog-label">
                    ${
                        product.type === "perfumes"
                            ? "₹99 OFFER"
                            : index < 2
                                ? "NEW"
                                : "SATYAM"
                    }
                </span>

            </div>

            <div class="catalog-info">

                <p class="catalog-category">
                    ${product.category}
                </p>

                <h3>
                    ${product.name}
                </h3>

                <span class="catalog-price">
                    ${product.price}
                </span>

            </div>

        `;


        card.addEventListener(
            "click",
            function() {

                openQuickView(product);

            }
        );


        grid.appendChild(card);

    });

}


/* =====================================================
   SWITCH MEN / WOMEN
===================================================== */

function switchCollection(collection) {

    currentCollection = collection;


    const title =
        document.getElementById("collectionTitle");


    const menSwitch =
        document.getElementById("menSwitch");


    const womenSwitch =
        document.getElementById("womenSwitch");


    if (collection === "men") {

        currentProducts = menProducts;

        title.textContent =
            "Men's Collection";

        menSwitch.classList.add("active");

        womenSwitch.classList.remove("active");


        createMenTabs();

    } else {

        currentProducts = womenProducts;

        title.textContent =
            "Women's Collection";

        womenSwitch.classList.add("active");

        menSwitch.classList.remove("active");


        createWomenTabs();

    }


    renderProducts(currentProducts);

}


/* =====================================================
   MEN CATEGORY TABS
===================================================== */

function createMenTabs() {

    const tabs =
        document.getElementById("categoryTabs");


    tabs.innerHTML = `

        <button
            class="category-tab active"
            data-category="all"
        >
            All
        </button>

        <button
            class="category-tab"
            data-category="shirts"
        >
            Shirts
        </button>

        <button
            class="category-tab"
            data-category="tshirts"
        >
            T-Shirts
        </button>

        <button
            class="category-tab"
            data-category="pants"
        >
            Jeans & Pants
        </button>

        <button
            class="category-tab"
            data-category="shoes"
        >
            Footwear
        </button>

        <button
            class="category-tab"
            data-category="jackets"
        >
            Jackets
        </button>

        <button
            class="category-tab"
            data-category="accessories"
        >
            Accessories
        </button>

        <button
            class="category-tab"
            data-category="perfumes"
        >
            Perfumes ₹99
        </button>

    `;


    activateCategoryTabs();

}


/* =====================================================
   WOMEN CATEGORY TABS
===================================================== */

function createWomenTabs() {

    const tabs =
        document.getElementById("categoryTabs");


    tabs.innerHTML = `

        <button
            class="category-tab active"
            data-category="all"
        >
            All
        </button>

        <button
            class="category-tab"
            data-category="tops"
        >
            Tops
        </button>

        <button
            class="category-tab"
            data-category="dresses"
        >
            Dresses
        </button>

        <button
            class="category-tab"
            data-category="pants"
        >
            Jeans & Pants
        </button>

        <button
            class="category-tab"
            data-category="shoes"
        >
            Footwear
        </button>

        <button
            class="category-tab"
            data-category="accessories"
        >
            Accessories
        </button>

        <button
            class="category-tab"
            data-category="perfumes"
        >
            Perfumes ₹99
        </button>

    `;


    activateCategoryTabs();

}


/* =====================================================
   CATEGORY FILTER
===================================================== */

function activateCategoryTabs() {

    document
        .querySelectorAll(".category-tab")
        .forEach(function(tab) {

            tab.addEventListener(
                "click",
                function() {

                    document
                        .querySelectorAll(
                            ".category-tab"
                        )
                        .forEach(function(item) {

                            item.classList.remove(
                                "active"
                            );

                        });


                    tab.classList.add("active");


                    const category =
                        tab.dataset.category;


                    if (category === "all") {

                        renderProducts(
                            currentProducts
                        );

                        return;

                    }


                    const filtered =
                        currentProducts.filter(
                            function(product) {

                                return product.type ===
                                    category;

                            }
                        );


                    renderProducts(filtered);

                }
            );

        });

}


/* =====================================================
   OPEN MEN / WOMEN SHOWROOM
===================================================== */

function openShowroom(type) {

    switchCollection(type);


    const collection =
        document.getElementById("collections");


    collection.scrollIntoView({
        behavior: "smooth"
    });

}


/* =====================================================
   QUICK VIEW
===================================================== */

function openQuickView(product) {

    document.getElementById(
        "quickImage"
    ).style.backgroundImage =
        `url("${product.image}")`;


    document.getElementById(
        "quickCategory"
    ).textContent =
        product.category;


    document.getElementById(
        "quickName"
    ).textContent =
        product.name;


    document.getElementById(
        "quickPrice"
    ).textContent =
        product.price;


    document.getElementById(
        "quickDescription"
    ).textContent =
        product.type === "perfumes"
            ? "Special showroom perfume offer at just ₹99. Visit Satyam Fashion or contact our team for availability and fragrance details."
            : "Discover this style at Satyam Fashion. Visit our showroom or contact our team for availability, sizes and more details.";


    document
        .getElementById("quickView")
        .classList.add("active");


    document.body.style.overflow =
        "hidden";

}


function closeQuickView() {

    document
        .getElementById("quickView")
        .classList.remove("active");


    document.body.style.overflow =
        "";

}


/* =====================================================
   CLOSE QUICK VIEW OUTSIDE
===================================================== */

document
    .getElementById("quickView")
    .addEventListener(
        "click",
        function(event) {

            if (
                event.target ===
                document.getElementById("quickView")
            ) {

                closeQuickView();

            }

        }
    );


/* =====================================================
   ESCAPE KEY
===================================================== */

document.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Escape") {

            closeQuickView();

        }

    }
);


/* =====================================================
   FORM
===================================================== */

const interestForm =
    document.getElementById("interestForm");


const formStatus =
    document.getElementById("formStatus");


interestForm.addEventListener(
    "submit",
    async function(event) {

        event.preventDefault();


        const name =
            document.getElementById(
                "customerName"
            ).value.trim();


        const mobile =
            document.getElementById(
                "customerMobile"
            ).value.trim();


        const interests = [];


        document
            .querySelectorAll(
                'input[name="interest"]:checked'
            )
            .forEach(function(item) {

                interests.push(
                    item.value
                );

            });


        if (name.length < 2) {

            showFormStatus(
                "Please enter your name.",
                "error"
            );

            return;

        }


        if (!/^[0-9]{10}$/.test(mobile)) {

            showFormStatus(
                "Please enter a valid 10-digit mobile number.",
                "error"
            );

            return;

        }


        if (interests.length === 0) {

            showFormStatus(
                "Please select at least one interest.",
                "error"
            );

            return;

        }


        const data = {

            name: name,

            mobile: mobile,

            interest:
                interests.join(", ")

        };


        const button =
            interestForm.querySelector(
                ".submit-button"
            );


        const original =
            button.innerHTML;


        button.disabled = true;

        button.innerHTML =
            "<span>SENDING...</span><span>...</span>";


        try {


            if (
                GOOGLE_SCRIPT_URL &&
                !GOOGLE_SCRIPT_URL.includes(
                    "PASTE_YOUR"
                )
            ) {


                await fetch(
                    GOOGLE_SCRIPT_URL,
                    {

                        method: "POST",

                        mode: "no-cors",

                        headers: {
                            "Content-Type":
                                "text/plain;charset=utf-8"
                        },

                        body:
                            JSON.stringify(data)

                    }
                );


            } else {

                console.log(
                    "Google Sheet URL is not connected yet."
                );

                console.log(
                    "Customer:",
                    data
                );

            }


            interestForm.reset();


            button.disabled = false;

            button.innerHTML =
                original;


            showFormStatus(
                "Thank you! Our team will contact you shortly.",
                "success"
            );


        } catch(error) {

            console.error(error);


            button.disabled = false;

            button.innerHTML =
                original;


            showFormStatus(
                "Something went wrong. Please try again.",
                "error"
            );

        }

    }
);


/* =====================================================
   FORM STATUS
===================================================== */

function showFormStatus(
    message,
    type
) {

    formStatus.textContent =
        message;


    if (type === "error") {

        formStatus.style.color =
            "#a33";

    } else {

        formStatus.style.color =
            "#4d704d";

    }

}


/* =====================================================
   MOBILE NUMBER
===================================================== */

document
    .getElementById("customerMobile")
    .addEventListener(
        "input",
        function() {

            this.value =
                this.value
                    .replace(/\D/g, "")
                    .slice(0,10);

        }
    );


/* =====================================================
   INITIAL LOAD
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        createMenTabs();

        renderProducts(
            menProducts
        );

    }
);