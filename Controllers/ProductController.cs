using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace weather_spa.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductController : Controller
    {

        public static Product[] products = new Product[] {
            new Product(1,"apple", "a bag of apples"),
            new Product(2,"orange", "a bag of oranges for vitimin c"),
            new Product(3,"bannana", "bannana's for energy"),
            new Product(4,"mango", "mangoes")
        };
        // GET: /<controller>/
        [HttpGet("GetProducts")]
        public ActionResult<Product[]> GetProducts()
        {
            return products;
        }
    }

    public class Product {

        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public int Count { get; set; }

        public Product(int id, string name, string description) {

            this.Id = id;
            this.Name = name;
            this.Description = description;
            this.Count = 0;
        }
    }
}
