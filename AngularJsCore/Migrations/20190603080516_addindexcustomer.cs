using Microsoft.EntityFrameworkCore.Migrations;

namespace AngularJsCore.Migrations
{
    public partial class addindexcustomer : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "CustomerCD",
                table: "customers",
                nullable: true,
                oldClrType: typeof(string),
                oldNullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_customers_CustomerCD",
                table: "customers",
                column: "CustomerCD");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_customers_CustomerCD",
                table: "customers");

            migrationBuilder.AlterColumn<string>(
                name: "CustomerCD",
                table: "customers",
                nullable: true,
                oldClrType: typeof(string),
                oldNullable: true);
        }
    }
}
