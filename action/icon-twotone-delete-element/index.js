import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneDeleteElement
 * @class IconTwotoneDeleteElement
 * @extends {AoflElement}
 */
class IconTwotoneDeleteElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneDeleteElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-delete';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneDeleteElement.is, IconTwotoneDeleteElement);

export default IconTwotoneDeleteElement;
