import { Command } from "commander";

const program = new Command();

// declare the program

program
  .name("string-util")
  .description("CLI to some Javascript string utilities")
  .version("0.0.1");

// add actions onto that CLI

program
  .argument("<string>", "string to log")
  .option("-c, --capitalize", "Capitalize the message")
  .action(
    (
      message: string,
      opts: {
        capitalize?: boolean;
      }
    ) => {
      if (opts.capitalize) {
        console.log(`Hello ${message.toUpperCase()}`);
      } else {
        console.log(`Hello ${message}`);
      }
    }
  )
  .description("This action will say hello");

program
  .command("add <numbers...>")
  .action((numbers: number[]) => {
    const total = numbers.reduce((a, b) => a + b, 0);
    console.log(`Total: ${total}`);
  })
  .description("add numbers and log the total");

program
  .command("get-max-number <numbers...>")
  .action((numbers: number[]) => {
    const max = Math.max(...numbers);
    console.log(`Max: ${max}`);
  })
  .description("log the highest number in an array");

// execute the CLI with the given arguments

program.parse(process.argv);
