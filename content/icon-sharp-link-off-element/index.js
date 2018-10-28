import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpLinkOffElement
 * @class IconSharpLinkOffElement
 * @extends {AoflElement}
 */
class IconSharpLinkOffElement extends AoflElement {
  /**
   * Creates an instance of IconSharpLinkOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-link-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpLinkOffElement.is, IconSharpLinkOffElement);

export default IconSharpLinkOffElement;
