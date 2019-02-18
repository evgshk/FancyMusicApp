using System.Threading.Tasks;
using FancyMusicApp.Models.Enumerations;
using FancyMusicApp.Models.Library.ItunesSearchResults;
using FancyMusicApp.Services.Music.Library;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace FancyMusicApp.API.Controllers
{
    [Route("api/library")]
    public class LibraryController : ApiControllerBase
    {
        private readonly ILibraryService _libraryService;

        public LibraryController(ILibraryService libraryService)
        {
            _libraryService = libraryService;
        }

        /// <summary>
        /// Search media content at library
        /// </summary>
        /// <param name="term">The URL-encoded text string you want to search for. For example: jack+johnson.</param>
        /// <param name="entity">The type of results you want returned, relative to the specified media type.</param>
        /// <response code="200">Success.</response>
        /// <response code="400">Error. An exception being occured.</response>
        /// <response code="404">Error. Item not found.</response>
        [HttpGet("search")]
        public async Task<IActionResult> Search(string term)
        {
            ItunesSearchResult result = 
                await _libraryService.Search(term, MediaEntity.Album);

            if(!result.IsSucceeded)
            {
                return BadRequest();
            }

            return Ok(result);
        }
    }
}
