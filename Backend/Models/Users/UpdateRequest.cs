namespace WebApi.Models.Users;

using System.ComponentModel.DataAnnotations;
using WebApi.Entities;

public class UpdateRequest
{
    public string FirstName { get; set; }
    public string LastName { get; set; }

    [EmailAddress]
    public string Email { get; set; }


    public string CompanyName { get; set; }
    public string Industry { get; set; } 
    public string PrimaryContact { get; set; }
    public string AddressLine1 { get; set; }
    public string AddressLine2 { get; set; }
    public string AddressState { get; set; }
    public string AddressCity { get; set; }
    public string AddressCountry { get; set; }
    public string AnnualRevenue { get; set; }
    public DateTime Date { get; set; } 
    private string replaceEmptyWithNull(string value)
    {
        return string.IsNullOrEmpty(value) ? null : value;
    }
}