import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneRadioElement
 * @class IconTwotoneRadioElement
 * @extends {AoflElement}
 */
class IconTwotoneRadioElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneRadioElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-radio';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneRadioElement.is, IconTwotoneRadioElement);

export default IconTwotoneRadioElement;
