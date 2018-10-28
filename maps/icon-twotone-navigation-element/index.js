import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneNavigationElement
 * @class IconTwotoneNavigationElement
 * @extends {AoflElement}
 */
class IconTwotoneNavigationElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneNavigationElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-navigation';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneNavigationElement.is, IconTwotoneNavigationElement);

export default IconTwotoneNavigationElement;
