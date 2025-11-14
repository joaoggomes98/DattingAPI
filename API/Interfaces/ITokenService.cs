using System;
using API.Models;

namespace API.Interfaces;

public interface ITokenService
{
    string CreatToken(AppUser appUser);
}
