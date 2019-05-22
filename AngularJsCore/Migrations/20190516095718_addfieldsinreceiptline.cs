using Microsoft.EntityFrameworkCore.Migrations;

namespace AngularJsCore.Migrations
{
    public partial class addfieldsinreceiptline : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ReceiptLine_projects_ProjectId",
                table: "ReceiptLine");

            migrationBuilder.DropForeignKey(
                name: "FK_ReceiptLine_Receipt_ReceiptId",
                table: "ReceiptLine");

            migrationBuilder.DropPrimaryKey(
                name: "PK_ReceiptLine",
                table: "ReceiptLine");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Receipt",
                table: "Receipt");

            migrationBuilder.RenameTable(
                name: "ReceiptLine",
                newName: "receiptLines");

            migrationBuilder.RenameTable(
                name: "Receipt",
                newName: "receipts");

            migrationBuilder.RenameIndex(
                name: "IX_ReceiptLine_ReceiptId",
                table: "receiptLines",
                newName: "IX_receiptLines_ReceiptId");

            migrationBuilder.RenameIndex(
                name: "IX_ReceiptLine_ProjectId",
                table: "receiptLines",
                newName: "IX_receiptLines_ProjectId");

            migrationBuilder.AddColumn<string>(
                name: "InventoryDesr",
                table: "receiptLines",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "InventoryId",
                table: "receiptLines",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "ProjectName",
                table: "receiptLines",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "WarehouseName",
                table: "receiptLines",
                nullable: true);

            migrationBuilder.AddColumn<decimal>(
                name: "TotalCost",
                table: "receipts",
                nullable: false,
                defaultValue: 0m);

            migrationBuilder.AddColumn<decimal>(
                name: "TotalQty",
                table: "receipts",
                nullable: false,
                defaultValue: 0m);

            migrationBuilder.AddPrimaryKey(
                name: "PK_receiptLines",
                table: "receiptLines",
                column: "ReceiptLineId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_receipts",
                table: "receipts",
                column: "ReceiptId");

            migrationBuilder.AddForeignKey(
                name: "FK_receiptLines_projects_ProjectId",
                table: "receiptLines",
                column: "ProjectId",
                principalTable: "projects",
                principalColumn: "ProjectId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_receiptLines_receipts_ReceiptId",
                table: "receiptLines",
                column: "ReceiptId",
                principalTable: "receipts",
                principalColumn: "ReceiptId",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_receiptLines_projects_ProjectId",
                table: "receiptLines");

            migrationBuilder.DropForeignKey(
                name: "FK_receiptLines_receipts_ReceiptId",
                table: "receiptLines");

            migrationBuilder.DropPrimaryKey(
                name: "PK_receipts",
                table: "receipts");

            migrationBuilder.DropPrimaryKey(
                name: "PK_receiptLines",
                table: "receiptLines");

            migrationBuilder.DropColumn(
                name: "TotalCost",
                table: "receipts");

            migrationBuilder.DropColumn(
                name: "TotalQty",
                table: "receipts");

            migrationBuilder.DropColumn(
                name: "InventoryDesr",
                table: "receiptLines");

            migrationBuilder.DropColumn(
                name: "InventoryId",
                table: "receiptLines");

            migrationBuilder.DropColumn(
                name: "ProjectName",
                table: "receiptLines");

            migrationBuilder.DropColumn(
                name: "WarehouseName",
                table: "receiptLines");

            migrationBuilder.RenameTable(
                name: "receipts",
                newName: "Receipt");

            migrationBuilder.RenameTable(
                name: "receiptLines",
                newName: "ReceiptLine");

            migrationBuilder.RenameIndex(
                name: "IX_receiptLines_ReceiptId",
                table: "ReceiptLine",
                newName: "IX_ReceiptLine_ReceiptId");

            migrationBuilder.RenameIndex(
                name: "IX_receiptLines_ProjectId",
                table: "ReceiptLine",
                newName: "IX_ReceiptLine_ProjectId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Receipt",
                table: "Receipt",
                column: "ReceiptId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_ReceiptLine",
                table: "ReceiptLine",
                column: "ReceiptLineId");

            migrationBuilder.AddForeignKey(
                name: "FK_ReceiptLine_projects_ProjectId",
                table: "ReceiptLine",
                column: "ProjectId",
                principalTable: "projects",
                principalColumn: "ProjectId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_ReceiptLine_Receipt_ReceiptId",
                table: "ReceiptLine",
                column: "ReceiptId",
                principalTable: "Receipt",
                principalColumn: "ReceiptId",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
