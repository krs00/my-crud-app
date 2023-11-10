using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace myCrudAppApi.Migrations
{
    public partial class SeedData : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Messages",
                columns: new[] { "MessageId", "MessageText", "Name" },
                values: new object[] { 1, "I'm a Kymani", "Kymani" });

            migrationBuilder.InsertData(
                table: "Messages",
                columns: new[] { "MessageId", "MessageText", "Name" },
                values: new object[] { 2, "I'm a Qayden", "Qayden" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Messages",
                keyColumn: "MessageId",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Messages",
                keyColumn: "MessageId",
                keyValue: 2);
        }
    }
}
