using Microsoft.EntityFrameworkCore.Migrations;

namespace AngularJsCore.Migrations
{
    public partial class addnumberofdayindailygrow : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "NumberOfDay",
                table: "dailyAnimalGrow",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "NumberOfDay",
                table: "dailyAnimalGrow");
        }
    }
}
