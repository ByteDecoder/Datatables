using Data.Models;

namespace Data.Repository
{
    public interface IPersonalInfoRepository: IGenericRepository<PersonalInfo>
    {
        PersonalInfo Get(int blogId);
    }
}
