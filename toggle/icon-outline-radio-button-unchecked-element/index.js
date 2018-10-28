import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineRadioButtonUncheckedElement
 * @class IconOutlineRadioButtonUncheckedElement
 * @extends {AoflElement}
 */
class IconOutlineRadioButtonUncheckedElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineRadioButtonUncheckedElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-radio-button-unchecked';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineRadioButtonUncheckedElement.is, IconOutlineRadioButtonUncheckedElement);

export default IconOutlineRadioButtonUncheckedElement;
