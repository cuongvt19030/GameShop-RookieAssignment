using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace RookieShop.Backend.Migrations
{
    public partial class fix : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Games",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "CreateDate", "UpdateDate" },
                values: new object[] { new DateTime(2021, 7, 23, 0, 30, 39, 190, DateTimeKind.Local).AddTicks(9369), new DateTime(2021, 7, 23, 0, 30, 39, 191, DateTimeKind.Local).AddTicks(6326) });

            migrationBuilder.UpdateData(
                table: "Games",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "CreateDate", "UpdateDate" },
                values: new object[] { new DateTime(2021, 7, 23, 0, 30, 39, 191, DateTimeKind.Local).AddTicks(8405), new DateTime(2021, 7, 23, 0, 30, 39, 191, DateTimeKind.Local).AddTicks(8411) });

            migrationBuilder.UpdateData(
                table: "Games",
                keyColumn: "Id",
                keyValue: 3,
                columns: new[] { "CreateDate", "UpdateDate" },
                values: new object[] { new DateTime(2021, 7, 23, 0, 30, 39, 191, DateTimeKind.Local).AddTicks(8414), new DateTime(2021, 7, 23, 0, 30, 39, 191, DateTimeKind.Local).AddTicks(8415) });

            migrationBuilder.UpdateData(
                table: "Games",
                keyColumn: "Id",
                keyValue: 4,
                columns: new[] { "CreateDate", "UpdateDate" },
                values: new object[] { new DateTime(2021, 7, 23, 0, 30, 39, 191, DateTimeKind.Local).AddTicks(8417), new DateTime(2021, 7, 23, 0, 30, 39, 191, DateTimeKind.Local).AddTicks(8417) });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Games",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "CreateDate", "UpdateDate" },
                values: new object[] { new DateTime(2021, 7, 22, 23, 54, 12, 664, DateTimeKind.Local).AddTicks(3134), new DateTime(2021, 7, 22, 23, 54, 12, 665, DateTimeKind.Local).AddTicks(4499) });

            migrationBuilder.UpdateData(
                table: "Games",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "CreateDate", "UpdateDate" },
                values: new object[] { new DateTime(2021, 7, 22, 23, 54, 12, 665, DateTimeKind.Local).AddTicks(7589), new DateTime(2021, 7, 22, 23, 54, 12, 665, DateTimeKind.Local).AddTicks(7608) });

            migrationBuilder.UpdateData(
                table: "Games",
                keyColumn: "Id",
                keyValue: 3,
                columns: new[] { "CreateDate", "UpdateDate" },
                values: new object[] { new DateTime(2021, 7, 22, 23, 54, 12, 665, DateTimeKind.Local).AddTicks(7612), new DateTime(2021, 7, 22, 23, 54, 12, 665, DateTimeKind.Local).AddTicks(7614) });

            migrationBuilder.UpdateData(
                table: "Games",
                keyColumn: "Id",
                keyValue: 4,
                columns: new[] { "CreateDate", "UpdateDate" },
                values: new object[] { new DateTime(2021, 7, 22, 23, 54, 12, 665, DateTimeKind.Local).AddTicks(7616), new DateTime(2021, 7, 22, 23, 54, 12, 665, DateTimeKind.Local).AddTicks(7617) });
        }
    }
}
