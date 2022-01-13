import data from "../data";

const NewsList = {
    render() {
        return /* html */`
                <h2 class="font-semibold text-2xl uppercase text-blue-800 my-4">Tin tức học tập</h2>
                <div class="grid grid-cols-3 gap-8">
                    ${data.map((post) => `
                        <div class="border p-4">
                            <a href="/news/${post.id}">
                                <img src="${post.img}" alt="" />
                            </a>
                            <a href="/news/${post.id}">
                            <h3 class="my-3"><a href="" class="font-semibold text-lg text-orange-500">${post.title}</a></h3>   
                            </a>
                            <a href="/news/${post.id}">
                            <p>${post.desc}</p> 
                            </a>         
                           
                        </div>
                    `).join("")}  
                </div>
        
        `;
    },
};
export default NewsList;