using Microsoft.EntityFrameworkCore.Migrations;

namespace AngularJsCore.Migrations
{
    public partial class updatecascadedelete : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_OrderLines_Inventorys_InventoryId",
                table: "OrderLines");

            migrationBuilder.DropForeignKey(
                name: "FK_Orders_customers_CustomerId",
                table: "Orders");

            migrationBuilder.DropForeignKey(
                name: "FK_projects_warehouses_WarehouseId",
                table: "projects");

            migrationBuilder.DropForeignKey(
                name: "FK_saleInvoiceLines_Inventorys_InventoryId",
                table: "saleInvoiceLines");

            migrationBuilder.DropForeignKey(
                name: "FK_saleInvoices_customers_CustomerId",
                table: "saleInvoices");

            migrationBuilder.DropForeignKey(
                name: "FK_saleInvoices_projects_ProjectId",
                table: "saleInvoices");

            migrationBuilder.AddForeignKey(
                name: "FK_OrderLines_Inventorys_InventoryId",
                table: "OrderLines",
                column: "InventoryId",
                principalTable: "Inventorys",
                principalColumn: "InventoryId",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Orders_customers_CustomerId",
                table: "Orders",
                column: "CustomerId",
                principalTable: "customers",
                principalColumn: "CustomerId",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_projects_warehouses_WarehouseId",
                table: "projects",
                column: "WarehouseId",
                principalTable: "warehouses",
                principalColumn: "WarehouseId",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_saleInvoiceLines_Inventorys_InventoryId",
                table: "saleInvoiceLines",
                column: "InventoryId",
                principalTable: "Inventorys",
                principalColumn: "InventoryId",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_saleInvoices_customers_CustomerId",
                table: "saleInvoices",
                column: "CustomerId",
                principalTable: "customers",
                principalColumn: "CustomerId",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_saleInvoices_projects_ProjectId",
                table: "saleInvoices",
                column: "ProjectId",
                principalTable: "projects",
                principalColumn: "ProjectId",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_OrderLines_Inventorys_InventoryId",
                table: "OrderLines");

            migrationBuilder.DropForeignKey(
                name: "FK_Orders_customers_CustomerId",
                table: "Orders");

            migrationBuilder.DropForeignKey(
                name: "FK_projects_warehouses_WarehouseId",
                table: "projects");

            migrationBuilder.DropForeignKey(
                name: "FK_saleInvoiceLines_Inventorys_InventoryId",
                table: "saleInvoiceLines");

            migrationBuilder.DropForeignKey(
                name: "FK_saleInvoices_customers_CustomerId",
                table: "saleInvoices");

            migrationBuilder.DropForeignKey(
                name: "FK_saleInvoices_projects_ProjectId",
                table: "saleInvoices");

            migrationBuilder.AddForeignKey(
                name: "FK_OrderLines_Inventorys_InventoryId",
                table: "OrderLines",
                column: "InventoryId",
                principalTable: "Inventorys",
                principalColumn: "InventoryId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Orders_customers_CustomerId",
                table: "Orders",
                column: "CustomerId",
                principalTable: "customers",
                principalColumn: "CustomerId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_projects_warehouses_WarehouseId",
                table: "projects",
                column: "WarehouseId",
                principalTable: "warehouses",
                principalColumn: "WarehouseId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_saleInvoiceLines_Inventorys_InventoryId",
                table: "saleInvoiceLines",
                column: "InventoryId",
                principalTable: "Inventorys",
                principalColumn: "InventoryId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_saleInvoices_customers_CustomerId",
                table: "saleInvoices",
                column: "CustomerId",
                principalTable: "customers",
                principalColumn: "CustomerId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_saleInvoices_projects_ProjectId",
                table: "saleInvoices",
                column: "ProjectId",
                principalTable: "projects",
                principalColumn: "ProjectId",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
