using Microsoft.EntityFrameworkCore.Migrations;

namespace AngularJsCore.Migrations
{
    public partial class updateinsite1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<decimal>(
                name: "QtyReceipt",
                table: "iNSiteStatuses",
                nullable: false,
                defaultValue: 0m);

            migrationBuilder.AddColumn<decimal>(
                name: "QtySaleByKg",
                table: "iNSiteStatuses",
                nullable: false,
                defaultValue: 0m);

            migrationBuilder.AddColumn<decimal>(
                name: "QtySaleByUnit",
                table: "iNSiteStatuses",
                nullable: false,
                defaultValue: 0m);

            migrationBuilder.AddColumn<decimal>(
                name: "ReceiptCost",
                table: "iNSiteStatuses",
                nullable: false,
                defaultValue: 0m);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "QtyReceipt",
                table: "iNSiteStatuses");

            migrationBuilder.DropColumn(
                name: "QtySaleByKg",
                table: "iNSiteStatuses");

            migrationBuilder.DropColumn(
                name: "QtySaleByUnit",
                table: "iNSiteStatuses");

            migrationBuilder.DropColumn(
                name: "ReceiptCost",
                table: "iNSiteStatuses");
        }
    }
}
