import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineGTranslateElement
 * @class IconOutlineGTranslateElement
 * @extends {AoflElement}
 */
class IconOutlineGTranslateElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineGTranslateElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-g-translate';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineGTranslateElement.is, IconOutlineGTranslateElement);

export default IconOutlineGTranslateElement;
