using Microsoft.EntityFrameworkCore.Migrations;

namespace AngularJsCore.Migrations
{
    public partial class addreleaseinreceipt : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "Release",
                table: "receipts",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Release",
                table: "receipts");
        }
    }
}
