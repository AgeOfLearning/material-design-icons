import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneWcElement
 * @class IconTwotoneWcElement
 * @extends {AoflElement}
 */
class IconTwotoneWcElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneWcElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-wc';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneWcElement.is, IconTwotoneWcElement);

export default IconTwotoneWcElement;
