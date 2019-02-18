using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;

namespace FancyMusicApp.API.Controllers
{
    [ApiController]
    [Produces("application/json")]
    [BadRequestExceptionFilter]
    public class ApiControllerBase: Controller
    {
        private class BadRequestExceptionFilterAttribute : ExceptionFilterAttribute
        {
            public override void OnException(ExceptionContext context)
            {
                new BadRequestObjectResult(context.Exception);
                context.Result = new BadRequestObjectResult(context.Exception);
            }
        }
    }
}
