using Fluid;
using Microsoft.AspNetCore.Html;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.AspNetCore.Routing.Template;
using System.Text.Encodings.Web;

namespace netcoredemo.Models.Componencts
{
    public class Grid
    {
        private ToolBar _toolbar;
        private string _template = @"<div id='{{model.Name}}' class='k-grid'>
    <colgroup>
        {% for col in model.Columns %}
            <col {{col.Width}}></col>
          {% endfor %}
    </colgroup>
</div>";

        public Grid()
        {
            
        }

        public string Write()
        {
            var gridoptions = new { 
                Name = "myGrid", 
                Columns = new GridColData[] { 
                    new GridColData{Width="100" }, 
                    new GridColData { Width = "100" }, 
                    new GridColData { } } 
            };
            string templateContent = _template;
            var parser = new FluidParser();

            if (parser.TryParse(templateContent,
                    out IFluidTemplate template,
                    out string error))
            {
                TemplateOptions options = new TemplateOptions();
                options.MemberAccessStrategy = new UnsafeMemberAccessStrategy();
                var ctx = new TemplateContext(
                                   new { model = gridoptions }, options, true);
                try
                {
                    var output = template.Render(ctx);
                    return output;
                }
                catch (Exception ex)
                {
                    // handling of parser error
                }
            }
            else
            {
                // handling of the template parsing error
            }
            return "something went wrong";
        }
    }
}
