import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpCachedElement
 * @class IconSharpCachedElement
 * @extends {AoflElement}
 */
class IconSharpCachedElement extends AoflElement {
  /**
   * Creates an instance of IconSharpCachedElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-cached';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpCachedElement.is, IconSharpCachedElement);

export default IconSharpCachedElement;
