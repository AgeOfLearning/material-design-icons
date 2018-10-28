import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneSmokeFreeElement
 * @class IconTwotoneSmokeFreeElement
 * @extends {AoflElement}
 */
class IconTwotoneSmokeFreeElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneSmokeFreeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-smoke-free';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneSmokeFreeElement.is, IconTwotoneSmokeFreeElement);

export default IconTwotoneSmokeFreeElement;
