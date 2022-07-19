import React from "react";

import { Tile } from "../tile/Tile";

export const TileList = ({tilelist}) => {
  return (
    <div>
      {tilelist.map((tile) => <Tile tile={tile} />
      )}
    </div>
  );
};
