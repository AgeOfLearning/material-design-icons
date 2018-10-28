import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpMessageElement
 * @class IconSharpMessageElement
 * @extends {AoflElement}
 */
class IconSharpMessageElement extends AoflElement {
  /**
   * Creates an instance of IconSharpMessageElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-message';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpMessageElement.is, IconSharpMessageElement);

export default IconSharpMessageElement;
