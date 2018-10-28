import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneRowingElement
 * @class IconTwotoneRowingElement
 * @extends {AoflElement}
 */
class IconTwotoneRowingElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneRowingElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-rowing';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneRowingElement.is, IconTwotoneRowingElement);

export default IconTwotoneRowingElement;
