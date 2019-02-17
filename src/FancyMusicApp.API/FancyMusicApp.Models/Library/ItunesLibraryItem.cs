using System;
using System.Collections.Generic;
using System.Text;

namespace FancyMusicApp.Models.Library
{
    public class ItunesLibraryItem
    {
        public string WrapperType { get; set; }
        public string CollectionType { get; set; }
        public string ArtistName { get; set; }
        public string CollectionName { get; set; }
        public string ArtworkUrl60 { get; set; }
        public string ArtworkUrl100 { get; set; }
        public string PrimaryGenreName { get; set; }
        public DateTime ReleaseDate { get; set; }
        public string CollectionViewUrl { get; set; }
    }
}
