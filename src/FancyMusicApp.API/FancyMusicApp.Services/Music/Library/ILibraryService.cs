using FancyMusicApp.Models.Enumerations;
using System.Threading.Tasks;

namespace FancyMusicApp.Services.Music.Library
{
    public interface ILibraryService
    {
        Task Search(string term, MediaEntity entity);
    }
}
