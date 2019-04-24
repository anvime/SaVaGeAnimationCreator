import React, {Component} from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
 
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
    handleSend = () => {
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

    render() {
        return (
            <div>
                <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
                    Prześlij plik SVG
                </Button>
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