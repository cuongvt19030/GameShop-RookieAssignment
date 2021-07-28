import { 
    Multiplayer,
    Adventure,
    Shooting,
    HackandSlash,
    BattleRoyale,
    AllGenre,
    MultiplayerLabel,
    AdventureLabel,
    ShootingLabel,
    HackandSlashLabel,
    BattleRoyaleLabel,
    AllGenreLabel
} from "../Constants/Game/GameConstants";

export const GenreOptions = [
    { id: 1, label: MultiplayerLabel, value: Multiplayer },
    { id: 2, label: AdventureLabel, value: Adventure },
    { id: 3, label: ShootingLabel, value: Shooting },
    { id: 4, label: HackandSlashLabel, value: HackandSlash },
    { id: 5, label: BattleRoyaleLabel, value: BattleRoyale },
];

export const FilterGenreOptions = [
    { id: 1, label: AllGenreLabel, value: AllGenre },
    { id: 2, label: MultiplayerLabel, value: Multiplayer },
    { id: 3, label: AdventureLabel, value: Adventure },
    { id: 4, label: ShootingLabel, value: Shooting },
    { id: 5, label: HackandSlashLabel, value: HackandSlash },
    { id: 6, label: BattleRoyaleLabel, value: BattleRoyale },
];
