package code;

import javafx.application.Application;
import javafx.fxml.FXMLLoader;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.stage.Stage;

public class Main extends Application {

    private static final int WIDTH = 427;
    private static final int HEIGHT = 427;

    @Override
    public void start(Stage primaryStage) {

        try {
            Parent root = FXMLLoader.load(getClass().getResource("Calculator.fxml"));
            primaryStage.setTitle("CalculatorFx");
            primaryStage.setScene(new Scene(root, WIDTH, HEIGHT));
            primaryStage.show();
        } catch (Exception e) {
            return;
        }
    }


    public static void main(String[] args) {
        launch(args);
    }
}
