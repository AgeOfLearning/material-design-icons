import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpRouterElement
 * @class IconSharpRouterElement
 * @extends {AoflElement}
 */
class IconSharpRouterElement extends AoflElement {
  /**
   * Creates an instance of IconSharpRouterElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-router';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpRouterElement.is, IconSharpRouterElement);

export default IconSharpRouterElement;
