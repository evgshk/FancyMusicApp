using FancyMusicApp.Models.Enumerations;
using FancyMusicApp.Models.Library.ItunesSearchResults;
using Newtonsoft.Json;
using System;
using System.Net.Http;
using System.Threading.Tasks;

namespace FancyMusicApp.Services.Music.Library
{
    public class LibraryService : MusicServiceBase, ILibraryService
    {
        private readonly string _baseUrl = "https://itunes.apple.com";
        private static readonly HttpClientHandler _handler = new HttpClientHandler { UseDefaultCredentials = true };
        private static readonly HttpClient _client = new HttpClient(_handler);

        public async Task Search(string term, MediaEntity entity)
        {
            var response = await _client
                .GetAsync($"{_baseUrl}/search?term={term}&entity=album");

            if (response.IsSuccessStatusCode)
            {
                var content = await response.Content.ReadAsStringAsync();
                var result = JsonConvert.DeserializeObject<ItunesSearchResult>(content);
            }
        }
    }
}
