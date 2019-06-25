using Microsoft.EntityFrameworkCore.Migrations;

namespace AngularJsCore.Migrations
{
    public partial class addIsSyn : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetUsers",
                keyColumns: new[] { "Id", "ConcurrencyStamp" },
                keyValues: new object[] { "22d7f3ca-c537-4854-af8a-bf70eb5d5349", "0a2e0d42-5082-41d5-97fa-810e9730c15a" });

            migrationBuilder.AddColumn<int>(
                name: "IsSyn",
                table: "saleInvoices",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IsSyn",
                table: "saleInvoices");

            migrationBuilder.InsertData(
                table: "AspNetUsers",
                columns: new[] { "Id", "AccessFailedCount", "ConcurrencyStamp", "Email", "EmailConfirmed", "FullName", "LockoutEnabled", "LockoutEnd", "NormalizedEmail", "NormalizedUserName", "PasswordHash", "PhoneNumber", "PhoneNumberConfirmed", "SecurityStamp", "TwoFactorEnabled", "UserName" },
                values: new object[] { "22d7f3ca-c537-4854-af8a-bf70eb5d5349", 0, "0a2e0d42-5082-41d5-97fa-810e9730c15a", "vannak2010@gmail.com", false, "Vannak Heng", false, null, "vannak2010@gmail.com", "vannak2010@gmail.com", "AQAAAAEAACcQAAAAELJBSgZcx0bvVej9qoJz3FH7uR5pFMJ1fzv4cQEDNXaAfoRisrcGf/JOh2nwiTtO0w==", null, false, "YABAAQWF7PIGT7E4PUKC7H7EI774FZCO", false, "vannak2010@gmail.com" });
        }
    }
}
