import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpMicNoneElement
 * @class IconSharpMicNoneElement
 * @extends {AoflElement}
 */
class IconSharpMicNoneElement extends AoflElement {
  /**
   * Creates an instance of IconSharpMicNoneElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-mic-none';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpMicNoneElement.is, IconSharpMicNoneElement);

export default IconSharpMicNoneElement;
