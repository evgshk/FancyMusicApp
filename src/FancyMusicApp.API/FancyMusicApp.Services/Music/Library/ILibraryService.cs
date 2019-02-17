using FancyMusicApp.Models.Enumerations;
using System.Threading.Tasks;

namespace FancyMusicApp.Services.Music.Library
{
    public interface ILibraryService
    {
        /// <summary>
        /// Search media content in library
        /// </summary>
        /// <param name="term">Search term</param>
        /// <param name="entity">Media entity type</param>
        /// <returns></returns>
        Task Search(string term, MediaEntity entity);
    }
}
