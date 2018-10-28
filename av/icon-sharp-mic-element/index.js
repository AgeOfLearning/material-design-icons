import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpMicElement
 * @class IconSharpMicElement
 * @extends {AoflElement}
 */
class IconSharpMicElement extends AoflElement {
  /**
   * Creates an instance of IconSharpMicElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-mic';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpMicElement.is, IconSharpMicElement);

export default IconSharpMicElement;
