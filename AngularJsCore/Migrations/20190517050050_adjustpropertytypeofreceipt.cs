using Microsoft.EntityFrameworkCore.Migrations;

namespace AngularJsCore.Migrations
{
    public partial class adjustpropertytypeofreceipt : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "UomId",
                table: "receiptLines");

            migrationBuilder.AlterColumn<string>(
                name: "ReceiptNbr",
                table: "receipts",
                nullable: true,
                oldClrType: typeof(int));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<int>(
                name: "ReceiptNbr",
                table: "receipts",
                nullable: false,
                oldClrType: typeof(string),
                oldNullable: true);

            migrationBuilder.AddColumn<int>(
                name: "UomId",
                table: "receiptLines",
                nullable: false,
                defaultValue: 0);
        }
    }
}
