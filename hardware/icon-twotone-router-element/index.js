import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneRouterElement
 * @class IconTwotoneRouterElement
 * @extends {AoflElement}
 */
class IconTwotoneRouterElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneRouterElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-router';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneRouterElement.is, IconTwotoneRouterElement);

export default IconTwotoneRouterElement;
