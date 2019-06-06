using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace AngularJsCore.Migrations
{
    public partial class standardnae : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<decimal>(
                name: "ResultOfDay",
                table: "standards",
                nullable: true,
                oldClrType: typeof(decimal));

            migrationBuilder.AlterColumn<int>(
                name: "NumberOfDay",
                table: "standards",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.CreateTable(
                name: "StandardName",
                columns: table => new
                {
                    StandardNameId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Standard = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_StandardName", x => x.StandardNameId);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "StandardName");

            migrationBuilder.AlterColumn<decimal>(
                name: "ResultOfDay",
                table: "standards",
                nullable: false,
                oldClrType: typeof(decimal),
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "NumberOfDay",
                table: "standards",
                nullable: false,
                oldClrType: typeof(int),
                oldNullable: true);
        }
    }
}
