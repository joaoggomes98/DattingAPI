using System;

namespace API.Models;

 public class AppUser
    {
        public int Id { get; set; }
        public required string Name { get; set; } 
        public required string Email { get; set; } 

        public required byte[] PasswordHash { get; set; }
        public required byte[] PasswordSalt { get; set; }
    }
