import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneAdjustElement
 * @class IconTwotoneAdjustElement
 * @extends {AoflElement}
 */
class IconTwotoneAdjustElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneAdjustElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-adjust';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneAdjustElement.is, IconTwotoneAdjustElement);

export default IconTwotoneAdjustElement;
