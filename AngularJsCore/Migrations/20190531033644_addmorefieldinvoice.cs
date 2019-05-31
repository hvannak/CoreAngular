using Microsoft.EntityFrameworkCore.Migrations;

namespace AngularJsCore.Migrations
{
    public partial class addmorefieldinvoice : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "CustomerName",
                table: "saleInvoices",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "ProjectName",
                table: "saleInvoices",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CustomerName",
                table: "saleInvoices");

            migrationBuilder.DropColumn(
                name: "ProjectName",
                table: "saleInvoices");
        }
    }
}
