import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpLinkElement
 * @class IconSharpLinkElement
 * @extends {AoflElement}
 */
class IconSharpLinkElement extends AoflElement {
  /**
   * Creates an instance of IconSharpLinkElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-link';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpLinkElement.is, IconSharpLinkElement);

export default IconSharpLinkElement;
