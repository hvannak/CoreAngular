using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace AngularJsCore.Migrations
{
    public partial class Init : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "AspNetRoles",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    Name = table.Column<string>(maxLength: 256, nullable: true),
                    NormalizedName = table.Column<string>(maxLength: 256, nullable: true),
                    ConcurrencyStamp = table.Column<string>(nullable: true),
                    Access = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetRoles", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUsers",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    UserName = table.Column<string>(maxLength: 256, nullable: true),
                    NormalizedUserName = table.Column<string>(maxLength: 256, nullable: true),
                    Email = table.Column<string>(maxLength: 256, nullable: true),
                    NormalizedEmail = table.Column<string>(maxLength: 256, nullable: true),
                    EmailConfirmed = table.Column<bool>(nullable: false),
                    PasswordHash = table.Column<string>(nullable: true),
                    SecurityStamp = table.Column<string>(nullable: true),
                    ConcurrencyStamp = table.Column<string>(nullable: true),
                    PhoneNumber = table.Column<string>(nullable: true),
                    PhoneNumberConfirmed = table.Column<bool>(nullable: false),
                    TwoFactorEnabled = table.Column<bool>(nullable: false),
                    LockoutEnd = table.Column<DateTimeOffset>(nullable: true),
                    LockoutEnabled = table.Column<bool>(nullable: false),
                    AccessFailedCount = table.Column<int>(nullable: false),
                    FullName = table.Column<string>(type: "nvarchar(150)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUsers", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "categories",
                columns: table => new
                {
                    CategoryId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    CategoryName = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_categories", x => x.CategoryId);
                });

            migrationBuilder.CreateTable(
                name: "customers",
                columns: table => new
                {
                    CustomerId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    CustomerCD = table.Column<string>(nullable: true),
                    CustomerName = table.Column<string>(type: "nvarchar(100)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_customers", x => x.CustomerId);
                });

            migrationBuilder.CreateTable(
                name: "imagesFiles",
                columns: table => new
                {
                    FileId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Caption = table.Column<string>(nullable: true),
                    ModuleId = table.Column<string>(nullable: true),
                    OperationId = table.Column<int>(nullable: false),
                    StoreFile = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_imagesFiles", x => x.FileId);
                });

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
                    QtyOnHand = table.Column<decimal>(nullable: true),
                    QtyBegin = table.Column<decimal>(nullable: true),
                    QtyIssue = table.Column<decimal>(nullable: true),
                    QtyReceipt = table.Column<decimal>(nullable: true),
                    QtyAdjust = table.Column<decimal>(nullable: true),
                    QtySaleByUnit = table.Column<decimal>(nullable: true),
                    QtySaleByKg = table.Column<decimal>(nullable: true),
                    LastCost = table.Column<decimal>(nullable: true),
                    IssueCost = table.Column<decimal>(nullable: true),
                    ReceiptCost = table.Column<decimal>(nullable: true),
                    AdjustCost = table.Column<decimal>(nullable: true),
                    SaleAmount = table.Column<decimal>(nullable: true),
                    SaleAmountKhr = table.Column<decimal>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_iNSiteStatuses", x => x.InSiteId);
                });

            migrationBuilder.CreateTable(
                name: "paymentDetails",
                columns: table => new
                {
                    PMId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    CardOwnerName = table.Column<string>(type: "nvarchar(100)", nullable: false),
                    CardNumber = table.Column<string>(type: "varchar(16)", nullable: false),
                    ExpirationDate = table.Column<string>(type: "nvarchar(5)", nullable: false),
                    CVV = table.Column<string>(type: "nvarchar(3)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_paymentDetails", x => x.PMId);
                });

            migrationBuilder.CreateTable(
                name: "receipts",
                columns: table => new
                {
                    TranType = table.Column<string>(nullable: true),
                    ReceiptId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    ReceiptNbr = table.Column<string>(nullable: true),
                    Description = table.Column<string>(nullable: true),
                    ReceiptDate = table.Column<DateTime>(nullable: false),
                    TotalQty = table.Column<decimal>(nullable: false),
                    TotalCost = table.Column<decimal>(nullable: false),
                    CreateDate = table.Column<DateTime>(nullable: false),
                    Release = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_receipts", x => x.ReceiptId);
                });

            migrationBuilder.CreateTable(
                name: "standardNames",
                columns: table => new
                {
                    StandardNameId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Standard = table.Column<string>(nullable: true),
                    Type = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_standardNames", x => x.StandardNameId);
                });

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

            migrationBuilder.CreateTable(
                name: "warehouses",
                columns: table => new
                {
                    WarehouseId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    WarehouseName = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_warehouses", x => x.WarehouseId);
                });

            migrationBuilder.CreateTable(
                name: "AspNetRoleClaims",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    RoleId = table.Column<string>(nullable: false),
                    ClaimType = table.Column<string>(nullable: true),
                    ClaimValue = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetRoleClaims", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AspNetRoleClaims_AspNetRoles_RoleId",
                        column: x => x.RoleId,
                        principalTable: "AspNetRoles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserClaims",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    UserId = table.Column<string>(nullable: false),
                    ClaimType = table.Column<string>(nullable: true),
                    ClaimValue = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserClaims", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AspNetUserClaims_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserLogins",
                columns: table => new
                {
                    LoginProvider = table.Column<string>(nullable: false),
                    ProviderKey = table.Column<string>(nullable: false),
                    ProviderDisplayName = table.Column<string>(nullable: true),
                    UserId = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserLogins", x => new { x.LoginProvider, x.ProviderKey });
                    table.ForeignKey(
                        name: "FK_AspNetUserLogins_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserRoles",
                columns: table => new
                {
                    UserId = table.Column<string>(nullable: false),
                    RoleId = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserRoles", x => new { x.UserId, x.RoleId });
                    table.ForeignKey(
                        name: "FK_AspNetUserRoles_AspNetRoles_RoleId",
                        column: x => x.RoleId,
                        principalTable: "AspNetRoles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_AspNetUserRoles_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserTokens",
                columns: table => new
                {
                    UserId = table.Column<string>(nullable: false),
                    LoginProvider = table.Column<string>(nullable: false),
                    Name = table.Column<string>(nullable: false),
                    Value = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserTokens", x => new { x.UserId, x.LoginProvider, x.Name });
                    table.ForeignKey(
                        name: "FK_AspNetUserTokens_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Orders",
                columns: table => new
                {
                    OrderId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    OrderNo = table.Column<string>(type: "nchar(10)", nullable: false),
                    CustomerId = table.Column<int>(nullable: false),
                    PMethod = table.Column<string>(type: "varchar(50)", nullable: false),
                    GTotal = table.Column<decimal>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Orders", x => x.OrderId);
                    table.ForeignKey(
                        name: "FK_Orders_customers_CustomerId",
                        column: x => x.CustomerId,
                        principalTable: "customers",
                        principalColumn: "CustomerId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Inventorys",
                columns: table => new
                {
                    InventoryId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    InventoryDesr = table.Column<string>(type: "nvarchar(100)", nullable: false),
                    Price = table.Column<decimal>(nullable: false),
                    CategoryId = table.Column<int>(nullable: false),
                    UomId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Inventorys", x => x.InventoryId);
                    table.ForeignKey(
                        name: "FK_Inventorys_categories_CategoryId",
                        column: x => x.CategoryId,
                        principalTable: "categories",
                        principalColumn: "CategoryId",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Inventorys_unitOfMeasures_UomId",
                        column: x => x.UomId,
                        principalTable: "unitOfMeasures",
                        principalColumn: "UomId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "standards",
                columns: table => new
                {
                    StandardKey = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    StandardName = table.Column<string>(nullable: true),
                    StandardNameId = table.Column<int>(nullable: false),
                    NumberOfDay = table.Column<int>(nullable: true),
                    ResultOfDay = table.Column<decimal>(nullable: true),
                    UomId = table.Column<int>(nullable: false),
                    UOM = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_standards", x => x.StandardKey);
                    table.ForeignKey(
                        name: "FK_standards_standardNames_StandardNameId",
                        column: x => x.StandardNameId,
                        principalTable: "standardNames",
                        principalColumn: "StandardNameId",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_standards_unitOfMeasures_UomId",
                        column: x => x.UomId,
                        principalTable: "unitOfMeasures",
                        principalColumn: "UomId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "projects",
                columns: table => new
                {
                    ProjectId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    ProjectName = table.Column<string>(nullable: true),
                    StartDate = table.Column<DateTime>(type: "date", nullable: false),
                    EndDate = table.Column<DateTime>(type: "date", nullable: false),
                    WarehouseId = table.Column<int>(nullable: false),
                    WarehouseName = table.Column<string>(nullable: true),
                    Status = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_projects", x => x.ProjectId);
                    table.ForeignKey(
                        name: "FK_projects_warehouses_WarehouseId",
                        column: x => x.WarehouseId,
                        principalTable: "warehouses",
                        principalColumn: "WarehouseId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "WarehouseAccess",
                columns: table => new
                {
                    WarehouseAccessId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    UserId = table.Column<string>(nullable: true),
                    WarehouseId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_WarehouseAccess", x => x.WarehouseAccessId);
                    table.ForeignKey(
                        name: "FK_WarehouseAccess_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_WarehouseAccess_warehouses_WarehouseId",
                        column: x => x.WarehouseId,
                        principalTable: "warehouses",
                        principalColumn: "WarehouseId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "OrderLines",
                columns: table => new
                {
                    OrderItemId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    OrderId = table.Column<int>(nullable: false),
                    InventoryId = table.Column<int>(nullable: false),
                    Quantity = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_OrderLines", x => x.OrderItemId);
                    table.ForeignKey(
                        name: "FK_OrderLines_Inventorys_InventoryId",
                        column: x => x.InventoryId,
                        principalTable: "Inventorys",
                        principalColumn: "InventoryId",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_OrderLines_Orders_OrderId",
                        column: x => x.OrderId,
                        principalTable: "Orders",
                        principalColumn: "OrderId",
                        onDelete: ReferentialAction.Cascade);
                });

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
                    Weight = table.Column<decimal>(nullable: true),
                    NumberOfDay = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_dailyAnimalGrow", x => x.DailyGrowId);
                    table.ForeignKey(
                        name: "FK_dailyAnimalGrow_Inventorys_InventoryId",
                        column: x => x.InventoryId,
                        principalTable: "Inventorys",
                        principalColumn: "InventoryId",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_dailyAnimalGrow_projects_ProjectId",
                        column: x => x.ProjectId,
                        principalTable: "projects",
                        principalColumn: "ProjectId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "projectAccesses",
                columns: table => new
                {
                    ProjectAccessId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    UserId = table.Column<string>(nullable: true),
                    ProjectId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_projectAccesses", x => x.ProjectAccessId);
                    table.ForeignKey(
                        name: "FK_projectAccesses_projects_ProjectId",
                        column: x => x.ProjectId,
                        principalTable: "projects",
                        principalColumn: "ProjectId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_projectAccesses_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "receiptLines",
                columns: table => new
                {
                    ReceiptLineId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    ReceiptId = table.Column<int>(nullable: false),
                    ProjectId = table.Column<int>(nullable: false),
                    ProjectName = table.Column<string>(nullable: true),
                    InventoryId = table.Column<int>(nullable: false),
                    InventoryDesr = table.Column<string>(nullable: true),
                    Qty = table.Column<decimal>(nullable: true),
                    ReceiptLineDate = table.Column<DateTime>(nullable: false),
                    UnitCost = table.Column<decimal>(nullable: false),
                    ExtCost = table.Column<decimal>(nullable: false),
                    WarehouseId = table.Column<int>(nullable: false),
                    WarehouseName = table.Column<string>(nullable: true),
                    Reason = table.Column<string>(nullable: true),
                    CreateDate = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_receiptLines", x => x.ReceiptLineId);
                    table.ForeignKey(
                        name: "FK_receiptLines_projects_ProjectId",
                        column: x => x.ProjectId,
                        principalTable: "projects",
                        principalColumn: "ProjectId",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_receiptLines_receipts_ReceiptId",
                        column: x => x.ReceiptId,
                        principalTable: "receipts",
                        principalColumn: "ReceiptId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "saleInvoices",
                columns: table => new
                {
                    SaleInvoiceId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    InvoiceNbr = table.Column<string>(nullable: true),
                    CustomerId = table.Column<int>(nullable: false),
                    CustomerName = table.Column<string>(nullable: true),
                    ProjectId = table.Column<int>(nullable: false),
                    ProjectName = table.Column<string>(nullable: true),
                    DocDate = table.Column<DateTime>(nullable: false),
                    Currency = table.Column<string>(nullable: true),
                    Description = table.Column<string>(nullable: true),
                    TotalQty = table.Column<decimal>(nullable: false),
                    TotalWeight = table.Column<decimal>(nullable: false),
                    TotalAmount = table.Column<decimal>(nullable: false),
                    Release = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_saleInvoices", x => x.SaleInvoiceId);
                    table.ForeignKey(
                        name: "FK_saleInvoices_customers_CustomerId",
                        column: x => x.CustomerId,
                        principalTable: "customers",
                        principalColumn: "CustomerId",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_saleInvoices_projects_ProjectId",
                        column: x => x.ProjectId,
                        principalTable: "projects",
                        principalColumn: "ProjectId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "saleInvoiceLines",
                columns: table => new
                {
                    SaleInvoiceLineId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    SaleInvoiceId = table.Column<int>(nullable: false),
                    WarehouseId = table.Column<int>(nullable: false),
                    InventoryId = table.Column<int>(nullable: false),
                    WarehouseName = table.Column<string>(nullable: true),
                    InventoryDesc = table.Column<string>(nullable: true),
                    Qty = table.Column<decimal>(nullable: true),
                    Weight = table.Column<decimal>(nullable: true),
                    Unitprice = table.Column<decimal>(nullable: true),
                    ExtAmount = table.Column<decimal>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_saleInvoiceLines", x => x.SaleInvoiceLineId);
                    table.ForeignKey(
                        name: "FK_saleInvoiceLines_Inventorys_InventoryId",
                        column: x => x.InventoryId,
                        principalTable: "Inventorys",
                        principalColumn: "InventoryId",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_saleInvoiceLines_saleInvoices_SaleInvoiceId",
                        column: x => x.SaleInvoiceId,
                        principalTable: "saleInvoices",
                        principalColumn: "SaleInvoiceId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "AspNetUsers",
                columns: new[] { "Id", "AccessFailedCount", "ConcurrencyStamp", "Email", "EmailConfirmed", "FullName", "LockoutEnabled", "LockoutEnd", "NormalizedEmail", "NormalizedUserName", "PasswordHash", "PhoneNumber", "PhoneNumberConfirmed", "SecurityStamp", "TwoFactorEnabled", "UserName" },
                values: new object[] { "22d7f3ca-c537-4854-af8a-bf70eb5d5349", 0, "0a2e0d42-5082-41d5-97fa-810e9730c15a", "vannak2010@gmail.com", false, "Vannak Heng", false, null, "vannak2010@gmail.com", "vannak2010@gmail.com", "AQAAAAEAACcQAAAAELJBSgZcx0bvVej9qoJz3FH7uR5pFMJ1fzv4cQEDNXaAfoRisrcGf/JOh2nwiTtO0w==", null, false, "YABAAQWF7PIGT7E4PUKC7H7EI774FZCO", false, "vannak2010@gmail.com" });

            migrationBuilder.CreateIndex(
                name: "IX_AspNetRoleClaims_RoleId",
                table: "AspNetRoleClaims",
                column: "RoleId");

            migrationBuilder.CreateIndex(
                name: "RoleNameIndex",
                table: "AspNetRoles",
                column: "NormalizedName",
                unique: true,
                filter: "[NormalizedName] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserClaims_UserId",
                table: "AspNetUserClaims",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserLogins_UserId",
                table: "AspNetUserLogins",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserRoles_RoleId",
                table: "AspNetUserRoles",
                column: "RoleId");

            migrationBuilder.CreateIndex(
                name: "EmailIndex",
                table: "AspNetUsers",
                column: "NormalizedEmail");

            migrationBuilder.CreateIndex(
                name: "UserNameIndex",
                table: "AspNetUsers",
                column: "NormalizedUserName",
                unique: true,
                filter: "[NormalizedUserName] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "IX_customers_CustomerCD",
                table: "customers",
                column: "CustomerCD",
                unique: true,
                filter: "[CustomerCD] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "IX_dailyAnimalGrow_InventoryId",
                table: "dailyAnimalGrow",
                column: "InventoryId");

            migrationBuilder.CreateIndex(
                name: "IX_dailyAnimalGrow_ProjectId",
                table: "dailyAnimalGrow",
                column: "ProjectId");

            migrationBuilder.CreateIndex(
                name: "IX_Inventorys_CategoryId",
                table: "Inventorys",
                column: "CategoryId");

            migrationBuilder.CreateIndex(
                name: "IX_Inventorys_UomId",
                table: "Inventorys",
                column: "UomId");

            migrationBuilder.CreateIndex(
                name: "IX_OrderLines_InventoryId",
                table: "OrderLines",
                column: "InventoryId");

            migrationBuilder.CreateIndex(
                name: "IX_OrderLines_OrderId",
                table: "OrderLines",
                column: "OrderId");

            migrationBuilder.CreateIndex(
                name: "IX_Orders_CustomerId",
                table: "Orders",
                column: "CustomerId");

            migrationBuilder.CreateIndex(
                name: "IX_projectAccesses_ProjectId",
                table: "projectAccesses",
                column: "ProjectId");

            migrationBuilder.CreateIndex(
                name: "IX_projectAccesses_UserId",
                table: "projectAccesses",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_projects_WarehouseId",
                table: "projects",
                column: "WarehouseId");

            migrationBuilder.CreateIndex(
                name: "IX_receiptLines_ProjectId",
                table: "receiptLines",
                column: "ProjectId");

            migrationBuilder.CreateIndex(
                name: "IX_receiptLines_ReceiptId",
                table: "receiptLines",
                column: "ReceiptId");

            migrationBuilder.CreateIndex(
                name: "IX_saleInvoiceLines_InventoryId",
                table: "saleInvoiceLines",
                column: "InventoryId");

            migrationBuilder.CreateIndex(
                name: "IX_saleInvoiceLines_SaleInvoiceId",
                table: "saleInvoiceLines",
                column: "SaleInvoiceId");

            migrationBuilder.CreateIndex(
                name: "IX_saleInvoices_CustomerId",
                table: "saleInvoices",
                column: "CustomerId");

            migrationBuilder.CreateIndex(
                name: "IX_saleInvoices_ProjectId",
                table: "saleInvoices",
                column: "ProjectId");

            migrationBuilder.CreateIndex(
                name: "IX_standards_StandardNameId",
                table: "standards",
                column: "StandardNameId");

            migrationBuilder.CreateIndex(
                name: "IX_standards_UomId",
                table: "standards",
                column: "UomId");

            migrationBuilder.CreateIndex(
                name: "IX_WarehouseAccess_UserId",
                table: "WarehouseAccess",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_WarehouseAccess_WarehouseId",
                table: "WarehouseAccess",
                column: "WarehouseId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AspNetRoleClaims");

            migrationBuilder.DropTable(
                name: "AspNetUserClaims");

            migrationBuilder.DropTable(
                name: "AspNetUserLogins");

            migrationBuilder.DropTable(
                name: "AspNetUserRoles");

            migrationBuilder.DropTable(
                name: "AspNetUserTokens");

            migrationBuilder.DropTable(
                name: "dailyAnimalGrow");

            migrationBuilder.DropTable(
                name: "imagesFiles");

            migrationBuilder.DropTable(
                name: "iNSiteStatuses");

            migrationBuilder.DropTable(
                name: "OrderLines");

            migrationBuilder.DropTable(
                name: "paymentDetails");

            migrationBuilder.DropTable(
                name: "projectAccesses");

            migrationBuilder.DropTable(
                name: "receiptLines");

            migrationBuilder.DropTable(
                name: "saleInvoiceLines");

            migrationBuilder.DropTable(
                name: "standards");

            migrationBuilder.DropTable(
                name: "WarehouseAccess");

            migrationBuilder.DropTable(
                name: "AspNetRoles");

            migrationBuilder.DropTable(
                name: "Orders");

            migrationBuilder.DropTable(
                name: "receipts");

            migrationBuilder.DropTable(
                name: "Inventorys");

            migrationBuilder.DropTable(
                name: "saleInvoices");

            migrationBuilder.DropTable(
                name: "standardNames");

            migrationBuilder.DropTable(
                name: "AspNetUsers");

            migrationBuilder.DropTable(
                name: "categories");

            migrationBuilder.DropTable(
                name: "unitOfMeasures");

            migrationBuilder.DropTable(
                name: "customers");

            migrationBuilder.DropTable(
                name: "projects");

            migrationBuilder.DropTable(
                name: "warehouses");
        }
    }
}
