import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineRadioButtonCheckedElement
 * @class IconOutlineRadioButtonCheckedElement
 * @extends {AoflElement}
 */
class IconOutlineRadioButtonCheckedElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineRadioButtonCheckedElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-radio-button-checked';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineRadioButtonCheckedElement.is, IconOutlineRadioButtonCheckedElement);

export default IconOutlineRadioButtonCheckedElement;
