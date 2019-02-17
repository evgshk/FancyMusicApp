using FancyMusicApp.Models.Enumerations;
using System;
using System.Threading.Tasks;

namespace FancyMusicApp.Services.Music.Library
{
    public class LibraryService : MusicServiceBase, ILibraryService
    {
        public Task Search(string term, MediaEntity entity)
        {
            throw new NotImplementedException();
        }
    }
}
