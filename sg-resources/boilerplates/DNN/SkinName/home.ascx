<%@ Control language="vb" AutoEventWireup="false" Explicit="True" Inherits="DotNetNuke.UI.Skins.Skin" %>
<%@ Register TagPrefix="dnn" TagName="MENU" src="~/DesktopModules/DDRMenu/Menu.ascx" %>
<%@ Register TagPrefix="dnn" Namespace="DotNetNuke.Web.DDRMenu.TemplateEngine" Assembly="DotNetNuke.Web.DDRMenu" %>
<%@ Register TagPrefix="r2i" TagName="header" Src="./resources/includes/header.ascx" %>
<%@ Register TagPrefix="r2i" TagName="footer" Src="./resources/includes/footer.ascx" %>
<%@ Register TagPrefix="dnn" TagName="Logo" Src="~/Admin/Skins/logo.ascx" %>

<r2i:header id="header" runat="server" />
<main>
	<article>
    	<div id="ContentPane" runat="server"></div>
    </article>
</main>
<r2i:footer id="footer" runat="server" />