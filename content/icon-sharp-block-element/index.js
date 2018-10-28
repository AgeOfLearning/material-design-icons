import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpBlockElement
 * @class IconSharpBlockElement
 * @extends {AoflElement}
 */
class IconSharpBlockElement extends AoflElement {
  /**
   * Creates an instance of IconSharpBlockElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-block';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpBlockElement.is, IconSharpBlockElement);

export default IconSharpBlockElement;
