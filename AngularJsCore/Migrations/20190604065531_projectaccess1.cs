using Microsoft.EntityFrameworkCore.Migrations;

namespace AngularJsCore.Migrations
{
    public partial class projectaccess1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ProjectAccess_AspNetUsers_ApplicationUserId",
                table: "ProjectAccess");

            migrationBuilder.DropForeignKey(
                name: "FK_ProjectAccess_projects_ProjectId",
                table: "ProjectAccess");

            migrationBuilder.DropPrimaryKey(
                name: "PK_ProjectAccess",
                table: "ProjectAccess");

            migrationBuilder.DropIndex(
                name: "IX_ProjectAccess_ApplicationUserId",
                table: "ProjectAccess");

            migrationBuilder.DropColumn(
                name: "ApplicationUserId",
                table: "ProjectAccess");

            migrationBuilder.RenameTable(
                name: "ProjectAccess",
                newName: "projectAccesses");

            migrationBuilder.RenameIndex(
                name: "IX_ProjectAccess_ProjectId",
                table: "projectAccesses",
                newName: "IX_projectAccesses_ProjectId");

            migrationBuilder.AlterColumn<string>(
                name: "UserId",
                table: "projectAccesses",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.AddPrimaryKey(
                name: "PK_projectAccesses",
                table: "projectAccesses",
                column: "ProjectAccessId");

            migrationBuilder.CreateIndex(
                name: "IX_projectAccesses_UserId",
                table: "projectAccesses",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_projectAccesses_projects_ProjectId",
                table: "projectAccesses",
                column: "ProjectId",
                principalTable: "projects",
                principalColumn: "ProjectId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_projectAccesses_AspNetUsers_UserId",
                table: "projectAccesses",
                column: "UserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_projectAccesses_projects_ProjectId",
                table: "projectAccesses");

            migrationBuilder.DropForeignKey(
                name: "FK_projectAccesses_AspNetUsers_UserId",
                table: "projectAccesses");

            migrationBuilder.DropPrimaryKey(
                name: "PK_projectAccesses",
                table: "projectAccesses");

            migrationBuilder.DropIndex(
                name: "IX_projectAccesses_UserId",
                table: "projectAccesses");

            migrationBuilder.RenameTable(
                name: "projectAccesses",
                newName: "ProjectAccess");

            migrationBuilder.RenameIndex(
                name: "IX_projectAccesses_ProjectId",
                table: "ProjectAccess",
                newName: "IX_ProjectAccess_ProjectId");

            migrationBuilder.AlterColumn<int>(
                name: "UserId",
                table: "ProjectAccess",
                nullable: false,
                oldClrType: typeof(string),
                oldNullable: true);

            migrationBuilder.AddColumn<string>(
                name: "ApplicationUserId",
                table: "ProjectAccess",
                nullable: true);

            migrationBuilder.AddPrimaryKey(
                name: "PK_ProjectAccess",
                table: "ProjectAccess",
                column: "ProjectAccessId");

            migrationBuilder.CreateIndex(
                name: "IX_ProjectAccess_ApplicationUserId",
                table: "ProjectAccess",
                column: "ApplicationUserId");

            migrationBuilder.AddForeignKey(
                name: "FK_ProjectAccess_AspNetUsers_ApplicationUserId",
                table: "ProjectAccess",
                column: "ApplicationUserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_ProjectAccess_projects_ProjectId",
                table: "ProjectAccess",
                column: "ProjectId",
                principalTable: "projects",
                principalColumn: "ProjectId",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
