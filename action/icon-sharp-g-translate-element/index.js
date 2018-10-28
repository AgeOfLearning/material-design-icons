import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpGTranslateElement
 * @class IconSharpGTranslateElement
 * @extends {AoflElement}
 */
class IconSharpGTranslateElement extends AoflElement {
  /**
   * Creates an instance of IconSharpGTranslateElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-g-translate';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpGTranslateElement.is, IconSharpGTranslateElement);

export default IconSharpGTranslateElement;
