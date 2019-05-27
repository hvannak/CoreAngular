using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace AngularJsCore.Migrations
{
    public partial class againanimalgrow : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "dailyAnimalGrow",
                columns: table => new
                {
                    DailyGrowId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    InventoryId = table.Column<int>(nullable: false),
                    ProjectId = table.Column<int>(nullable: false),
                    WarehouseId = table.Column<int>(nullable: false),
                    ProjectName = table.Column<string>(nullable: true),
                    WarehouseName = table.Column<string>(nullable: true),
                    InventoryDesc = table.Column<string>(nullable: true),
                    DateGrow = table.Column<DateTime>(nullable: false),
                    Weight = table.Column<decimal>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_dailyAnimalGrow", x => x.DailyGrowId);
                    table.ForeignKey(
                        name: "FK_dailyAnimalGrow_Inventorys_InventoryId",
                        column: x => x.InventoryId,
                        principalTable: "Inventorys",
                        principalColumn: "InventoryId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_dailyAnimalGrow_projects_ProjectId",
                        column: x => x.ProjectId,
                        principalTable: "projects",
                        principalColumn: "ProjectId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_dailyAnimalGrow_InventoryId",
                table: "dailyAnimalGrow",
                column: "InventoryId");

            migrationBuilder.CreateIndex(
                name: "IX_dailyAnimalGrow_ProjectId",
                table: "dailyAnimalGrow",
                column: "ProjectId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "dailyAnimalGrow");
        }
    }
}
