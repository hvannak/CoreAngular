using Microsoft.EntityFrameworkCore.Migrations;

namespace AngularJsCore.Migrations
{
    public partial class removecreatebyinreceipt : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CreateBy",
                table: "receipts");

            migrationBuilder.DropColumn(
                name: "CreateBy",
                table: "receiptLines");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "CreateBy",
                table: "receipts",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "CreateBy",
                table: "receiptLines",
                nullable: true);
        }
    }
}
