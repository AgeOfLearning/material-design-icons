import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpMicOffElement
 * @class IconSharpMicOffElement
 * @extends {AoflElement}
 */
class IconSharpMicOffElement extends AoflElement {
  /**
   * Creates an instance of IconSharpMicOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-mic-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpMicOffElement.is, IconSharpMicOffElement);

export default IconSharpMicOffElement;
