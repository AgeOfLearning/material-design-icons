import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneGTranslateElement
 * @class IconTwotoneGTranslateElement
 * @extends {AoflElement}
 */
class IconTwotoneGTranslateElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneGTranslateElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-g-translate';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneGTranslateElement.is, IconTwotoneGTranslateElement);

export default IconTwotoneGTranslateElement;
