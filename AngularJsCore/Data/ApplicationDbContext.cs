using AngularJsCore.Data.EntityConfigurations;
using AngularJsCore.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngularJsCore.Data
{
    public class ApplicationDbContext: IdentityDbContext<ApplicationUser,ApplicationRole,string>
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {

        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.ApplyConfiguration(new OrderConfiguration());
            modelBuilder.ApplyConfiguration(new WarehouseAccessConfiguration());

            //modelBuilder.Entity<ApplicationUser>().HasData(
            //            new ApplicationUser
            //            {
            //                Id = "a8cafcd6-6db8-481f-ab02-7be54e3ad91e",
            //                UserName = "vannak2010@gmail.com",
            //                Email = "vannak2010@gmail.com",
            //                PasswordHash = "AQAAAAEAACcQAAAAEMoKosrjxHRPcDMbSBqZFnA26OM4vMaS6DQZ/dhWNAb6JRtVePjM6wATR9bqHfucJA==",
            //                NormalizedEmail = "VANNAK2010@GMAIL.COM",
            //                NormalizedUserName = "VANNAK2010@GMAIL.COM",
            //                SecurityStamp = "KEXGJ2ZWULJA4V3FJSK5YEP2KCXO43N5",
            //                LockoutEnabled = true,
            //                ConcurrencyStamp = "194b0238-0192-4e4b-b2b0-cf1fd41e2483",
            //                EmailConfirmed = false
            //            });
        }
        
        public DbSet<PaymentDetail> paymentDetails { get; set; }
        public DbSet<Customers> customers { get; set; }
        public DbSet<Inventorys> Inventorys { get; set; }
        public DbSet<Orders> Orders { get; set; }
        public DbSet<OrderLines> OrderLines { get; set; }
        public DbSet<Warehouse> warehouses { get; set; }
        public DbSet<Project> projects { get; set; }
        public DbSet<Category> categories { get; set; }
        public DbSet<UnitOfMeasure> unitOfMeasures { get; set; }
        public DbSet<WarehouseAccess> WarehouseAccess { get; set; }
        public DbSet<Receipt> receipts  { get; set; }
        public DbSet<ReceiptLine> receiptLines { get; set; }
        public DbSet<INSiteStatus> iNSiteStatuses { get; set; }

    }
}
