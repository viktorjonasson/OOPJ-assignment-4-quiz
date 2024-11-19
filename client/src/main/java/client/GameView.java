package client;

import javafx.application.Application;
import javafx.scene.Scene;
import javafx.scene.web.WebView;
import javafx.stage.Stage;
import java.net.URL;

public class GameView extends Application {
    @Override
    public void start(Stage stage) {
        WebView webView = new WebView();
        URL resourceURL = getClass().getResource("/client/playerScreen.html");
        if (resourceURL == null) {
            System.out.println("Resource not found!");
        } else {
            System.out.println("Resource found at: " + resourceURL.toExternalForm());
            webView.getEngine().load(resourceURL.toExternalForm());
        }
        Scene scene = new Scene(webView, 800, 600);
        stage.setTitle("Quiz Kampen");
        stage.setScene(scene);
        stage.show();
    }

    public static void main(String[] args) {
        launch();
    }
}