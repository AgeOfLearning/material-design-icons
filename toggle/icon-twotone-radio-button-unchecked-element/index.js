import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneRadioButtonUncheckedElement
 * @class IconTwotoneRadioButtonUncheckedElement
 * @extends {AoflElement}
 */
class IconTwotoneRadioButtonUncheckedElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneRadioButtonUncheckedElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-radio-button-unchecked';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneRadioButtonUncheckedElement.is, IconTwotoneRadioButtonUncheckedElement);

export default IconTwotoneRadioButtonUncheckedElement;
