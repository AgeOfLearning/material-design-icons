import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneTimer10Element
 * @class IconTwotoneTimer10Element
 * @extends {AoflElement}
 */
class IconTwotoneTimer10Element extends AoflElement {
  /**
   * Creates an instance of IconTwotoneTimer10Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-timer-10';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneTimer10Element.is, IconTwotoneTimer10Element);

export default IconTwotoneTimer10Element;
