navbar_html_classlist(); // memanggil html div class (posisi wajib paling atas)
footer_navbar_html_classlist(); // memanggil html div class (posisi wajib paling atas)

// ==================== Mobile Menu List Navbar ====================
const navbarHeader = document.querySelector(".navbar_header");
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav_menu");

hamburger.addEventListener("click", () => {
	navbarHeader.classList.toggle("active");
	hamburger.classList.toggle("active");
	navMenu.classList.toggle("active");
});
// ==================== Mobile Menu List Navbar ====================

// ==================================== Desktop Hover Dropdown Spesific Product ====================================
let layar_DesktopResponsive = window.innerWidth;
if (layar_DesktopResponsive > 768) {
	// ==================================== Desktop Access Mode ====================================
	// ------------- Food Container --------------------
	let onHover_FoodContainer = document.getElementById(
		"desk_hoverFoodContainer"
	);
	let desk_content_FoodContainer = document.getElementById(
		"food_container_dropdown"
	);

	onHover_FoodContainer.addEventListener("mouseover", function (event) {
		if (desk_content_FoodContainer.clientHeight === 0) {
			// Jika tinggi nol, atur tinggi ke tinggi scroll content
			desk_content_FoodContainer.style.height =
				desk_content_FoodContainer.scrollHeight + 20 + "px";
		}
	});
	onHover_FoodContainer.addEventListener("mouseleave", function (event) {
		// Jika tinggi bukan nol, atur tinggi ke nol
		desk_content_FoodContainer.style.height = 0;
	});

	// ------------- Beveragewares --------------------
	let onHover_Beveragewares = document.getElementById("desk_hoverBeverageware");
	let desk_content_Beveragewares = document.getElementById(
		"beverageware_dropdown"
	);

	onHover_Beveragewares.addEventListener("mouseover", function (event) {
		if (desk_content_Beveragewares.clientHeight === 0) {
			// Jika tinggi nol, atur tinggi ke tinggi scroll content
			desk_content_Beveragewares.style.height =
				desk_content_Beveragewares.scrollHeight + 20 + "px";
		}
	});
	onHover_Beveragewares.addEventListener("mouseleave", function (event) {
		// Jika tinggi bukan nol, atur tinggi ke nol
		desk_content_Beveragewares.style.height = 0;
	});
	// ------------- Beveragewares --------------------
	// ==================================== Desktop Access Mode ====================================
}

// ==================================== Desktop Hover Dropdown Spesific Product ====================================
// ==================================== Mobile CLick Dropdown Button ====================================
// Navbar DropDown Menu Products
if (layar_DesktopResponsive < 768) {
	// ==================================== Mobile Access Mode ====================================
	let categories_dropdown = document.getElementById(
		"toggle_Dropdown_Navbar_Menu"
	);
	let categories_dropdown_temporary;
	// Set tinggi elemen ke tinggi scroll content
	// categories_dropdown.style.height = 0;
	function dropdownFunction() {
		if (categories_dropdown.clientHeight === 0) {
			// Jika tinggi nol, atur tinggi ke tinggi scroll content
			categories_dropdown.style.height =
				categories_dropdown.scrollHeight + "px";
			categories_dropdown_temporary = categories_dropdown.scrollHeight;
		} else {
			// Jika tinggi bukan nol, atur tinggi ke nol
			categories_dropdown.style.height = 0;
		}
	}

	// === Food Container ===
	// Set tinggi elemen ke tinggi scroll content
	let food_container_spesific_dropdown = document.getElementById(
		"food_container_dropdown"
	);

	function food_container_categoriesDropdown() {
		if (food_container_spesific_dropdown.clientHeight === 0) {
			// Jika tinggi nol, atur tinggi ke tinggi scroll content
			food_container_spesific_dropdown.style.height =
				food_container_spesific_dropdown.scrollHeight + "px";
			// ------------------ Menyesuaikan ketinggian categories dengan spesific ------------------;
			categories_dropdown.style.height =
				categories_dropdown_temporary +
				food_container_spesific_dropdown.scrollHeight +
				"px";
			// ------------------ Menyesuaikan ketinggian categories dengan spesific ------------------;
			beverageware_spesific_dropdown.style.height = 0;
		} else {
			// Jika tinggi bukan nol, atur tinggi ke nol
			food_container_spesific_dropdown.style.height = 0;
			categories_dropdown.style.height = categories_dropdown_temporary + "px";
		}
	}
	// === Food Container ===

	// === Beveragewares ===
	// Set tinggi elemen ke tinggi scroll content
	let beverageware_spesific_dropdown = document.getElementById(
		"beverageware_dropdown"
	);

	function beverageware_categoriesDropdown() {
		if (beverageware_spesific_dropdown.clientHeight === 0) {
			// Jika tinggi nol, atur tinggi ke tinggi scroll content
			beverageware_spesific_dropdown.style.height =
				beverageware_spesific_dropdown.scrollHeight + "px";
			// ------------------ Menyesuaikan ketinggian categories dengan spesific ------------------;
			categories_dropdown.style.height =
				beverageware_spesific_dropdown.scrollHeight +
				categories_dropdown_temporary +
				"px";
			// ------------------ Menyesuaikan ketinggian categories dengan spesific ------------------;
			food_container_spesific_dropdown.style.height = 0;
		} else {
			// Jika tinggi bukan nol, atur tinggi ke nol
			beverageware_spesific_dropdown.style.height = 0;
			categories_dropdown.style.height = categories_dropdown_temporary + "px";
		}
	}
	// === Beveragewares ===
	// ==================================== Mobile Access Mode ====================================
}

// ==================================== Mobile CLick Dropdown Button ====================================

// Semua isi div navbar ke html
function navbar_html_classlist() {
	// navlinks
	const takaware_Header = "./index.html";

	const about_menu = "./about.html";

	const foodContainer_categories = "./food_container.html";
	const beveragewares_categories = "./beverageware.html";

	const jade_foodcontainer = "./jade_food_container.html";
	const cleo_foodcontainer = "./cleo_food_container.html";
	const chloe_foodcontainer = "./chloe_food_container.html";
	const gemini_foodcontainer = "./gemini_food_container.html";
	const cosmo_foodcontainer = "./cosmo_food_container.html";
	const luna_foodcontainer = "./luna_food_container.html";

	const ella_foodcontainer = "./ella_food_container.html";
	const fuji_foodcontainer = "./fuji_food_container.html";
	const leo_foodcontainer = "./leo_food_container.html";

	const zen_beveragewares = "./zen_beverageware.html";
	const kylo_beveragewares = "./kylo_beverageware.html";
	const izzy_beveragewares = "./izzy_beverageware.html";

	const akira_beveragewares = "./akira_beverageware.html";
	const momo_beveragewares = "./momo_beverageware.html";
	const shobu_beveragewares = "./shobu_beverageware.html";
	// navlinks

	let navDiv = document.getElementById("js_navbar_class");
	navDiv.innerHTML = `
	<nav class="navbar_container">
            <a href="${takaware_Header}" class="nav_branding">Takaware</a>
        
            <ul class="nav_menu">
                <li class="nav_item">
                    <a href="${about_menu}" class="nav_link">About</a>
                </li>
                <li class="nav_item">
                    <div class="dropdown">
                        <button class="dropbtn" onclick="dropdownFunction()">Product
                            <i class="dropdown_icon fa fa-caret-down"></i>
                        </button>
                        <div class="dropdown-content" id="toggle_Dropdown_Navbar_Menu">
                            <div class="product_category" id="desk_hoverFoodContainer">
                                <div class="product_category_links_dropdown" >
                                <a href="${foodContainer_categories}" class="category_links">Food Container</a>
                                <button onclick="food_container_categoriesDropdown()" class="dropdown_spesific_menu"><i class="dropdown_icon fa fa-caret-down"></i></button>
                                </div>
                                <ul id="food_container_dropdown" class="spesifict_submenu_product">
                                    <a href="${jade_foodcontainer}">Jade</a>
                                    <a href="${cleo_foodcontainer}">Cleo</a>
                                    <a href="${chloe_foodcontainer}">Chloe</a>
                                    <a href="${gemini_foodcontainer}">Gemini</a>
                                    <a href="${cosmo_foodcontainer}">Cosmo</a>
                                    <a href="${luna_foodcontainer}">Luna</a>
                                    <a href="${ella_foodcontainer}">Ella</a>
                                    <a href="${fuji_foodcontainer}">Fuji</a>
                                    <a href="${leo_foodcontainer}">Leo</a>
                                </ul>
                            </div>
                            <div class="product_category" id="desk_hoverBeverageware">
                                <div class="product_category_links_dropdown">
                                    <a class="category_links" href="${beveragewares_categories}">Beverageware</a>
                                    <button onclick="beverageware_categoriesDropdown()" class="dropdown_spesific_menu"><i class="dropdown_icon fa fa-caret-down"></i></button>
                                </div>
                                <div>
                                    <ul id="beverageware_dropdown" class="spesifict_submenu_product">
                                        <a href="${zen_beveragewares}">Zen</a>
                                        <a href="${kylo_beveragewares}">Kylo</a>
                                        <a href="${izzy_beveragewares}">Izzy</a>
                                        <a href="${akira_beveragewares}">Akira</a>
                                        <a href="${momo_beveragewares}">Momo</a>
                                        <a href="${shobu_beveragewares}">Shobu</a>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
            <div class="hamburger">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
        </nav>
	`;
}

// ===================================================== Footer =====================================================
// Navbar DropDown Menu Products
let footer_categories_dropdown = document.getElementById(
	"toggle_Dropdown_footer"
);
let footer_categories_dropdown_temporary;
// Set tinggi elemen ke tinggi scroll content
// categories_dropdown.style.height = 0;
function dropdown_footer_Function() {
	if (footer_categories_dropdown.clientHeight === 0) {
		// Jika tinggi nol, atur tinggi ke tinggi scroll content
		footer_categories_dropdown.style.height =
			footer_categories_dropdown.scrollHeight + "px";
		footer_categories_dropdown_temporary =
			footer_categories_dropdown.scrollHeight;
	} else {
		// Jika tinggi bukan nol, atur tinggi ke nol
		footer_categories_dropdown.style.height = 0;
	}
}

// === Footer Food Container ===
// Set tinggi elemen ke tinggi scroll content
let footer_food_container_spesific_dropdown = document.getElementById(
	"footer_food_container_dropdown"
);

function footer_food_container_categoriesDropdown() {
	if (footer_food_container_spesific_dropdown.clientHeight === 0) {
		// Jika tinggi nol, atur tinggi ke tinggi scroll content
		footer_food_container_spesific_dropdown.style.height =
			footer_food_container_spesific_dropdown.scrollHeight + "px";
		// ------------------ Menyesuaikan ketinggian categories dengan spesific ------------------;
		footer_categories_dropdown.style.height =
			footer_categories_dropdown_temporary +
			footer_food_container_spesific_dropdown.scrollHeight +
			"px";
		// ------------------ Menyesuaikan ketinggian categories dengan spesific ------------------;
		footer_beverageware_spesific_dropdown.style.height = 0;
	} else {
		// Jika tinggi bukan nol, atur tinggi ke nol
		footer_food_container_spesific_dropdown.style.height = 0;
		footer_categories_dropdown.style.height =
			footer_categories_dropdown_temporary + "px";
	}
}
// === Footer Food Container ===

// === Footer Food Container ===
// Set tinggi elemen ke tinggi scroll content
let footer_beverageware_spesific_dropdown = document.getElementById(
	"footer_beverageware_dropdown"
);

function footer_beverageware_categoriesDropdown() {
	if (footer_beverageware_spesific_dropdown.clientHeight === 0) {
		// Jika tinggi nol, atur tinggi ke tinggi scroll content
		footer_beverageware_spesific_dropdown.style.height =
			footer_beverageware_spesific_dropdown.scrollHeight + "px";
		// ------------------ Menyesuaikan ketinggian categories dengan spesific ------------------;
		footer_categories_dropdown.style.height =
			footer_categories_dropdown_temporary +
			footer_beverageware_spesific_dropdown.scrollHeight +
			"px";
		// ------------------ Menyesuaikan ketinggian categories dengan spesific ------------------;
		footer_food_container_spesific_dropdown.style.height = 0;
	} else {
		// Jika tinggi bukan nol, atur tinggi ke nol
		footer_beverageware_spesific_dropdown.style.height = 0;
		footer_categories_dropdown.style.height =
			footer_categories_dropdown_temporary + "px";
	}
}
// === Footer Food Container ===

function footer_navbar_html_classlist() {
	// navlinks
	const takaware_Header = "./index.html";

	const about_menu = "./about.html";

	const foodContainer_categories = "./food_container.html";
	const beveragewares_categories = "./beverageware.html";

	const jade_foodcontainer = "./jade_food_container.html";
	const cleo_foodcontainer = "./cleo_food_container.html";
	const chloe_foodcontainer = "./chloe_food_container.html";
	const gemini_foodcontainer = "./gemini_food_container.html";
	const cosmo_foodcontainer = "./cosmo_food_container.html";
	const luna_foodcontainer = "./luna_food_container.html";

	const ella_foodcontainer = "./ella_food_container.html";
	const fuji_foodcontainer = "./fuji_food_container.html";
	const leo_foodcontainer = "./leo_food_container.html";

	const zen_beveragewares = "./zen_beverageware.html";
	const kylo_beveragewares = "./kylo_beverageware.html";
	const izzy_beveragewares = "./izzy_beverageware.html";

	const akira_beveragewares = "./akira_beverageware.html";
	const momo_beveragewares = "./momo_beverageware.html";
	const shobu_beveragewares = "./shobu_beverageware.html";

	// navlinks

	let footer_navdiv = document.getElementById("footer_js_navbar_class");

	footer_navdiv.innerHTML = `
	<div class="navbar_footer">
	<a href="${takaware_Header}" class="navFooter_Branding">Takaware</a>
            <a href="${about_menu}" class="navFooter_Links">
                <div class="About">
                    About
                </div>
            </a>
            <button class="navFooter_Dropdown" onclick="dropdown_footer_Function()">
				<div class="Product">
					Product
					<i class="fa fa-caret-down"></i>
				</div>
			</button>
                <div class="dropdown_footer_content" id="toggle_Dropdown_footer">
                    <div class="footer_product_category">
						<div class="footer_container_foodcontainer_dropdown">
							<a href="${foodContainer_categories}">
								<div class="footer_category_links">Food Container</div>
							</a>
							<div onclick="footer_food_container_categoriesDropdown()" class="footer_spesific_dropdown_button"><i class="fa fa-caret-down"></i></div>
						</div>
                        <ul id="footer_food_container_dropdown" class="footer_spesifict_submenu_product">
                            <a href="${jade_foodcontainer}">
                                <div class="footer_spesific_link">Jade</div>
                            </a>
                            <a href="${cleo_foodcontainer}">
                                <div class="footer_spesific_link">Cleo</div>
                            </a>
                            <a href="${chloe_foodcontainer}">
                                <div class="footer_spesific_link">Chloe</div>
                            </a>
                            <a href="${gemini_foodcontainer}">
                                <div class="footer_spesific_link">Gemini</div>
                            </a>
                            <a href="${cosmo_foodcontainer}">
                                <div class="footer_spesific_link">Cosmo</div>
                            </a>
                            <a href="${luna_foodcontainer}">
                                <div class="footer_spesific_link">Luna</div>
                            </a>
                            <a href="${ella_foodcontainer}">
                                <div class="footer_spesific_link">Ella</div>
                            </a>
                            <a href="${fuji_foodcontainer}">
                                <div class="footer_spesific_link">Fuji</div>
                            </a>
                            <a href="${leo_foodcontainer}">
                                <div class="footer_spesific_link">Leo</div>
                            </a>
                        </ul>
                    </div>
                    <div class="footer_product_category">
						<div class="footer_container_foodcontainer_dropdown">
							<a href="${beveragewares_categories}">
								<div class="footer_category_links">Beverageware</div>
							</a>
							<div onclick="footer_beverageware_categoriesDropdown()" class="footer_spesific_dropdown_button"><i class="fa fa-caret-down"></i></div>
						</div>
                        <ul id="footer_beverageware_dropdown" class="footer_spesifict_submenu_product">
                            <a href="${zen_beveragewares}">
                                <div class="footer_spesific_link">Zen</div>
                            </a>
                            <a href="${kylo_beveragewares}">
                                <div class="footer_spesific_link">Kylo</div>
                            </a>
                            <a href="${izzy_beveragewares}">
                                <div class="footer_spesific_link">Izzy</div>
                            </a>
                            <a href="${akira_beveragewares}">
                                <div class="footer_spesific_link">Akira</div>
                            </a>
                            <a href="${momo_beveragewares}">
                                <div class="footer_spesific_link">Momo</div>
                            </a>
                            <a href="${shobu_beveragewares}">
                                <div class="footer_spesific_link">Shobu</div>
                            </a>
                        </ul>
                    </div>
                </div>
        </div>
    </div>
    <!-- Media Social Footer  -->
    <div class="footer_MediaSocial">
        <a href="https://www.instagram.com/seiji.homeliving?igsh=NTc4MTIwNjQ2YQ=="><i class="fa-brands fa-instagram"></i></a>
        <a href="https://www.tiktok.com/@seijihomeliving?_t=8k3Y6R22gD3&_r=1"><i class="fa-brands fa-tiktok"></i></a>
        <a href="https://shp.ee/p110zjq"><i class="fa-brands fa-shopify"></i></a>
        <a href="https://www.youtube.com/@Seijiware88"><i class="fa-brands fa-youtube"></i></a>
    </div>
    <!-- Copyright Footer -->
    <div class="footer_copyright">
        <p>© 2023 Takaware Com, All Rights Reserved.</p>
    </div>
	`;
}
