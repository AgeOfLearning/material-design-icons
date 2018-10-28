import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneTimer3Element
 * @class IconTwotoneTimer3Element
 * @extends {AoflElement}
 */
class IconTwotoneTimer3Element extends AoflElement {
  /**
   * Creates an instance of IconTwotoneTimer3Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-timer-3';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneTimer3Element.is, IconTwotoneTimer3Element);

export default IconTwotoneTimer3Element;
