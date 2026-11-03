function createAlbum(AlbumName, ArtistName, DateOfPublication, Songs, Length, OverallLength) {
    return {
        AlbumName: AlbumName,
        ArtistName: ArtistName,
        Songs: {
            Songs: Songs,
        },
        DateOfPublication: DateOfPublication,
        OverallLength: calculateLength(Songs)
    };
}

function calculateLength(Songs) {
    const totalSeconds = Songs.reduce((acc, song) => {
        const [minutes, seconds] = song.Length.split(":").map(Number);

        return acc + minutes * 60 + seconds;
    }, 0);

    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    return `${minutes}:${String(seconds).padStart(2, "0")}`;
}

const A1 = createAlbum(
    "Luh Leakyz Vol.1",
    "Yeat",
    2026,
    [
        { Name: "Lil Krazy", Length: "2:45" },
        { Name: "Time Passëd", Length: "2:21" },
        { Name: "Liv Dis Lyfe", Length: "2:17" },
        { Name: "Real Trendsettër", Length: "2:56" },
        { Name: "When tha World Ends", Length: "3:11" },
        { Name: "MARCHING", Length: "3:00" },
        { Name: "SKLUB", Length: "2:58" },
        { Name: "U could", Length: "2:49" },
        { Name: "X with the boot up", Length: "2:58" },
        { Name: "Diseasë", Length: "3:30" },
        { Name: "HeliMAn", Length: "3:12" },
        { Name: "Countup", Length: "2:34" },
        { Name: "Martian", Length: "2:54" },
        { Name: "Last Day", Length: "2:32" }
    ],
    null,
    null
);

console.dir(A1, {depth:null});
