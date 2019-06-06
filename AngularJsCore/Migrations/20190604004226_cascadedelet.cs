using Microsoft.EntityFrameworkCore.Migrations;

namespace AngularJsCore.Migrations
{
    public partial class cascadedelet : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Inventorys_categories_CategoryId",
                table: "Inventorys");

            migrationBuilder.AddForeignKey(
                name: "FK_Inventorys_categories_CategoryId",
                table: "Inventorys",
                column: "CategoryId",
                principalTable: "categories",
                principalColumn: "CategoryId",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Inventorys_categories_CategoryId",
                table: "Inventorys");

            migrationBuilder.AddForeignKey(
                name: "FK_Inventorys_categories_CategoryId",
                table: "Inventorys",
                column: "CategoryId",
                principalTable: "categories",
                principalColumn: "CategoryId",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
