using System;
using System.Collections.Generic;
using System.Text;

namespace FancyMusicApp.Models.Library.ItunesSearchResults
{
    public class ItunesSearchResult
    {
        public string ResultCount { get; set; }
        public List<ItunesLibraryItem> Results { get; set; }
    }
}
