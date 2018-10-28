import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneTranslateElement
 * @class IconTwotoneTranslateElement
 * @extends {AoflElement}
 */
class IconTwotoneTranslateElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneTranslateElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-translate';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneTranslateElement.is, IconTwotoneTranslateElement);

export default IconTwotoneTranslateElement;
