import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneRadioButtonCheckedElement
 * @class IconTwotoneRadioButtonCheckedElement
 * @extends {AoflElement}
 */
class IconTwotoneRadioButtonCheckedElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneRadioButtonCheckedElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-radio-button-checked';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneRadioButtonCheckedElement.is, IconTwotoneRadioButtonCheckedElement);

export default IconTwotoneRadioButtonCheckedElement;
