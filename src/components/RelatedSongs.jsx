import SongBar from './SongBar';

const RelatedSongs = ({
  data,
  isPlaying,
  activeSOng,
  handlePauseClick,
  handlePlayClick,
  artistId,
}) => (
  <div className="flec flex-col">
    <h1 className="font-bold text-3xl text-white">
      Related Songs:
    </h1>

    <div className="mt-6 w-full flex flex-col">
      {data?.map((song, index) => (
        <SongBar
          key={`${song.key}-${artistId}`}
          song={song}
          index={index}
          artistId={artistId}
          isPlaying={isPlaying}
          activeSong={activeSOng}
          handlePauseClick={handlePauseClick}
          handlePlayClick={handlePlayClick}
        />
      ))}
    </div>
  </div>
);

export default RelatedSongs;
