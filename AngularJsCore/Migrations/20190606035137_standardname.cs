using Microsoft.EntityFrameworkCore.Migrations;

namespace AngularJsCore.Migrations
{
    public partial class standardname : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_StandardName",
                table: "StandardName");

            migrationBuilder.RenameTable(
                name: "StandardName",
                newName: "standardNames");

            migrationBuilder.AddColumn<int>(
                name: "StandardNameId",
                table: "standards",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddPrimaryKey(
                name: "PK_standardNames",
                table: "standardNames",
                column: "StandardNameId");

            migrationBuilder.CreateIndex(
                name: "IX_standards_StandardNameId",
                table: "standards",
                column: "StandardNameId");

            migrationBuilder.AddForeignKey(
                name: "FK_standards_standardNames_StandardNameId",
                table: "standards",
                column: "StandardNameId",
                principalTable: "standardNames",
                principalColumn: "StandardNameId",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_standards_standardNames_StandardNameId",
                table: "standards");

            migrationBuilder.DropIndex(
                name: "IX_standards_StandardNameId",
                table: "standards");

            migrationBuilder.DropPrimaryKey(
                name: "PK_standardNames",
                table: "standardNames");

            migrationBuilder.DropColumn(
                name: "StandardNameId",
                table: "standards");

            migrationBuilder.RenameTable(
                name: "standardNames",
                newName: "StandardName");

            migrationBuilder.AddPrimaryKey(
                name: "PK_StandardName",
                table: "StandardName",
                column: "StandardNameId");
        }
    }
}
