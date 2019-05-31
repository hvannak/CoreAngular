using Microsoft.EntityFrameworkCore.Migrations;

namespace AngularJsCore.Migrations
{
    public partial class addmorefield : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "InventoryDesc",
                table: "saleInvoiceLines",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "WarehouseName",
                table: "saleInvoiceLines",
                nullable: true);

            migrationBuilder.AddColumn<decimal>(
                name: "Weight",
                table: "saleInvoiceLines",
                nullable: false,
                defaultValue: 0m);

            migrationBuilder.AddColumn<decimal>(
                name: "SaleAmount",
                table: "iNSiteStatuses",
                nullable: false,
                defaultValue: 0m);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "InventoryDesc",
                table: "saleInvoiceLines");

            migrationBuilder.DropColumn(
                name: "WarehouseName",
                table: "saleInvoiceLines");

            migrationBuilder.DropColumn(
                name: "Weight",
                table: "saleInvoiceLines");

            migrationBuilder.DropColumn(
                name: "SaleAmount",
                table: "iNSiteStatuses");
        }
    }
}
