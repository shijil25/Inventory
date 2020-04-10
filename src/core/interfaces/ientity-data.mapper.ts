export interface IEntityDataMapper<Domain, Entity> {
    mapToDomain : (entity : Entity) => Domain;
    mapToEntity : (domain : Domain) => Entity;
}