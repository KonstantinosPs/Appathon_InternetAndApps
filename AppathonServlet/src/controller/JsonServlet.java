package controller;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


@WebServlet("/JsonServlet")
public class JsonServlet extends HttpServlet {
		private static final long serialVersionUID = 1L;
		String urlsite = "hellothere";
		boolean urlisLoaded = false ;
		String json ;
	       

    /**
     * @see HttpServlet#HttpServlet()
     */
    public JsonServlet() {
        super();
        // TODO Auto-generated constructor stub
    }
	

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String site = "some url";
		response.addHeader("Access-Control-Allow-Origin","http://localhost:3000");
		site = request.getParameter("reqValue");
		
		System.out.println(site);
		urlsite = site.replace(" ", "+") ;
		System.out.println(urlsite);
		if (site != "some url") {
			urlisLoaded = true ;
		}
		
		if (urlisLoaded) {
	    	  HttpClient client = HttpClient.newHttpClient();
	    	  HttpRequest requesting = HttpRequest.newBuilder().uri(URI.create(urlsite)).build();
	    	  json = client.sendAsync(requesting, HttpResponse.BodyHandlers.ofString())
	    	  	.thenApply(HttpResponse::body)
	    	  	.join();
	    	  	
	    	System.out.println(json);
	        response.setContentType("application/json");
	        response.setCharacterEncoding("UTF-8");
	        response.getWriter().write(json);
	    	}
	}

}
