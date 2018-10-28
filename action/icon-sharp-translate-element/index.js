import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpTranslateElement
 * @class IconSharpTranslateElement
 * @extends {AoflElement}
 */
class IconSharpTranslateElement extends AoflElement {
  /**
   * Creates an instance of IconSharpTranslateElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-translate';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpTranslateElement.is, IconSharpTranslateElement);

export default IconSharpTranslateElement;
