import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneForwardElement
 * @class IconTwotoneForwardElement
 * @extends {AoflElement}
 */
class IconTwotoneForwardElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneForwardElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-forward';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneForwardElement.is, IconTwotoneForwardElement);

export default IconTwotoneForwardElement;
