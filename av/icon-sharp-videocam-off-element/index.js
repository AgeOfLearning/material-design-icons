import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpVideocamOffElement
 * @class IconSharpVideocamOffElement
 * @extends {AoflElement}
 */
class IconSharpVideocamOffElement extends AoflElement {
  /**
   * Creates an instance of IconSharpVideocamOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-videocam-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpVideocamOffElement.is, IconSharpVideocamOffElement);

export default IconSharpVideocamOffElement;
