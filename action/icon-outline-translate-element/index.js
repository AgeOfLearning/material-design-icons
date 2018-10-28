import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineTranslateElement
 * @class IconOutlineTranslateElement
 * @extends {AoflElement}
 */
class IconOutlineTranslateElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineTranslateElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-translate';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineTranslateElement.is, IconOutlineTranslateElement);

export default IconOutlineTranslateElement;
