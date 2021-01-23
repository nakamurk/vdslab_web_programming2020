export async function fetchImages(breed) {
    const dogNumber = 1;
    const response = await fetch(
        `https://dog.ceo/api/breed/${breed}/images/random/${dogNumber}`
    );
    const data = await response.json();
    return data.message;
}