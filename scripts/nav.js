const element = document.getElementById("navbar");

element.scrollIntoView();
element.scrollIntoView(false);
element.scrollIntoView({block: "end"});
element.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest" });

const goToCount = document.getElementById("toCount");
const goToWhat = document.getElementById("toWhat");
const goToWhyI = document.getElementById("toWhyI");
const goToWhyU = document.getElementById("toWhyU");

goToCount.addEventListener("click", () => {
    goToCount.scrollIntoView({behavior: "smooth", block: "end"});
});
goToWhat.addEventListener("click", () => {
    goToWhat.scrollIntoView({behavior: "smooth", block: "start"});
});
