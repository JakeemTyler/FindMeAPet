// array of dogs

const allDogs = [

    {
        dogName: "Amelia",
        breed: "Pointer/Mix",
        age: 10
    },

    {
        dogName: "Ashton",
        breed: "Terrier,American Pit Bull",
        age: 1
    },

    {
        dogName: "Axl",
        breed: "Terrier,American Pit Bull",
        age: 2
    },

    {
        dogName: "Beatrice",
        breed: "Terrier,American Pit Bull",
        age: 3
    },

    {
        dogName: "Beef",
        breed: "Bulldog,American Pit Bull",
        age: 1
    },

    {
        dogName: "Benji",
        breed: "Retriever, Labrador/Chow",
        age: 5
    },

    {
        dogName: "Bella",
        breed: "Terrier,American Staffordshire",
        age: 4
    },

    {
        dogName: "Biggie",
        breed: "Terrier,Pit Bull",
        age: 7
    },

    {
        dogName: "Bronson",
        breed: "Terrier,American Pit Bull",
        age: 6
    },

    {
        dogName: "Butter",
        breed: "Pug",
        age: 3
    },
]

// use find all dogs greater than 5
const dogsShown = () => {

// taking inputAge 

    let ageOfDog = document.querySelector("#inputAge").value;
    ageOfDog = parseInt(ageOfDog);

// empty array for list 
    const chosenDogs = [];
    allDogs.forEach(
        (allDogs) => { 
            if (allDogs.age >= ageOfDog){
                chosenDogs.push(allDogs);
            }
        }
    )
    
    console.log(chosenDogs)

// Displaying Output of dogs
    let dogsDisplayed = document.querySelector(".selectedPetInfo");
    displayString = " ";

// showing selected dogs 
    chosenDogs.forEach((dog) => {
            if (dog.age >= ageOfDog){
                displayString += `${dog.dogName} is a ${dog.breed} and is the age of ${dog.age} <br>` ;
            }
        });
        dogsDisplayed.innerHTML = displayString;


}