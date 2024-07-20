import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

class Collapse extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            opened: true,
        };
    }

    toggleCollapse = () => {
        const { opened } = this.state;
        this.setState({ opened: !opened });
    };

    render() {
        const { text } = this.props;
        const { opened } = this.state;

        const collapseClass = classNames('collapse', { show: opened });


        return (
            <div className="container mt-5">
                <div>
                    <p>
                        <a
                            className="btn btn-primary"
                            data-bs-toggle="collapse"
                            href="#"
                            role="button"
                            aria-expanded={opened}
                            onClick={this.toggleCollapse}
                        >
                            {opened ? 'Hide' : 'Show'}
                        </a>
                    </p>
                    <div className={collapseClass}>
                        <div className="card card-body">
                            {text}
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

Collapse.propTypes = {
    text: PropTypes.string.isRequired,
    opened: PropTypes.bool,
};

export default Collapse