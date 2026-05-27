import { useState } from "react";

import EpisodeList from "../episodes/EpisodeList";
import EpisodeDetails from "../episodes/EpisodeDetails";

import "./shows.css";

/** This lets viewers browse through the details of a selected show */
export default function ShowDetails({ show }) {
  const [selectedEpisode, setSelectedEpisode] = useState();

  if (!show) {
    return <p>Please select a show to learn more.</p>;
  }

  return (
    <div className="show-details">
      <EpisodeList
        name={show.name}
        episodes={show.episodes}
        selectedEpisode={selectedEpisode}
        setSelectedEpisode={setSelectedEpisode}
      />
      <EpisodeDetails episode={selectedEpisode} />
    </div>
  );
}
