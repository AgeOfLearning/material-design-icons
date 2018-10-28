import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotonePhonePausedElement
 * @class IconTwotonePhonePausedElement
 * @extends {AoflElement}
 */
class IconTwotonePhonePausedElement extends AoflElement {
  /**
   * Creates an instance of IconTwotonePhonePausedElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-phone-paused';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotonePhonePausedElement.is, IconTwotonePhonePausedElement);

export default IconTwotonePhonePausedElement;
