namespace WebApi.Models.Users;

using System.ComponentModel.DataAnnotations;
using WebApi.Entities;

public class CreateRequest
{

    [Required]
    public string FirstName { get; set; }

    [Required]
    public string LastName { get; set; }

    [Required]
    [EmailAddress]
    public string Email { get; set; }


     [Required]
    public string CompanyName { get; set; }

    [Required]
    public string Industry { get; set; }

    [Required]
    public string PrimaryContact { get; set; }

    [Required]
    public string AddressLine1 { get; set; }

    public string AddressLine2 { get; set; }

    [Required]
    public string AddressState { get; set; }

    [Required]
    public string AddressCity { get; set; }

    [Required]
    public string AddressCountry { get; set; }

    [Required]
    public string AnnualRevenue { get; set; }

    [Required]
    public string Date { get; set; } 

}
