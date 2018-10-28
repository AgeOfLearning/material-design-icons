import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneNavigateNextElement
 * @class IconTwotoneNavigateNextElement
 * @extends {AoflElement}
 */
class IconTwotoneNavigateNextElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneNavigateNextElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-navigate-next';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneNavigateNextElement.is, IconTwotoneNavigateNextElement);

export default IconTwotoneNavigateNextElement;
