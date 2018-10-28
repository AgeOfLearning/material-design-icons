import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneForward10Element
 * @class IconTwotoneForward10Element
 * @extends {AoflElement}
 */
class IconTwotoneForward10Element extends AoflElement {
  /**
   * Creates an instance of IconTwotoneForward10Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-forward-10';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneForward10Element.is, IconTwotoneForward10Element);

export default IconTwotoneForward10Element;
