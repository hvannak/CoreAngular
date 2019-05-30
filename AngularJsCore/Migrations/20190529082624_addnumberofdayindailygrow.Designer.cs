﻿// <auto-generated />
using System;
using AngularJsCore.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace AngularJsCore.Migrations
{
    [DbContext(typeof(ApplicationDbContext))]
    [Migration("20190529082624_addnumberofdayindailygrow")]
    partial class addnumberofdayindailygrow
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.1.8-servicing-32085")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("AngularJsCore.Models.ApplicationRole", b =>
                {
                    b.Property<string>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Access");

                    b.Property<string>("ConcurrencyStamp")
                        .IsConcurrencyToken();

                    b.Property<string>("Name")
                        .HasMaxLength(256);

                    b.Property<string>("NormalizedName")
                        .HasMaxLength(256);

                    b.HasKey("Id");

                    b.HasIndex("NormalizedName")
                        .IsUnique()
                        .HasName("RoleNameIndex")
                        .HasFilter("[NormalizedName] IS NOT NULL");

                    b.ToTable("AspNetRoles");
                });

            modelBuilder.Entity("AngularJsCore.Models.ApplicationUser", b =>
                {
                    b.Property<string>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("AccessFailedCount");

                    b.Property<string>("ConcurrencyStamp")
                        .IsConcurrencyToken();

                    b.Property<string>("Email")
                        .HasMaxLength(256);

                    b.Property<bool>("EmailConfirmed");

                    b.Property<string>("FullName")
                        .HasColumnType("nvarchar(150)");

                    b.Property<bool>("LockoutEnabled");

                    b.Property<DateTimeOffset?>("LockoutEnd");

                    b.Property<string>("NormalizedEmail")
                        .HasMaxLength(256);

                    b.Property<string>("NormalizedUserName")
                        .HasMaxLength(256);

                    b.Property<string>("PasswordHash");

                    b.Property<string>("PhoneNumber");

                    b.Property<bool>("PhoneNumberConfirmed");

                    b.Property<string>("SecurityStamp");

                    b.Property<bool>("TwoFactorEnabled");

                    b.Property<string>("UserName")
                        .HasMaxLength(256);

                    b.HasKey("Id");

                    b.HasIndex("NormalizedEmail")
                        .HasName("EmailIndex");

                    b.HasIndex("NormalizedUserName")
                        .IsUnique()
                        .HasName("UserNameIndex")
                        .HasFilter("[NormalizedUserName] IS NOT NULL");

                    b.ToTable("AspNetUsers");
                });

            modelBuilder.Entity("AngularJsCore.Models.Category", b =>
                {
                    b.Property<int>("CategoryId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("CategoryName");

                    b.HasKey("CategoryId");

                    b.ToTable("categories");
                });

            modelBuilder.Entity("AngularJsCore.Models.Customers", b =>
                {
                    b.Property<int>("CustomerId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("CustomerName")
                        .IsRequired()
                        .HasColumnType("nvarchar(100)");

                    b.HasKey("CustomerId");

                    b.ToTable("customers");
                });

            modelBuilder.Entity("AngularJsCore.Models.DailyAnimalGrow", b =>
                {
                    b.Property<int>("DailyGrowId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<DateTime>("DateGrow");

                    b.Property<string>("InventoryDesc");

                    b.Property<int>("InventoryId");

                    b.Property<int>("NumberOfDay");

                    b.Property<int>("ProjectId");

                    b.Property<string>("ProjectName");

                    b.Property<int>("WarehouseId");

                    b.Property<string>("WarehouseName");

                    b.Property<decimal>("Weight");

                    b.HasKey("DailyGrowId");

                    b.HasIndex("InventoryId");

                    b.HasIndex("ProjectId");

                    b.ToTable("dailyAnimalGrow");
                });

            modelBuilder.Entity("AngularJsCore.Models.INSiteStatus", b =>
                {
                    b.Property<int>("InSiteId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<decimal>("AdjustCost");

                    b.Property<string>("InventoryDesc");

                    b.Property<int>("InventoryId");

                    b.Property<decimal>("IssueCost");

                    b.Property<decimal>("LastCost");

                    b.Property<int>("ProjectId");

                    b.Property<string>("ProjectName");

                    b.Property<decimal>("QtyAdjust");

                    b.Property<decimal>("QtyBegin");

                    b.Property<decimal>("QtyIssue");

                    b.Property<decimal>("QtyOnHand");

                    b.Property<decimal>("QtyReceipt");

                    b.Property<decimal>("QtySaleByKg");

                    b.Property<decimal>("QtySaleByUnit");

                    b.Property<decimal>("ReceiptCost");

                    b.Property<int>("WarehouseId");

                    b.Property<string>("WarehouseName");

                    b.HasKey("InSiteId");

                    b.ToTable("iNSiteStatuses");
                });

            modelBuilder.Entity("AngularJsCore.Models.Inventorys", b =>
                {
                    b.Property<int>("InventoryId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("CategoryId");

                    b.Property<string>("InventoryDesr")
                        .IsRequired()
                        .HasColumnType("nvarchar(100)");

                    b.Property<decimal>("Price");

                    b.Property<int>("UomId");

                    b.HasKey("InventoryId");

                    b.HasIndex("CategoryId");

                    b.HasIndex("UomId");

                    b.ToTable("Inventorys");
                });

            modelBuilder.Entity("AngularJsCore.Models.OrderLines", b =>
                {
                    b.Property<int>("OrderItemId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("InventoryId");

                    b.Property<int>("OrderId");

                    b.Property<int>("Quantity");

                    b.HasKey("OrderItemId");

                    b.HasIndex("InventoryId");

                    b.HasIndex("OrderId");

                    b.ToTable("OrderLines");
                });

            modelBuilder.Entity("AngularJsCore.Models.Orders", b =>
                {
                    b.Property<int>("OrderId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("CustomerId");

                    b.Property<decimal>("GTotal");

                    b.Property<string>("OrderNo")
                        .IsRequired()
                        .HasColumnType("nchar(10)");

                    b.Property<string>("PMethod")
                        .IsRequired()
                        .HasColumnType("varchar(50)");

                    b.HasKey("OrderId");

                    b.HasIndex("CustomerId");

                    b.ToTable("Orders");
                });

            modelBuilder.Entity("AngularJsCore.Models.PaymentDetail", b =>
                {
                    b.Property<int>("PMId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("CVV")
                        .IsRequired()
                        .HasColumnType("nvarchar(3)");

                    b.Property<string>("CardNumber")
                        .IsRequired()
                        .HasColumnType("varchar(16)");

                    b.Property<string>("CardOwnerName")
                        .IsRequired()
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("ExpirationDate")
                        .IsRequired()
                        .HasColumnType("nvarchar(5)");

                    b.HasKey("PMId");

                    b.ToTable("paymentDetails");
                });

            modelBuilder.Entity("AngularJsCore.Models.Project", b =>
                {
                    b.Property<int>("ProjectId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<DateTime>("EndDate")
                        .HasColumnType("date");

                    b.Property<string>("ProjectName");

                    b.Property<DateTime>("StartDate")
                        .HasColumnType("date");

                    b.Property<string>("Status");

                    b.Property<int>("WarehouseId");

                    b.Property<string>("WarehouseName");

                    b.HasKey("ProjectId");

                    b.HasIndex("WarehouseId");

                    b.ToTable("projects");
                });

            modelBuilder.Entity("AngularJsCore.Models.Receipt", b =>
                {
                    b.Property<int>("ReceiptId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<DateTime>("CreateDate");

                    b.Property<string>("Description");

                    b.Property<DateTime>("ReceiptDate");

                    b.Property<string>("ReceiptNbr");

                    b.Property<int>("Release");

                    b.Property<decimal>("TotalCost");

                    b.Property<decimal>("TotalQty");

                    b.Property<string>("TranType");

                    b.HasKey("ReceiptId");

                    b.ToTable("receipts");
                });

            modelBuilder.Entity("AngularJsCore.Models.ReceiptLine", b =>
                {
                    b.Property<int>("ReceiptLineId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<DateTime>("CreateDate");

                    b.Property<decimal>("ExtCost");

                    b.Property<string>("InventoryDesr");

                    b.Property<int>("InventoryId");

                    b.Property<int>("ProjectId");

                    b.Property<string>("ProjectName");

                    b.Property<decimal>("Qty");

                    b.Property<int>("ReceiptId");

                    b.Property<DateTime>("ReceiptLineDate");

                    b.Property<decimal>("UnitCost");

                    b.Property<int>("WarehouseId");

                    b.Property<string>("WarehouseName");

                    b.HasKey("ReceiptLineId");

                    b.HasIndex("ProjectId");

                    b.HasIndex("ReceiptId");

                    b.ToTable("receiptLines");
                });

            modelBuilder.Entity("AngularJsCore.Models.Standard", b =>
                {
                    b.Property<int>("StandardKey")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("NumberOfDay");

                    b.Property<decimal>("ResultOfDay");

                    b.Property<string>("StandardName");

                    b.Property<string>("UOM");

                    b.Property<int>("UomId");

                    b.HasKey("StandardKey");

                    b.HasIndex("UomId");

                    b.ToTable("standards");
                });

            modelBuilder.Entity("AngularJsCore.Models.UnitOfMeasure", b =>
                {
                    b.Property<int>("UomId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("UOM");

                    b.HasKey("UomId");

                    b.ToTable("unitOfMeasures");
                });

            modelBuilder.Entity("AngularJsCore.Models.Warehouse", b =>
                {
                    b.Property<int>("WarehouseId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("WarehouseName");

                    b.HasKey("WarehouseId");

                    b.ToTable("warehouses");
                });

            modelBuilder.Entity("AngularJsCore.Models.WarehouseAccess", b =>
                {
                    b.Property<int>("WarehouseAccessId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("UserId");

                    b.Property<int>("WarehouseId");

                    b.HasKey("WarehouseAccessId");

                    b.HasIndex("UserId");

                    b.HasIndex("WarehouseId");

                    b.ToTable("WarehouseAccess");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRoleClaim<string>", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("ClaimType");

                    b.Property<string>("ClaimValue");

                    b.Property<string>("RoleId")
                        .IsRequired();

                    b.HasKey("Id");

                    b.HasIndex("RoleId");

                    b.ToTable("AspNetRoleClaims");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserClaim<string>", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("ClaimType");

                    b.Property<string>("ClaimValue");

                    b.Property<string>("UserId")
                        .IsRequired();

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("AspNetUserClaims");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserLogin<string>", b =>
                {
                    b.Property<string>("LoginProvider");

                    b.Property<string>("ProviderKey");

                    b.Property<string>("ProviderDisplayName");

                    b.Property<string>("UserId")
                        .IsRequired();

                    b.HasKey("LoginProvider", "ProviderKey");

                    b.HasIndex("UserId");

                    b.ToTable("AspNetUserLogins");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserRole<string>", b =>
                {
                    b.Property<string>("UserId");

                    b.Property<string>("RoleId");

                    b.HasKey("UserId", "RoleId");

                    b.HasIndex("RoleId");

                    b.ToTable("AspNetUserRoles");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserToken<string>", b =>
                {
                    b.Property<string>("UserId");

                    b.Property<string>("LoginProvider");

                    b.Property<string>("Name");

                    b.Property<string>("Value");

                    b.HasKey("UserId", "LoginProvider", "Name");

                    b.ToTable("AspNetUserTokens");
                });

            modelBuilder.Entity("AngularJsCore.Models.DailyAnimalGrow", b =>
                {
                    b.HasOne("AngularJsCore.Models.Inventorys", "Inventorys")
                        .WithMany("DailyAnimalGrows")
                        .HasForeignKey("InventoryId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("AngularJsCore.Models.Project", "Project")
                        .WithMany("DailyAnimalGrows")
                        .HasForeignKey("ProjectId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("AngularJsCore.Models.Inventorys", b =>
                {
                    b.HasOne("AngularJsCore.Models.Category", "Category")
                        .WithMany("Inventorys")
                        .HasForeignKey("CategoryId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("AngularJsCore.Models.UnitOfMeasure", "UnitOfMeasure")
                        .WithMany("Inventorys")
                        .HasForeignKey("UomId")
                        .OnDelete(DeleteBehavior.Restrict);
                });

            modelBuilder.Entity("AngularJsCore.Models.OrderLines", b =>
                {
                    b.HasOne("AngularJsCore.Models.Inventorys", "Inventorys")
                        .WithMany("OrderLines")
                        .HasForeignKey("InventoryId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("AngularJsCore.Models.Orders", "Orders")
                        .WithMany("OrderLines")
                        .HasForeignKey("OrderId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("AngularJsCore.Models.Orders", b =>
                {
                    b.HasOne("AngularJsCore.Models.Customers", "Customers")
                        .WithMany("Orders")
                        .HasForeignKey("CustomerId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("AngularJsCore.Models.Project", b =>
                {
                    b.HasOne("AngularJsCore.Models.Warehouse", "Warehouse")
                        .WithMany("Projects")
                        .HasForeignKey("WarehouseId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("AngularJsCore.Models.ReceiptLine", b =>
                {
                    b.HasOne("AngularJsCore.Models.Project", "Project")
                        .WithMany("ReceiptLines")
                        .HasForeignKey("ProjectId")
                        .OnDelete(DeleteBehavior.Restrict);

                    b.HasOne("AngularJsCore.Models.Receipt", "Receipt")
                        .WithMany("ReceiptLines")
                        .HasForeignKey("ReceiptId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("AngularJsCore.Models.Standard", b =>
                {
                    b.HasOne("AngularJsCore.Models.UnitOfMeasure", "UnitOfMeasure")
                        .WithMany("Standards")
                        .HasForeignKey("UomId")
                        .OnDelete(DeleteBehavior.Restrict);
                });

            modelBuilder.Entity("AngularJsCore.Models.WarehouseAccess", b =>
                {
                    b.HasOne("AngularJsCore.Models.ApplicationUser", "ApplicationUser")
                        .WithMany("WarehouseAccesses")
                        .HasForeignKey("UserId");

                    b.HasOne("AngularJsCore.Models.Warehouse", "Warehouse")
                        .WithMany("WarehouseAccesses")
                        .HasForeignKey("WarehouseId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRoleClaim<string>", b =>
                {
                    b.HasOne("AngularJsCore.Models.ApplicationRole")
                        .WithMany()
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserClaim<string>", b =>
                {
                    b.HasOne("AngularJsCore.Models.ApplicationUser")
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserLogin<string>", b =>
                {
                    b.HasOne("AngularJsCore.Models.ApplicationUser")
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserRole<string>", b =>
                {
                    b.HasOne("AngularJsCore.Models.ApplicationRole")
                        .WithMany()
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("AngularJsCore.Models.ApplicationUser")
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserToken<string>", b =>
                {
                    b.HasOne("AngularJsCore.Models.ApplicationUser")
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });
#pragma warning restore 612, 618
        }
    }
}
