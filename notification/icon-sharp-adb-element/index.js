import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpAdbElement
 * @class IconSharpAdbElement
 * @extends {AoflElement}
 */
class IconSharpAdbElement extends AoflElement {
  /**
   * Creates an instance of IconSharpAdbElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-adb';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpAdbElement.is, IconSharpAdbElement);

export default IconSharpAdbElement;
