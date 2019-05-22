using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace AngularJsCore.Migrations
{
    public partial class addInsiteStatus : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "iNSiteStatuses",
                columns: table => new
                {
                    InSiteId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    ProjectId = table.Column<int>(nullable: false),
                    ProjectName = table.Column<string>(nullable: true),
                    WarehouseId = table.Column<int>(nullable: false),
                    WarehouseName = table.Column<string>(nullable: true),
                    InventoryId = table.Column<int>(nullable: false),
                    InventoryDesc = table.Column<string>(nullable: true),
                    QtyOnHand = table.Column<decimal>(nullable: false),
                    LastCost = table.Column<decimal>(nullable: false),
                    IssueCost = table.Column<decimal>(nullable: false),
                    AdjustCost = table.Column<decimal>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_iNSiteStatuses", x => x.InSiteId);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "iNSiteStatuses");
        }
    }
}
