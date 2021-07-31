/*const express=require('express');
const Card=require('../../models/cardModel');
const router=express.Router();



//view route
router.get("/:id", async (req, res) => {
  let card = await Card.findOne( request.params.id );
});
*/
document.write("<!DOCTYPE html>");
document.write("<html lang=\"en\" dir=\"ltr\">");
document.write("  <head>");
document.write("    <meta charset=\"utf-8\">");
document.write("    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">");
document.write("    <title>Responsive Sidebar Dashboard Template<\/title>");
document.write("    <link rel=\"stylesheet\" href=\"\/css\/dashboard.css\">");
document.write("    <link rel=\"stylesheet\" href=\"https:\/\/cdnjs.cloudflare.com\/ajax\/libs\/font-awesome\/5.12.1\/css\/all.min.css\">");
document.write("    <script src=\"https:\/\/cdnjs.cloudflare.com\/ajax\/libs\/jquery\/3.5.1\/jquery.min.js\" charset=\"utf-8\"><\/script>");
document.write("  <\/head>");
document.write("  <body>");
document.write("");
document.write("    <input type=\"checkbox\" id=\"check\">");
document.write("    <!--header area start-->");
document.write("    <header>");

document.write("      <div class=\"left_area\">");
document.write("        <h3>MAKE MY<span> DIGICARD<\/span><\/h3>");
document.write("      <\/div>");
document.write("      <div class=\"right_area\">");
document.write("        <a href=\"#\" class=\"logout_btn\">Logout<\/a>");
document.write("      <\/div>");
document.write("      <div class=\"right_area\">");
document.write("        <a href=\"#\" class=\"preview_btn\">Preview my Card<\/a>");
document.write("      <\/div>");
document.write("    <\/header>");
document.write("    <!--header area end-->");

document.write("    <!--sidebar start-->");
document.write("    <div class=\"sidebar\">");
document.write("      <div class=\"profile_info\">");
document.write("        <img src=\"1.png\" class=\"profile_image\" alt=\"\">");
document.write("        <h4>Jessica<\/h4>");
document.write("      <\/div>");
document.write("      <a href=\"\/editBasic\"><i class=\"fas fa-desktop\"><\/i><span>Basic<\/span><\/a>");
document.write("      <a href=\"\/editAbout\"><i class=\"fas fa-cogs\"><\/i><span>About<\/span><\/a>");
document.write("      <a href=\"\/editProducts\"><i class=\"fas fa-table\"><\/i><span>Products\/Services<\/span><\/a>");
document.write("      <a href=\"\/editGallery\"><i class=\"fas fa-th\"><\/i><span>Gallery<\/span><\/a>");
document.write("      <a href=\"\/editPayment\"><i class=\"fas fa-info-circle\"><\/i><span>Payment<\/span><\/a>");
document.write("      <a href=\"\/settings\"><i class=\"fas fa-sliders-h\"><\/i><span>Settings<\/span><\/a>");
document.write("      <\/br>");
document.write("      <a href=\"\/settings\"><i class=\"fas fa-arrow-left\"><\/i><span>Back to main page<\/span><\/a>");
document.write("    <\/div>");
document.write("    <!--sidebar end-->");
document.write("");
document.write("    <div class=\"content\">");
document.write("      ");
document.write("    <\/div>");
document.write("");
document.write("    <script type=\"text\/javascript\">");
document.write("    $(document).ready(function(){");
document.write("      $('.nav_btn').click(function(){");
document.write("        $('.mobile_nav_items').toggleClass('active');");
document.write("      });");
document.write("    });");
document.write("    <\/script>");
document.write("");
document.write("  <\/body>");
document.write("<\/html>");
document.write("      ");

module.exports = router;