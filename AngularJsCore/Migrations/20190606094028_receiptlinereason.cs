using Microsoft.EntityFrameworkCore.Migrations;

namespace AngularJsCore.Migrations
{
    public partial class receiptlinereason : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Reason",
                table: "saleInvoiceLines");

            migrationBuilder.AddColumn<string>(
                name: "Reason",
                table: "receiptLines",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Reason",
                table: "receiptLines");

            migrationBuilder.AddColumn<string>(
                name: "Reason",
                table: "saleInvoiceLines",
                nullable: true);
        }
    }
}
