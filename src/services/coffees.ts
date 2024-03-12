export const getAllCoffees = async () => {
  const res = await fetch("https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json", {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    }
  });

  const coffees = (await res.json());
  return coffees;
}
