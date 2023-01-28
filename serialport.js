import SerialPort from "@serialport/stream";
import MockBinding from "@serialport/binding-mock";
import Readline from "@serialport/parser-readline";

MockBinding.createPort("/dev/ROBOT", { echo: true, record: true });
SerialPort.Binding = MockBinding;
let port = new SerialPort("/dev/ROBOT"); //is a port instance
let parser = new Readline();

port.pipe(parser);

port.on("open", () => {
  console.log("Port is open");
});

parser.on("data", function (data) {
  console.log("Received data from port: ", data); //recieve from port set to data
});

export default port;
