import React from 'react';
import styles from './styles';

class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isActive: false,
            btnLabel: this.props.btnLabel,
        }
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
        this.copyToClipboard = this.copyToClipboard.bind(this);
    }

    handleMouseEnter() {
        this.setState({ isActive: true });
        if (this.props.onMouseEnter) this.props.onMouseEnter();
    }

    handleMouseLeave() {
        this.setState({ isActive: false });
        if (this.props.onMouseLeave) this.props.onMouseLeave();
    }

    copyToClipboard() {
        const el = document.createElement('textarea');
        el.value = this.props.copyText || this.props.children.toString();
        const copiedText = this.props.copyText || this.props.children.toString();
        el.setAttribute('readonly', '');
        el.style.position = 'absolute';
        el.style.left = '-9999px';
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);

        this.setState({ btnLabel: this.props.onCopyBtnLabel });

        if (this.props.onCopy) this.props.onCopy(copiedText);

        setTimeout(() => {
            this.setState({ btnLabel: this.props.btnLabel });
        }, this.props.onCopyBtnLabelDuration);
    }

    render() {
        const { isActive, btnLabel } = this.state;
        let { containerStyle, activeContainerStyle, textStyle, activeTextStyle, btnStyle } = this.props;
        containerStyle = { ...styles.containerStyle, ...containerStyle };
        textStyle = { ...styles.textStyle, ...textStyle };
        let copyBtnStyle = styles.copyBtnStyle;

        if (isActive) {
            containerStyle = { ...containerStyle, ...styles.activeContainerStyle, ...activeContainerStyle };
            copyBtnStyle = { ...copyBtnStyle, ...styles.activeCopyBtnStyle, ...btnStyle };
            textStyle = { ...textStyle, ...activeTextStyle };
        }

        return (
            <div style={{ ...containerStyle }} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} >
                <div style={{ ...textStyle }}>
                    {this.props.children}
                </div>
                <button style={copyBtnStyle} onClick={this.copyToClipboard}>{btnLabel}</button>
            </div>
        )
    }
};

export default MyComponent;

MyComponent.defaultProps = {
    children: 'This is copyable text',
    copyText: null,

    btnLabel: 'copy',
    onCopyBtnLabel: 'copied',
    onCopyBtnLabelDuration: 3000,

    // Styles
    containerStyle: {},
    activeContainerStyle: {},
    textStyle: {},
    activeTextStyle: {},
    btnStyle: {},

    // Event Handlers
    onCopy: null,
    onMouseEnter: null,
    onMouseLeave: null,
}

