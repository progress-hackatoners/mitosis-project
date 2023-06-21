using Microsoft.AspNetCore.Html;
using netcoredemo.Models.Componencts;

namespace netcoredemo.Models
{
    public class GridHelper
    {
        public static string GridComponent()
        {
            var builder = new HtmlContentBuilder();
            var grid = new Grid();
            return grid.Write();
        }
    }
}
