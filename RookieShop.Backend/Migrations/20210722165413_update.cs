using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace RookieShop.Backend.Migrations
{
    public partial class update : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Games_Categories_GenreID",
                table: "Games");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Categories",
                table: "Categories");

            migrationBuilder.RenameTable(
                name: "Categories",
                newName: "Genres");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Genres",
                table: "Genres",
                column: "Id");

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

            migrationBuilder.AddForeignKey(
                name: "FK_Games_Genres_GenreID",
                table: "Games",
                column: "GenreID",
                principalTable: "Genres",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Games_Genres_GenreID",
                table: "Games");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Genres",
                table: "Genres");

            migrationBuilder.RenameTable(
                name: "Genres",
                newName: "Categories");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Categories",
                table: "Categories",
                column: "Id");

            migrationBuilder.UpdateData(
                table: "Games",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "CreateDate", "UpdateDate" },
                values: new object[] { new DateTime(2021, 7, 20, 0, 55, 10, 36, DateTimeKind.Local).AddTicks(8005), new DateTime(2021, 7, 20, 0, 55, 10, 37, DateTimeKind.Local).AddTicks(6009) });

            migrationBuilder.UpdateData(
                table: "Games",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "CreateDate", "UpdateDate" },
                values: new object[] { new DateTime(2021, 7, 20, 0, 55, 10, 37, DateTimeKind.Local).AddTicks(8290), new DateTime(2021, 7, 20, 0, 55, 10, 37, DateTimeKind.Local).AddTicks(8297) });

            migrationBuilder.UpdateData(
                table: "Games",
                keyColumn: "Id",
                keyValue: 3,
                columns: new[] { "CreateDate", "UpdateDate" },
                values: new object[] { new DateTime(2021, 7, 20, 0, 55, 10, 37, DateTimeKind.Local).AddTicks(8322), new DateTime(2021, 7, 20, 0, 55, 10, 37, DateTimeKind.Local).AddTicks(8323) });

            migrationBuilder.UpdateData(
                table: "Games",
                keyColumn: "Id",
                keyValue: 4,
                columns: new[] { "CreateDate", "UpdateDate" },
                values: new object[] { new DateTime(2021, 7, 20, 0, 55, 10, 37, DateTimeKind.Local).AddTicks(8326), new DateTime(2021, 7, 20, 0, 55, 10, 37, DateTimeKind.Local).AddTicks(8327) });

            migrationBuilder.AddForeignKey(
                name: "FK_Games_Categories_GenreID",
                table: "Games",
                column: "GenreID",
                principalTable: "Categories",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
