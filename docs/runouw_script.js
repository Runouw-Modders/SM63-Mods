function switchModes (thisMode) {
    if (thisMode == "automatic") {
        setCollectionDisplay("tr.automatic", "table-row");
        setCollectionDisplay("tr.custom", "none");
    } else {
        setCollectionDisplay("tr.automatic", "none");
        setCollectionDisplay("tr.custom", "table-row");
    }
}
function setCollectionDisplay(thisCollection, thisDisplayStatus) {
    var myCollection = document.querySelectorAll(thisCollection);
    var myIndex;
    for (myIndex = 0; myIndex < myCollection.length; myIndex++) {
        myCollection[myIndex].style.display=thisDisplayStatus;
    }
}

function sayHi(thisName) {
    alert('Hello');
}
