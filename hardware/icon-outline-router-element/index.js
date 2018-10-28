import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineRouterElement
 * @class IconOutlineRouterElement
 * @extends {AoflElement}
 */
class IconOutlineRouterElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineRouterElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-router';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineRouterElement.is, IconOutlineRouterElement);

export default IconOutlineRouterElement;
