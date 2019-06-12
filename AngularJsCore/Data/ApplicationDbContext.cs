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
            modelBuilder.ApplyConfiguration(new CustomerConfiguration());
            modelBuilder.ApplyConfiguration(new CategoryConfiguration());
            modelBuilder.ApplyConfiguration(new OrderLineConfiguration());
            modelBuilder.ApplyConfiguration(new ProjectConfiguration());
            modelBuilder.ApplyConfiguration(new ProjectAccessConfiguration());
            modelBuilder.ApplyConfiguration(new ReceiptLineConfiguration());
            modelBuilder.ApplyConfiguration(new UomConfiguration());
            modelBuilder.ApplyConfiguration(new DailyAnimalGrowConfiguration());
            modelBuilder.ApplyConfiguration(new InvoiceConfiguration());
            modelBuilder.ApplyConfiguration(new InvoiceLineConfiguration());
            modelBuilder.ApplyConfiguration(new StandardNameConfiguration());

            modelBuilder.Entity<ApplicationUser>().HasData(
                        new ApplicationUser
                        {
                            UserName = "vannak2010@gmail.com",
                            NormalizedUserName = "vannak2010@gmail.com",
                            Email = "vannak2010@gmail.com",
                            NormalizedEmail = "vannak2010@gmail.com",
                            PasswordHash = "AQAAAAEAACcQAAAAELJBSgZcx0bvVej9qoJz3FH7uR5pFMJ1fzv4cQEDNXaAfoRisrcGf/JOh2nwiTtO0w==",
                            SecurityStamp = "YABAAQWF7PIGT7E4PUKC7H7EI774FZCO",
                            FullName = "Vannak Heng"
                        });
        }
        
        public DbSet<PaymentDetail> paymentDetails { get; set; }
        public DbSet<Customers> customers { get; set; }
        public DbSet<Inventorys> Inventorys { get; set; }
        public DbSet<Orders> Orders { get; set; }
        public DbSet<OrderLines> OrderLines { get; set; }
        public DbSet<Warehouse> warehouses { get; set; }
        public DbSet<Project> projects { get; set; }
        public DbSet<ProjectAccess> projectAccesses { get; set; }
        public DbSet<Category> categories { get; set; }
        public DbSet<UnitOfMeasure> unitOfMeasures { get; set; }
        public DbSet<WarehouseAccess> WarehouseAccess { get; set; }
        public DbSet<Receipt> receipts  { get; set; }
        public DbSet<ReceiptLine> receiptLines { get; set; }
        public DbSet<INSiteStatus> iNSiteStatuses { get; set; }
        public DbSet<Standard> standards { get; set; }
        public DbSet<DailyAnimalGrow> dailyAnimalGrow { get; set; }
        public DbSet<SaleInvoice> saleInvoices { get; set; }
        public DbSet<SaleInvoiceLine> saleInvoiceLines { get; set; }
        public DbSet<StandardName> standardNames { get; set; }
        public DbSet<ImagesFile> imagesFiles { get; set; }

    }
}
