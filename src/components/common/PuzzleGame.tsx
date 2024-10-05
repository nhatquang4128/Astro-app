import React, { useState, useCallback, useEffect } from "react";
import { PicturePuzzle, PuzzlePieces } from "react-native-picture-puzzle";
import { ActivityIndicator } from "react-native";
import { Box } from "@gluestack-ui/themed";

interface Props {
  pieces: PuzzlePieces;
  setPieces: React.Dispatch<React.SetStateAction<PuzzlePieces>>;
  source: { uri: string };
}

const PuzzleGame = (props: Props) => {
  const { pieces, setPieces, source } = props;
  const [hidden, setHidden] = useState<number | null>(0); // piece to obscure
  const renderLoading = useCallback(
    (): JSX.Element => <ActivityIndicator />,
    []
  );

  const onChange = useCallback(
    (nextPieces: PuzzlePieces, nextHidden: number | null): void => {
      setPieces([...nextPieces]);
      setHidden(nextHidden);
    },
    [setPieces, setHidden]
  );

  return (
    <Box>
      <PicturePuzzle
        size={300}
        pieces={pieces}
        hidden={hidden}
        onChange={onChange}
        source={source}
        renderLoading={renderLoading}
      />
    </Box>
  );
};

export default PuzzleGame;
