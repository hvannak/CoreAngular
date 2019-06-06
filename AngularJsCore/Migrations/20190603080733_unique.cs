using Microsoft.EntityFrameworkCore.Migrations;

namespace AngularJsCore.Migrations
{
    public partial class unique : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_customers_CustomerCD",
                table: "customers");

            migrationBuilder.CreateIndex(
                name: "IX_customers_CustomerCD",
                table: "customers",
                column: "CustomerCD",
                unique: true,
                filter: "[CustomerCD] IS NOT NULL");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_customers_CustomerCD",
                table: "customers");

            migrationBuilder.CreateIndex(
                name: "IX_customers_CustomerCD",
                table: "customers",
                column: "CustomerCD");
        }
    }
}
