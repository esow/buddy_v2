import { debounce, isObject } from "lodash";

import { Component } from "react";
import * as React from "react";
import { editUser } from "../store/user/actions";
import store from "../store/store";

type DefaultProps = Readonly<typeof defaultProps>;

type FormEditWrapperProps = { value: any, onChange: typeof editUser, label: string };

const defaultProps = {
    isEditing: true,
    valuePropName: "value",
    onChangePropName: "onChange",
    passIsEditing: false,
    dispatchDelay: 250,
};

type Props = FormEditWrapperProps & Partial<DefaultProps>;

class FormEditWrapper extends Component<Props, { value: any }> {

    static defaultProps = defaultProps;

    constructor(props: Props) {
        super(props);
        const boundDispatchAttributes = this.dispatchAttributeChange.bind(this);
        this.dispatchAttributeChange = debounce(boundDispatchAttributes, props.dispatchDelay);

        this.state = {
            value: undefined,
        };
    }

    getValueFromEvent(e: any, data: any) {
        const { currentTarget } = e;

        let newValues;

        if (data.value) {
            return data.value;
        }

        if (currentTarget) {
            const value = (currentTarget.type === "checkbox") ? currentTarget.checked : currentTarget.value;
            return value;
        } else if (isObject(e)) {
            return e;
        }

        return newValues;
    }

    componentWillReceiveProps() {
        // Reset any component-local changes  Note that the incoming props
        // SHOULD match the changes we just had in local state.
        this.setState({ value: undefined });
    }

    onChildChange = (e: any, data: any) => {
        const { isEditing } = this.props;

        if (isEditing) {
            const newValues = this.getValueFromEvent(e, data);
            if (newValues) {

                // Update our component-local state with these changes, so that the child components
                // will re-render with the new values right away
                this.setState({ value: newValues });

                // Because this is debounced, we will only call the passed-in props.onChange
                // once there is a pause in changes (like letting go of a held-down key)
                this.dispatchAttributeChange(newValues);
            }
        }
    }

    dispatchAttributeChange(change: any) {
        store.dispatch(this.props.onChange({ label: this.props.label, data: change }));
    }

    render() {
        const { value: propsValue, children } = this.props;
        const { isEditing, passIsEditing, valuePropName, onChangePropName } = this.props;

        // Use incoming values from props IF there is no corresponding value
        // in local component state.  This allows local changes to win out.
        const currentValues = this.state.value !== undefined ? this.state.value : propsValue;

        console.log(currentValues);
        console.log(propsValue);
        console.log(this.state.value);

        let valueToPassDown = currentValues;

        const editingValue = passIsEditing ? { isEditing } : {};

        // Force the child form to re-render itself with these values
        const child = React.Children.only(children);

        if (valuePropName !== undefined && onChangePropName !== undefined) {

            const updatedChild = React.cloneElement(child, {
                [valuePropName]: valueToPassDown,
                [onChangePropName]: this.onChildChange,
                ...editingValue
            });

            return updatedChild;
        }
        return null;

    }
}

export default FormEditWrapper;
