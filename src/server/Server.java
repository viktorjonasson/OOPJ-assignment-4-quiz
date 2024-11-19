package server;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.net.ServerSocket;
import java.net.Socket;
import java.util.Arrays;

public class Server {
    Server(String address, int port) {
        try (ServerSocket serverSocket = new ServerSocket(port);
             Socket clientSocket = serverSocket.accept();
             PrintWriter printWriter = new PrintWriter(clientSocket.getOutputStream());
             BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(clientSocket.getInputStream()))) {

            String request;
            String[] serverAnswer;
            while (true) {
                if ((request = bufferedReader.readLine()) != null) {
                    serverAnswer = processClientRequest();
                    printWriter.write(Arrays.toString(serverAnswer));
                }
            }
        } catch (IOException e) {
            //TO DO: FIX THIS
        }
    }

    private String[] processClientRequest() {
            return getQuestionSet();
    }

    private String[] getQuestionSet() {
        String[] questionSet = {"Question",
                                "Option 1",
                                "Option 2",
                                "Option 3",
                                "Option 4" };
        return questionSet;
    }

    public static void main(String[] args) {
        int port = 12345;
        String address = "127.0.0.1";
        new Server(address, port);
    }
}
