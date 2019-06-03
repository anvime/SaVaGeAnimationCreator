import React, {Component} from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
const writeFileP = require("write-file-p");


class SvgCodeLoader extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            svgCode: <div></div>
        };

    }

    handleClickOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    handleChange = (event) => {
        this.setState({svgCode: event.target.value});
    };

    handleSubmit = (event) => {
        this.setState({svgCode: event.target.value});
        var loadSvgFunction = this.props.loadSvg;
        loadSvgFunction(this.state.svgCode)
        this.setState({open: false});
    };

    setSvgFromFile = (svg) => {
        this.setState({svgCode: svg});
            var loadSvgFunction = this.props.loadSvg;
            loadSvgFunction(this.state.svgCode)

    };

    loadSvgFromFile = () => {
        var fileToLoad = document.getElementById("fileToLoad").files[0];
        const reader = new FileReader()
        return new Promise((resolve, reject) => {
            reader.onload = event => resolve(event.target.result)
            reader.onerror = error => reject(error)
            reader.readAsText(fileToLoad)
        })
        };

     placeFileContent = () =>{
	    this.loadSvgFromFile().then(content => {
  	    this.setState({svgCode: content});
            var loadSvgFunction = this.props.loadSvg;
            loadSvgFunction(this.state.svgCode)
    }).catch(error => console.log(error))
    };


    handleSave = () => {
        var text = (this.state.svgCode);
        var filename = "svg.xml";
        var element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
        element.setAttribute('download', filename);
        element.style.display = 'none';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    };



    render() {
        return (
            <div>
                <Button id="codeLoaderButton1" variant="outlined"  onClick={this.handleClickOpen}>
                    Prześlij kod pliku SVG
                </Button>
                <div className="upload-btn-wrapper">
                    <Button id="codeLoaderButton2" variant="outlined"  >
                        Prześlij  plik SVG
                    </Button>
                <input type="file" id="fileToLoad" onInput={this.placeFileContent}/>
                <Button id="codeLoaderButton3" variant="outlined"  onClick={this.handleSave} >
                    Zapisz obecny plik
                </Button>
                </div>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogContent className="SvgCodePaste">
                        <DialogContentText>
                            Wklej swój obraz/animację svg.
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="xml"
                            multiline
                            rows="20"
                            onChange={this.handleChange}
                            label="Kod svg"
                            fullWidth
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Zamknij
                        </Button>
                        <Button onClick={this.handleSubmit} color="primary">
	                            Prześlij
	                    </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}
export default SvgCodeLoader;