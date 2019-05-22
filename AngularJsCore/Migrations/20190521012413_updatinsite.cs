using Microsoft.EntityFrameworkCore.Migrations;

namespace AngularJsCore.Migrations
{
    public partial class updatinsite : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "QtyBeginProject",
                table: "iNSiteStatuses",
                newName: "QtyIssue");

            migrationBuilder.AddColumn<decimal>(
                name: "QtyAdjust",
                table: "iNSiteStatuses",
                nullable: false,
                defaultValue: 0m);

            migrationBuilder.AddColumn<decimal>(
                name: "QtyBegin",
                table: "iNSiteStatuses",
                nullable: false,
                defaultValue: 0m);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "QtyAdjust",
                table: "iNSiteStatuses");

            migrationBuilder.DropColumn(
                name: "QtyBegin",
                table: "iNSiteStatuses");

            migrationBuilder.RenameColumn(
                name: "QtyIssue",
                table: "iNSiteStatuses",
                newName: "QtyBeginProject");
        }
    }
}
