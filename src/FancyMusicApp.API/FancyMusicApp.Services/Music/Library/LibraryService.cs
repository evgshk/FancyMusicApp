using FancyMusicApp.Common.Extensions;
using FancyMusicApp.Models.Enumerations;
using FancyMusicApp.Models.Library.ItunesSearchResults;
using Newtonsoft.Json;
using System.Net.Http;
using System.Threading.Tasks;

namespace FancyMusicApp.Services.Music.Library
{
    public class LibraryService : MusicServiceBase, ILibraryService
    {
        private static readonly string _baseUrl = "https://itunes.apple.com";
        private static readonly HttpClientHandler _handler = new HttpClientHandler { UseDefaultCredentials = true };
        private static readonly HttpClient _client = new HttpClient(_handler);

        public async Task<ItunesSearchResult> Search(string term, MediaEntity entity)
        {
            ItunesSearchResult result = new ItunesSearchResult();

            var response = await _client
                .GetAsync($"{_baseUrl}/search?term={term}&entity={entity.GetString()}");

            if (response.IsSuccessStatusCode)
            {
                var content = await response.Content.ReadAsStringAsync();
                result = JsonConvert.DeserializeObject<ItunesSearchResult>(content);
                result.IsSucceeded = true;
            }

            return result;
        }
    }
}
