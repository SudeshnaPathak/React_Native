export async function fetchProducts() {
            const response = await fetch('https://dummyjson.com/products');
            const data = await response.json();
            const products = data.products;
            const container = document.getElementById('productContainer');
            container.innerHTML = '';

            products.forEach(product => {
                container.innerHTML += `
                    <div class="col mb-3">
                        <div class="card border-dark">
                            <img src="${product.thumbnail}"
                                class="card-img-top p-3"
                                alt="${product.title}"
                                style="height:200px; object-fit:contain;">

                            <div class="card-body">
                                <div class="row text-center">
                                    <div class="col-12">
                                        <h5 class="card-title">${product.title}</h5>
                                    </div>
                                    <div class="col-6">
                                        <div class="border p-2 text-success">
                                            $${product.price}
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="border p-2 text-warning">
                                            ${product.rating}⭐ 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
            });
        }
