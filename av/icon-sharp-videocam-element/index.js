import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpVideocamElement
 * @class IconSharpVideocamElement
 * @extends {AoflElement}
 */
class IconSharpVideocamElement extends AoflElement {
  /**
   * Creates an instance of IconSharpVideocamElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-videocam';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpVideocamElement.is, IconSharpVideocamElement);

export default IconSharpVideocamElement;
