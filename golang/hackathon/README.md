# hackathon

This project is a compilation of Golang scripts which uses [mage](magefile.org) to execute.

mage [options] [target]

Mage is a make-like command runner.  See https://magefile.org for full docs.

Commands:
  -clean    clean out old generated binaries from CACHE_DIR
  -compile <string>
            output a static binary to the given path
  -h        show this help
  -init     create a starting template if no mage files exist
  -l        list mage targets in this directory
  -version  show version info for the mage binary

Options:
  -d <string> 
            directory to read magefiles from (default ".")
  -debug    turn on debug messages
  -f        force recreation of compiled magefile
  -goarch   sets the GOARCH for the binary created by -compile (default: current arch)
  -gocmd <string>
            use the given go binary to compile the output (default: "go")
  -goos     sets the GOOS for the binary created by -compile (default: current OS)
  -h        show description of a target
  -keep     keep intermediate mage files around after running
  -t <string>
            timeout in duration parsable format (e.g. 5m30s)
  -v        show verbose output when running mage targets
  -w <string>
            working directory where magefiles will run (default -d value)

## basic execution
```
    cd example.com
    mage hello
```