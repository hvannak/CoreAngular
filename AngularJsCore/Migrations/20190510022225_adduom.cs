using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace AngularJsCore.Migrations
{
    public partial class adduom : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "UomId",
                table: "Inventorys",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateTable(
                name: "unitOfMeasures",
                columns: table => new
                {
                    UomId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    UOM = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_unitOfMeasures", x => x.UomId);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Inventorys_UomId",
                table: "Inventorys",
                column: "UomId");

            migrationBuilder.AddForeignKey(
                name: "FK_Inventorys_unitOfMeasures_UomId",
                table: "Inventorys",
                column: "UomId",
                principalTable: "unitOfMeasures",
                principalColumn: "UomId",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Inventorys_unitOfMeasures_UomId",
                table: "Inventorys");

            migrationBuilder.DropTable(
                name: "unitOfMeasures");

            migrationBuilder.DropIndex(
                name: "IX_Inventorys_UomId",
                table: "Inventorys");

            migrationBuilder.DropColumn(
                name: "UomId",
                table: "Inventorys");
        }
    }
}
