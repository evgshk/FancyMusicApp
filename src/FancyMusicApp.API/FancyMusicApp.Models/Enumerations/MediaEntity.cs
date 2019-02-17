using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Threading.Tasks;

namespace FancyMusicApp.Models.Enumerations
{
    /// <summary>
    /// Media type entities
    /// For more info use the link below
    /// https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/iTuneSearchAPI/Searching.html#//apple_ref/doc/uid/TP40017632-CH5-SW2
    /// </summary>
    public enum MediaEntity
    {
        [Description("album")]
        Album,
        [Description("song")]
        Song
    }
}
