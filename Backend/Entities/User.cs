namespace WebApi.Entities;

using System.Text.Json.Serialization;

public class User
{
    public int Id { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
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
    public string Date { get; set; }
 
}
