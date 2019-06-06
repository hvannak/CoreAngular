using Microsoft.EntityFrameworkCore.Migrations;

namespace AngularJsCore.Migrations
{
    public partial class deletecascadeindailygrow : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_dailyAnimalGrow_Inventorys_InventoryId",
                table: "dailyAnimalGrow");

            migrationBuilder.DropForeignKey(
                name: "FK_dailyAnimalGrow_projects_ProjectId",
                table: "dailyAnimalGrow");

            migrationBuilder.AddForeignKey(
                name: "FK_dailyAnimalGrow_Inventorys_InventoryId",
                table: "dailyAnimalGrow",
                column: "InventoryId",
                principalTable: "Inventorys",
                principalColumn: "InventoryId",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_dailyAnimalGrow_projects_ProjectId",
                table: "dailyAnimalGrow",
                column: "ProjectId",
                principalTable: "projects",
                principalColumn: "ProjectId",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_dailyAnimalGrow_Inventorys_InventoryId",
                table: "dailyAnimalGrow");

            migrationBuilder.DropForeignKey(
                name: "FK_dailyAnimalGrow_projects_ProjectId",
                table: "dailyAnimalGrow");

            migrationBuilder.AddForeignKey(
                name: "FK_dailyAnimalGrow_Inventorys_InventoryId",
                table: "dailyAnimalGrow",
                column: "InventoryId",
                principalTable: "Inventorys",
                principalColumn: "InventoryId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_dailyAnimalGrow_projects_ProjectId",
                table: "dailyAnimalGrow",
                column: "ProjectId",
                principalTable: "projects",
                principalColumn: "ProjectId",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
