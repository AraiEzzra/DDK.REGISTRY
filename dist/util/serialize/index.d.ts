export interface ISerializer<Raw, Data> {
    serialize(data: Data): Raw;
    deserialize(raw: Raw): Data;
}
