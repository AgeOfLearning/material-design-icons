import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundTextFieldsElement
 * @class IconRoundTextFieldsElement
 * @extends {AoflElement}
 */
class IconRoundTextFieldsElement extends AoflElement {
  /**
   * Creates an instance of IconRoundTextFieldsElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-text-fields';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundTextFieldsElement.is, IconRoundTextFieldsElement);

export default IconRoundTextFieldsElement;
