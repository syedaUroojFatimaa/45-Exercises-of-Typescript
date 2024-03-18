function describe_city(city: string, country:string = 'Defualt Country'){
    console.log(` ${city} is in ${country}`);
}
describe_city('karachi','pakistan');
describe_city('seoul','south korea');
describe_city('paris','france');
